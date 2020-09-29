---
layout: "resource"
title: "Calculate Statistical Significance for Continuous Variables"
slug: ttest-googlesheets
categories: Sheets
date: 2020-10-12
permalink: /resources/:categories/:title:output_ext
---

It is always very handy to know how to run a statistical test using various softwares and tools. In Google Sheets you can compare the means of two groups and check whether the difference is statistically different using the T.TEST function <br/><br/>
This applies, for example, to an A/B test where one want to compare the average revenue generated between the control and the variant and checks if the variant impacts revenue in a statistically significant fashion.

### Let's get some data first:

![png]({{ 'assets/img/googlesheets/img-ttest/T-Test-data.png' | relative_url }})

### We can now apply T.TEST function
The T.TEST function has four parameters: the range of the two groups, a number representing whether we are running a one-tailed (1) or two-tailed (2) test and finally whether the experiment is a paired (1), equal variance (2) or unequal variance (3) experiment. All of this is summarised below.

![png]({{ 'assets/img/googlesheets/img-ttest/T-Test-formula.png' | relative_url }})

### Function summary

<picture>
	<source media="(min-width: 840px)" srcset="{{ 'assets/img/googlesheets/img-ttest/T-Test-summary-card-desktop.png' | relative_url }}">
	<source media="(max-width: 840px)" srcset="{{ 'assets/img/googlesheets/img-ttest/T-Test-summary-card-mobile.png' | relative_url }}">
	<img src="{{ 'assets/img/googlesheets/img-ttest/T-Test-summary-card-mobile.png' | relative_url }}" alt="T.TEST Summary"/>
</picture>

### Et voila!