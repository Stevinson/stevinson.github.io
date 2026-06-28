---
layout: about
title: experience
permalink: /experience/
nav: true
nav_order: 2
profile:
  align: right
  image: profile_pic_me_square.jpg
  image_circular: true # crops the image to make it circular
---

<script defer src="{{ '/assets/js/superposition-bg.js' | relative_url }}"></script>

{{ site.data.intro.text | markdownify }}

<div style="clear: both"></div>

<style>
  /* Drop the redundant name in the top-left navbar on this page. */
  .navbar-brand.title { display: none; }
  .timeline { margin-top: 1.5rem; }
  .timeline + .timeline { margin-top: 2.5rem; }
  /* Match the "news" / "selected publications" headers (1.75rem, bold). */
  .timeline h2 {
    font-size: 1.75rem;
    font-weight: 700;
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 0.4rem;
    margin-bottom: 1.2rem;
  }
  .xp-entry {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 1.5rem;
    align-items: start;
    padding: 1rem 0;
  }
  .xp-entry + .xp-entry { border-top: 1px solid var(--global-divider-color); }
  .xp-left { display: flex; flex-direction: column; align-items: flex-start; gap: 0.7rem; }
  .xp-dates { display: flex; flex-direction: column; }
  .xp-date { font-size: 0.85rem; color: var(--global-text-color-light); white-space: nowrap; }
  .xp-duration { font-size: 0.78rem; color: var(--global-text-color-light); white-space: nowrap; }
  .xp-logo { width: 110px; height: 110px; object-fit: contain; border-radius: 8px; }
  .xp-title { margin: 0; font-weight: 600; }
  .xp-org { margin: 0.15rem 0 0.5rem; color: var(--global-theme-color); }
  .xp-org a { color: var(--global-theme-color); }
  .xp-desc { margin: 0; color: var(--global-text-color); }
  @media (max-width: 576px) {
    .xp-entry { grid-template-columns: 1fr; gap: 0.6rem; }
    /* Stack the logo under the dates (instead of beside them) on phones. */
    .xp-left { flex-direction: column; align-items: flex-start; }
  }
</style>

{% assign groups = "work,studies" | split: "," %}
{% assign labels = "work,studies" | split: "," %}

{% for group in groups %}
{% assign entries = site.data.experience[group] %}
{% if entries %}

  <div class="timeline">
    <h2>{{ labels[forloop.index0] }}</h2>
    {% for item in entries %}
    <div class="xp-entry">
      <div class="xp-left">
        {% assign date_parts = item.date | split: " · " %}
        <div class="xp-dates">
          <span class="xp-date">{{ date_parts[0] }}</span>
          {% if date_parts.size > 1 %}<span class="xp-duration">{{ date_parts[1] }}</span>{% endif %}
        </div>
        {% if item.logo %}
        <img class="xp-logo" src="{{ '/assets/img/logos/' | append: item.logo | relative_url }}" alt="{{ item.org }} logo" loading="lazy" />
        {% endif %}
      </div>
      <div class="xp-right">
        <p class="xp-title">{{ item.title }}</p>
        <p class="xp-org">
          {% if item.url %}<a href="{{ item.url }}">{{ item.org }}</a>{% else %}{{ item.org }}{% endif %}
        </p>
        <p class="xp-desc">{{ item.description }}</p>
      </div>
    </div>
    {% endfor %}
  </div>
  {% endif %}
{% endfor %}
