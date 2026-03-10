---
layout: post
title: "Open-Source Multimodal SAEs"
date: 2025-01-10
---

I've recently been contributing to ViT Prisma, an open-source mechanistic interpretability library focused on vision and multimodal models. The project was created by Sonia Joseph, drawing inspiration from Neel Nanda's TransformerLens. It provides both observational and interventional capabilities (e.g. attention head visualization, activation patching, direct logit attribution) and also SAE training capabilities.

My contributions have focused on the engineering aspects of the project, such as improving the SAE evaluation workflow, a native version of CLIP's text encoder, and increasing support for different models. I have also been using ViT Prisma in my own research to investigate adversarial attacks, and it has been a useful tool in providing insights into what is happening to latent features under attack.

If you're interested in exploring or contributing to the project, you can [find the repo here](https://github.com/soniajoseph/ViT-Prisma).

You can also find a blog on the project [here](https://www.alignmentforum.org/posts/kobJymvvcvhbjWFKe/laying-the-foundations-for-vision-and-multimodal-mechanistic).