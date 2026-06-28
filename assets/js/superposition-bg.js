/*
 * superposition-bg.js
 * "Toy models of superposition" background for the home page.
 *
 * Feature-vectors fan out, equally spaced, from a single origin just to the
 * right of the name title, spreading across the whole page (full-viewport, fixed). Most
 * rays end in a visible node (filled circle), their length auto-fitted so the
 * circle always lands inside the viewport. Two rays run off the right side
 * (no circle). Two downward rays grow longer as you scroll. The origin tracks
 * the photo's live position, so the figure is still when the page is still.
 * Honors prefers-reduced-motion.
 *
 * Contract-safe: lives in assets/js/ (not a gem-owned path) and is loaded
 * only by _pages/about.md, so it is scoped to the landing page.
 *
 * Tweak the CONFIG block below to adjust feel.
 */
(function () {
  "use strict";

  const CONFIG = {
    background: "#ffffff",
    titleSelector: ".post-title", // origin anchors to the name title
    originOffset: { x: 28, y: 0 }, // px to the right of the title text, vertically centred
    originFallback: { x: 0.45, y: 0.18 }, // used if the title isn't found
    lineWidth: 3,
    nodeRadius: 6,
    alpha: 0.28, // opacity of the whole figure (lines + nodes share one uniform alpha)
    originCircle: { color: "#9a9a9a", radius: 6 }, // faint grey disc hiding the ray convergence (matches nodeRadius)
    colors: ["#4cae8a", "#5fbb46", "#8cc63f", "#c3d72e", "#f4d135"], // cycled per ray
    count: 7, // total rays, equally spaced around the origin
    baseAngle: -20, // deg; rotates the whole star (0 = first ray points right)
    angleOffsets: { 1: -10, 2: -10 }, // per-ray deg tweak (−ve = anticlockwise): nudge the down & down-right rays
    nodeReach: 0.82, // node sits this far along the distance from origin to viewport edge
    growReach: { start: 0.55, end: 0.92 }, // downward rays grow between these as you scroll
    edgeLength: 1.3, // off-page rays drawn this * diagonal (no circle)
    edgeIndices: [0, 1], // rays that run off the page (rightwards)
    growIndices: [2, 3], // downward rays that grow on scroll
  };

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const canvas = document.createElement("canvas");
  canvas.id = "superposition-bg";
  document.body.appendChild(canvas); // direct body child: no stacking-context traps
  document.body.classList.add("superposition-active"); // scopes home-only CSS
  const ctx = canvas.getContext("2d");
  // Offscreen layer: the whole figure is drawn here at FULL opacity, then
  // composited onto the visible canvas at CONFIG.alpha. This keeps overlaps
  // (rays meeting at the origin, a ray entering its end node) opaque and
  // single-toned — no darkening/"doubling" — while the figure as a whole stays
  // faint.
  const layer = document.createElement("canvas");
  const lctx = layer.getContext("2d");
  const navbar = document.getElementById("navbar");

  let width = 0;
  let height = 0;
  let dpr = 1;
  let ticking = false;

  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function rgba(c, a) {
    return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")";
  }

  // build the equally-spaced rays once
  const rays = [];
  for (let i = 0; i < CONFIG.count; i++) {
    const deg = CONFIG.baseAngle + (i * 360) / CONFIG.count + (CONFIG.angleOffsets[i] || 0);
    rays.push({
      rgb: hexToRgb(CONFIG.colors[i % CONFIG.colors.length]),
      angle: (deg * Math.PI) / 180,
      edge: CONFIG.edgeIndices.indexOf(i) !== -1,
      grow: CONFIG.growIndices.indexOf(i) !== -1,
    });
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    layer.width = canvas.width;
    layer.height = canvas.height;
    lctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // origin = just to the right of the name title text, in viewport coords
  // (canvas is fixed). A Range measures the tight bounding box of the title
  // text (the <h1> is a full-width block, so its own rect would extend to the
  // content edge, not the end of "Stevinson"), then we anchor off its right.
  function getOrigin() {
    const el = document.querySelector(CONFIG.titleSelector);
    if (el) {
      let r;
      try {
        const range = document.createRange();
        range.selectNodeContents(el);
        r = range.getBoundingClientRect();
      } catch (e) {
        r = el.getBoundingClientRect();
      }
      if (r && r.width > 0 && r.height > 0) {
        return { x: r.right + CONFIG.originOffset.x, y: r.top + r.height / 2 + CONFIG.originOffset.y };
      }
    }
    return { x: CONFIG.originFallback.x * width, y: CONFIG.originFallback.y * height };
  }

  // distance from origin to the viewport edge along (dx,dy)
  function edgeDistance(ox, oy, dx, dy) {
    let t = Infinity;
    if (dx > 1e-6) t = Math.min(t, (width - ox) / dx);
    else if (dx < -1e-6) t = Math.min(t, -ox / dx);
    if (dy > 1e-6) t = Math.min(t, (height - oy) / dy);
    else if (dy < -1e-6) t = Math.min(t, -oy / dy);
    return isFinite(t) ? t : Math.hypot(width, height);
  }

  function getScrollFraction() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max <= 0) return 0;
    return Math.min(Math.max(window.scrollY / max, 0), 1);
  }

  function updateNavbar() {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  }

  function render() {
    // visible canvas: just the background
    ctx.fillStyle = CONFIG.background;
    ctx.fillRect(0, 0, width, height);

    // figure is drawn on the offscreen layer at full opacity
    lctx.clearRect(0, 0, width, height);

    const origin = getOrigin();
    const diag = Math.hypot(width, height);
    const scrollFrac = getScrollFraction();
    const growReach = CONFIG.growReach.start + (CONFIG.growReach.end - CONFIG.growReach.start) * scrollFrac;

    lctx.lineCap = "round";
    lctx.lineWidth = CONFIG.lineWidth;
    for (let i = 0; i < rays.length; i++) {
      const r = rays[i];
      const dx = Math.cos(r.angle);
      const dy = Math.sin(r.angle);

      let len;
      if (r.edge) {
        len = CONFIG.edgeLength * diag; // runs off the page
      } else {
        const reach = r.grow ? growReach : CONFIG.nodeReach;
        len = edgeDistance(origin.x, origin.y, dx, dy) * reach;
      }
      const ex = origin.x + dx * len;
      const ey = origin.y + dy * len;

      // line and node share the same full-opacity colour, so they read as one
      // solid shape (no darker overlap where the line meets the circle)
      lctx.strokeStyle = rgba(r.rgb, 1);
      lctx.beginPath();
      lctx.moveTo(origin.x, origin.y);
      lctx.lineTo(ex, ey);
      lctx.stroke();

      if (!r.edge) {
        lctx.fillStyle = rgba(r.rgb, 1);
        lctx.beginPath();
        lctx.arc(ex, ey, CONFIG.nodeRadius, 0, Math.PI * 2);
        lctx.fill();
      }
    }

    // grey disc over the convergence point, hiding the overlapping ray ends
    lctx.fillStyle = CONFIG.originCircle.color;
    lctx.beginPath();
    lctx.arc(origin.x, origin.y, CONFIG.originCircle.radius, 0, Math.PI * 2);
    lctx.fill();

    // composite the whole figure onto the visible canvas at one uniform alpha
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = CONFIG.alpha;
    ctx.drawImage(layer, 0, 0);
    ctx.restore();
  }

  // re-render at most once per frame while scrolling; idle when still
  function onScroll() {
    updateNavbar();
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      render();
      ticking = false;
    });
  }

  function init() {
    resize();
    updateNavbar();
    render();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () {
    resize();
    render();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
