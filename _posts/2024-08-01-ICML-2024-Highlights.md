---
layout: post
title: "ICML 2024 Highlights"
date: 2024-08-01
---

ICML 2024 was my first academic conference experience. While initially overwhelming, it was an great opportunity to understand current research trends. Here are the papers that particularly caught my attention:

### SparseTSF: Modeling Long-term Time Series Forecasting with 1k Parameters

 ##### Showing that tiny models with just 1,000 parameters can match or exceed the performance of large models in time series forecasting by leveraging data periodicity.

[Paper](https://arxiv.org/abs/2405.00946)

A particularly interesting tension in time series forecasting seems to be between proponents of huge foundational models and those that believe the constraints of forecasting mean you cannot do any better than small models. The SparseTSF paper shows that a simple model with just 1k parameters can achieve competitive or superior performance by cleverly exploiting the inherent periodicity in time series data. By downsampling sequences to focus on cross-period trends, they can dramatically reduce model complexity while maintaining accuracy. This suggests to me that many complex models may be overengineered for the actual requirements of time series forecasting tasks, especially when the data has clear periodic patterns. By separating periodicity from trend prediction, SparseTSF demonstrates that sometimes a more targeted, lightweight approach can outperform heavyweight architectures.


### Adversarial Robustness Limits via Scaling-Law and Human-Alignment Studies

##### Many adversarial examples are unclassifiable even by humans, leading to a significant reframing of model robustness benchmarks.

[Paper](https://arxiv.org/abs/2404.09349)

What made this paper particularly interesting to me was its pragmatic approach to adversarial robustness. Rather than treating adversarial examples as a purely technical challenge, it examines human perception and the validity of the examples. For example, they make the (in hindsight, very obvious) insight that many adversarial examples (~10%) create images that even humans can't properly classify, which they call "invalid" examples. By removing these invalid examples from evaluation, they show that models are actually closer to human-level performance than previously thought - their best model achieves 79.5% accuracy on valid adversarial examples compared to estimated human performance of ~90%. Beyond this, the paper makes several other contributions like developing scaling laws for adversarial training and showing how to achieve state-of-the-art results with more compute-efficient training.


### Arrows of Time for Large Language Models

##### Large language models consistently find it easier to predict the next token than the previous one, and explaining this phenomenon using ideas from computational complexity.

[Paper](https://arxiv.org/abs/2401.17505)

I thought this was the most engaging oral presentation that I went to at the conference. The paper explores a counterintuitive finding about large language models - that they consistently perform better at predicting the next token compared to predicting the previous token, even though information theory suggests there should be no difference.

They propose this "Arrow of Time" effect across multiple dimensions - different languages, model architectures, model sizes, context lengths - and find it to be remarkably consistent. The authors then construct a compelling theoretical framework to explain the phenomenon using ideas from computational complexity and sparsity.

They use a prime number multiplication example to show an example of a problem where forward computation (multiplication) is clearly easier than backward computation (factorization), they create a concrete toy model that exhibits the same asymmetry seen in natural language. They then generalize this insight to explain why forward prediction might naturally be easier in language as well.


### Extending Adversarial Attacks to Produce Adversarial Class Probability

##### An adversarial attack that manipulates the statistical distributions of model outputs.

[Paper](https://arxiv.org/abs/2004.06383)

The really interesting aspect of this work is its novel attack vector. It moves beyond the traditional "fool a single input" paradigm to consider how adversarial attacks could manipulate the aggregate behavior of a model across many inputs. This reveals a new class of threats that existing adversarial defenses aren't designed to catch, since they typically focus on protecting individual predictions rather than distributional properties. By controlling the statistical distribution of a model's predictions while maintaining high fooling rates, the authors highlight the following adversarial attack - adversaries could subtly shift the apparent prevalence or trends that downstream systems and analysts observe, all while keeping individual perturbations imperceptible. With experimental results in speech classification and emotion detection, they show how an attacker could systematically bias the perceived sentiment or command frequencies without triggering existing defense mechanisms. 


### Et tu certifications: robustness certificates

##### Robustness certificates can be exploited to create more effective adversarial examples.

[Paper](https://proceedings.mlr.press/v235/cullen24a.html)

As well as having my favourite paper name of the conference, this paper shows a clever and concerning discovery - certification methods can actually help create better attacks. Their "Certification Aware Attacks" use the certificates themselves as a guide to create more effective adversarial examples, making perturbations 10% smaller than previous methods.