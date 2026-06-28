---
layout: about
title: about
permalink: /
# subtitle: Research Scientist & PhD candidate, Imperial College London · Mechanistic Interpretability & Adversarial Robustness

profile:
  align: right
  image: profile_pic_me_square.jpg
  image_circular: true # crops the image to make it circular

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: false # list all news items; never a scroll box
  limit: 11 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false # hidden for now while the blog is unlinked
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<script defer src="{{ '/assets/js/superposition-bg.js' | relative_url }}"></script>

<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Edward Stevinson",
    "alternateName": "Ed Stevinson",
    "url": "https://stevinson.github.io",
    "image": "https://stevinson.github.io/assets/img/profile_pic_me_square.jpg",
    "jobTitle": "Research Scientist & PhD Candidate",
    "affiliation": { "@type": "Organization", "name": "Imperial College London" },
    "knowsAbout": ["Mechanistic Interpretability", "Adversarial Robustness", "AI Safety", "Neural Network Verification"],
    "sameAs": [
      "https://scholar.google.com/citations?user=m4_WK5oAAAAJ",
      "https://twitter.com/ed_stevinson",
      "https://github.com/Stevinson",
      "https://www.linkedin.com/in/edward-ai/"
    ]
  }
</script>

{{ site.data.intro.text | markdownify }}
