---
layout: about
permalink: /publications/
title: publications
nav: true
nav_order: 3
profile:
  align: right
  image: profile_pic_me_square.jpg
  image_circular: true # crops the image to make it circular
---

<!-- _pages/publications.md -->

<style>
  /* Drop the redundant name in the top-left navbar on this page. */
  .navbar-brand.title { display: none; }

  /* Hide the left thumbnail column (venue badge + preview image) on this page
     only, and let each entry use the full width. The home "selected
     publications" showcase keeps its thumbnails. */
  .publications .abbr { display: none; }
  .publications .col-sm-8 { flex: 0 0 100%; max-width: 100%; }
</style>

<script defer src="{{ '/assets/js/superposition-bg.js' | relative_url }}"></script>

{{ site.data.intro.text | markdownify }}

<div style="clear: both"></div>

<div class="publications">

{% bibliography %}

</div>
