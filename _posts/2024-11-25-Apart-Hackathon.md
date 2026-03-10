---
layout: post
title: "Apart Research: Reprogramming AI Models Hackathon"
date: 2024-11-25
---

[See the writeup here.](https://www.apartresearch.com/project/classification-on-latent-feature-activation-for-detecting-adversarial-prompt-vulnerabilities)

At Apart's mechanistic interpretability hackathon, we explored how large language models respond to adversarial attacks at the feature level. Working with Goodfire's SDK (docs [here](https://docs.goodfire.ai/)), we investigated whether latent activations could help identify harmful prompts.

**Research question:**

*Can latent activations extracted via the Goodfire SDK help classify adversarial versus safe prompts? And can we interpret classifiers to understand something about the attacks?*

**Introduction**

Adversarial inputs can lead language models to generate harmful outputs, posing risks to AI safety and reliability. Current methods struggle to efficiently identify these vulnerabilities. We explored whether examining a model's internal activations could provide a solution, specifically using sparse autoencoder features to detect adversarial prompts.

**Methodology**

We developed a method using sparse autoencoder feature activations to detect adversarial prompts in LLaMA-8B model via Goodfire's SDK. We:

1. Extracted latent feature activations
2. Trained logistic regression classifiers
3. Analysed successful versus unsuccessful attacks

**Results**

Our classifier successfully distinguished between:

* Adversarial and safe prompts.
* Successful and failed attack attempts.

We use these results to hypothesise that SAE activations could enable automated safety auditing based on model internals.

The full writeup of our results, entitled "Classification on Latent Feature Activation for Detecting Adversarial Prompt Vulnerabilities", can be found [here](https://www.apartresearch.com/project/classification-on-latent-feature-activation-for-detecting-adversarial-prompt-vulnerabilities). We emphasise that this work was all completed during the two-day timeframe of the hackathon, and further validation is needed!



