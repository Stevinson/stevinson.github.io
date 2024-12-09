# Reducing Return Volatility in Neural Network-Based Asset Allocation

[See the paper here.](https://dl.acm.org/doi/10.1145/3677052.3698678)

At Safe Intelligence, we've been exploring how to make neural networks more reliable for real-world applications by using formal robustness guarantees. I recently published a paper along with my supervisor Alessio Lomuscio on making neural networks more reliable for asset allocation. We use verification methods to train the networks to make more consistent investment decisions with robustness guarantees, reducing risk in noisy markets.

While neural networks have been shown to perform well in time series tasks, they remain highly sensitive to small changes in the input data. In our context, where the input to the networks is noisy financial data, this sensitivity can lead to unexpected and potentially costly allocation decisions when the model is deployed. Our work addresses this challenge head-on by quantifying and improving the robustness of the models.


### The Challenge with Neural Networks in Finance

While neural networks can uncover complex patterns in market data, they have a concerning weakness: small changes in their input data can sometimes cause them to make drastically different decisions. Imagine a neural network managing your investment portfolio. It might perform beautifully during testing, but when deployed with real money, slight market fluctuations or data noise could trigger unexpected and potentially costly investment decisions.

### Our Solution: Verification and Certified Training

We've developed two key innovations to address this problem:

1. A verification framework that can determine whether a neural network might make erratic allocation decisions (what we call "allocation spikes") when faced with small variations in market data.

2. A specialised training method that makes these networks more robust, helping them maintain stable decision-making even in the presence of noisy data.

### What We Found

Our research revealed some striking insights:

- Standardly trained neural networks that performed well in traditional backtests showed concerning vulnerabilities: small input variations could cause allocation changes of over 30% in more than half of their investment decisions.
- These allocation spikes weren't just theoretical problems – they could reduce investment returns by up to 28%.
- Our new training method significantly improved stability. Networks trained with our approach maintained more consistent performance and showed considerably smaller drops in returns when faced with noisy or slightly different market data.

### Why This Matters

For anyone considering using AI in investment management, our work offers a practical way to:
- Measure how robust a neural network is before deploying it.
- Train more stable networks that are less likely to have allocation spikes.
- Reduce the gap between backtest performance and real-world results.

This research represents a step toward making neural networks more trustworthy for high-stakes financial decisions. While neural networks offer powerful capabilities for investment management, they need to be both performant and reliable. Our approach helps achieve both goals.