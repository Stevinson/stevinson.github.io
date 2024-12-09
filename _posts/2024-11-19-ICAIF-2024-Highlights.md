---
layout: post
title: "ICAIF 2024 Highlights"
date: 2024-11-19
---

Here are a couple of the presentations that stood out to me at the International Conference on AI in Finance (ICAIF) 2024:

### Sanmi Koyejo - Explainability in AI Measurement and Scaling

##### A critical examination of AI metrics and benchmarks that challenges some widely accepted beliefs in the field. 

Dr Koyejo gave a particularly interesting talk highlighting the need to scrutinise benchmarks and metrics in AI, and demonstrating how metric interpretation has led to questionable conclusions in AI research. His lab's work has challenged two major claims:

**The Scaling Hypothesis and Emergent Abilities**

The scaling hypothesis suggests LLM test loss improves predictably. However, "emergent abilities" were thought to appear unexpectedly at certain scales. In "Are emergent behaviours of large language models a mirage?" (Schaeffer & Miranda, 2023), his lab shows these "emergent abilities" likely stem from evaluation methods rather than actual phenomena:

* When using nonlinear metrics (like exact string matching), abilities appear to emerge suddenly.
* Using linear metrics on the same outputs shows smooth, predictable improvements.
* The team demonstrated they could create artificial "emergent abilities" simply by choosing particular evaluation metrics.

**Out-of-Distribution Performance Claims**

The reported phenomenon that in-distribution performance can linearly predict out-of-distribution (OOD) performance is challenged in their paper "On Domain Generalisation Datasets as Proxy Benchmarks for Causal Representation Learning" (Salaudeen et al., 2024):

* The "Accuracy on the line" claim provides false confidence in worst-case scenarios.
* Current benchmarks fail to capture critical edge cases.
* Direct OOD measurement remains necessary for reliable performance assessment.

### James Zhang - The Exploration on Time-Series Foundation Models

I have had my doubts over using foundation models for time series forecasting, due to the fundamental challenges of predicting the future and the recent works that have achieved state-of-the-art performance with very small models. However, Dr Zhang gave a very passionate proposal for foundation models for time series, for the scientific value of the research, their generalisability, and the insights foundation models offer into temporal pattern recognition. Dr Zhang emphasised that breakthroughs often come from unexpected directions. He explored the Ant Group's work in this area, focusing on advancements such as TimeLLM, TimeMixer, and iTransformer, along with the philosophical considerations underpinning these developments.















