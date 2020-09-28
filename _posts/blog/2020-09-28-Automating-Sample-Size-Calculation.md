---
layout: "blog"
title: "Automating Your Power Analysis in Google Sheets"
slug: automating-sample-size-estimation-power-analysis-ABtest
subtitle: "Let Apps Script do The Heavy Lifting For You"
date: 2020-09-28
author: "Sylvain Zircher"
type: "Article"
category: "Statistics"
permalink: /blog/:categories/:title:output_ext
---

<p class="intro">Before you run an AB test you really want to understand how long you should be running it for. Power Analysis offers one solution for finding the sample size required, that can then be expressed in a number of days if you know the daily traffic on your website. At the core of Power Analysis is the Minimum Detectable Effect and in this blog post I will share an Apps Script that automates the Sample Size calculations for a list of MDEs to make a Data Driven decision regarding the dimensioning of your split test.</p>

<p>If you want to get started right away , <a href="https://docs.google.com/spreadsheets/d/1cVxPAyRZ10f9bizZYjRUJdhYCF4yGI3bQALxt6T2KgA/edit#gid=2135312991" target="_blank"> here is a link</a> to a Google Sheets that already contains the Apps Script code and can be used straight away. <a href="https://github.com/sylvainzircher/Automating-Sample-Size-Calculation/blob/master/AutomatedSampleSizeCalculation.js" target="_blank"> Also a link here</a> to my GitHub repository with the Apps Script code that you can copy and paste in your own G-Sheets. Associated with the following explanations you will be up and running in no time.</p>

<h3>Underlying formula</h3>
This blog post will leverage the following formula:

```
n = f(α/2, β) × [p1 × (100 − p1) + p2 × (100 − p2)] / (p2 − p1)2

with
f(α, β) = [Φ-1(α) + Φ-1(β)]2
```
<p>I am referring to this <a href="https://www.sealedenvelope.com/power/binary-superiority/" target="_blank">sample size calculator</a> where the reference for the formula is clearly cited: <i>Pocock SJ. Clinical Trials: A Practical Approach. Wiley; 1983</i>.</p>

If you want to find out how you can implement this formula in Google Sheets I have an explanation <a href="https://sylvainzircher.com/blog/statistics/how-long-run-experiment-power-analysis-googlesheets.html" target="_blank"> here</a>.

<h3>Setup your Google Sheets first! (boring but important)</h3>

<p>The script I am sharing with you assumes you have one sheets called “Automated” that is organised as follows:</p>
<ul><li>cells B1 to B4 are reserved for the following user inputs: the statistical significance alpha in cell B1, (1 - Beta) in cell B2, the Baseline Conversion Rate in B3 and the daily traffic in B4,</li>
<li>from cells A8:B8 you can start listing the number of variants (without including the control) and Minimum Detectable Effects combinations you are considering for your test.</li>
</ul> 
<p>Visual summary below:</p>

<img src="{{'/assets/img/articles/Sample-size-calculation-automation/setup.png' | relative_url }}" alt="Set up your Google Sheets first!">

<h3>Get the code and add it to your Google Sheets</h3>

<p><a href="https://github.com/sylvainzircher/Automating-Sample-Size-Calculation/blob/master/AutomatedSampleSizeCalculation.js" target="_blank">This will take you to my GitHub repository</a> where you will find the code to be used in your Google Sheets.</p>

<p>Next go to your Google Sheets and click Tools > Script editor. Delete what’s in there and paste the code you have just copied.</p>

<img src="{{'/assets/img/articles/Sample-size-calculation-automation/Run-code-step1.png' | relative_url }}" alt="Automate your power analysis">

<p>Hit save and give your project a name. Close the App Script window and refresh your Google Sheets.</p>

<h3>Run the code!</h3>

<p>You should see after a few seconds an extra menu appearing beside Help, called Sample Size Calculation. Click it and then select Compute Sample Sizes which is going to run the code and output the Sample Sizes and Durations required for each combination of Variant and MDEs you input.</p>

<img src="{{'/assets/img/articles/Sample-size-calculation-automation/Run-code-step2.png' | relative_url }}" alt="Automate your sample size analysis">

<p>Click through the permissions popup to allow your Script to run.</p>

<p>You may see "This app isn't verified", in which case click on "Advanced" and then "Go to [name] project - unsafe" and then click "Allow". These are extra security steps introduced by Google for non-verified scripts. Since we're the author of this script though, it's safe to run.</p>

<p>Here you go! Wait for the script to run (Google Sheets will let you know): it might take a few minutes (it took me a bit less than a minute for around 2k comments).</p>

<p>Enjoy!</p>

<p><a href="https://github.com/sylvainzircher/Automating-Sample-Size-Calculation/blob/master/AutomatedSampleSizeCalculation.js" target="_blank">Find the full code here</a>.</p>
