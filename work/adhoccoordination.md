---
layout: default
title: Utilising Policy Types to Achieve Effective Ad Hoc Coordination in the Game Othello
---

Ad hoc coordination problems in multiagent systems involve heterogeneous agents that do not know, a priori, how other agents in the system behave. Albrecht (2015) derives a game model called Harsanyi-Bellman Ad Hoc Coordination (HBA) which assumes other agents draw their latent type from some unknown distribution over a hypothesised set of types, each of which specifies a complete behaviour. Based on the current interaction history, HBA forms beliefs about the likelihood of player types which are subsequently used to compute optimal action responses. HBA has been tested in simple tasks such as Rock-Paper-Scissors and Prisoner’s Dilemma with successful results. The next step in its validation, and the focus of the project, is its ability to scale successfully to more complicated games. The board game Othello was chosen as a suitable candidate task, with its larger game tree and richer strategies. The HBA agents performed significantly better than the baseline agents in the semi ad hoc simulations, achieving win-rates of up to 82% against agents with mixed, dynamic type distributions. 

* [Dissertation](assets/adhoc_coord.pdf) (pdf)
* [Github](https://github.com/Stevinson/HBAdissertation)

