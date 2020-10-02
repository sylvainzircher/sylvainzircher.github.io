---
layout: "blog"
title: "Bayesian AB Test Calculator in Google Sheets"
slug: bayesian-ABtest-calculator-google-sheets
subtitle: "Get Your Own Bayesian ABTest Calculator No Code Involved"
date: 2020-10-02
author: "Sylvain Zircher"
type: "Article"
category: "Statistics"
permalink: /blog/:categories/:title:output_ext
---

<p class="intro">If you are a Bayesian and not a Frequentist, the main way you can apply Bayesian Statistics to an AB test result is through using an online tool or a programming language such as Python or R... well until this blog post. If you do not have any programming skills, here I share a Google Sheets that leverage Bayesian Statistics to calculate the probability of your variant being better than the control as well as the relative uplift associated. All you need to do is plug the result from your AB test into the tool, easy peasy. Let’s have a look.</p>

<h3>Bayesian AB-test calculator</h3>
<p> I am not going to take you through a step by step guide on how to build the calculator, but instead introduce the one I built and use. Feel free to make a copy and retro-engineer.<a href="https://docs.google.com/spreadsheets/d/1Gl8JNpSAvRkK92KBzGsW3fnkSU8qICzvF7Q6YSYsqFs/edit#gid=1719056349" target="_blank"> The Bayesian AB-test calculator in Google-Sheets</a> is made of three parts:</p>
<ol>
<li>Choice of Prior: this is where you define your prior function and here I am using <a href="https://en.wikipedia.org/wiki/Beta-binomial_distribution" target="_blank"> the Beta-binomial</a>. I usually choose a flat prior, which is basically stating that any value between 0 and 1 are equaly likely for the conversion rates. This is what is set by default on the Google Sheets but feel free to play with it and adapt to your needs.</li>
<img src="{{'/assets/img/articles/Bayesian-statistic-calculator/Choice-of-prior.png' | relative_url }}" alt="Choose your prior function for your Bayesian ABtest calculation">
<li>Test Results: this is where you input the sample sizes and number of conversions for your AB test. The Google Sheets will plot the posterior distributions and calculate the probability of the variant beating the control.</li>
<img src="{{'/assets/img/articles/Bayesian-statistic-calculator/ABtest-analysis.png' | relative_url }}" alt="Analyse your ABtest using Bayesian Statistics">
<li>The Uplift: the tool will output a mean uplift, the median uplift and the 30th Percentile for the uplift.<a href="https://dataorigami.net/blogs/napkin-folding/17543303-the-binary-problem-and-the-continuous-problem-in-a-b-testing" target="_blank"> 	As advised by Cameron Davidson-Pillon</a> I always report on a conservative figure here and prefer reporting on the 30th percentile as opposed to the mean or median.</li>
<img src="{{'/assets/img/articles/Bayesian-statistic-calculator/Uplift-definition.png' | relative_url }}" alt="Analyse your ABtest using Bayesian Statistics">
</ol>

<h3>Are you Frequentist or Bayesian?</h3>
<p>I wanted to close this blog post by sharing a <a href="https://www.youtube.com/watch?v=GEFxFVESQXc" target="_blank">video from Cassie Kozyrkov</a> where she explains very skillfully the differences between Frequentist and Bayesian statistics: very useful if you are still trying to wrap your head around these concepts.</p>