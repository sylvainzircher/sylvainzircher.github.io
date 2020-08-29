---
layout: "resource"
title: "Removing Outliers with the Array Formula"
slug: googlesheets-array-function
categories: Sheets
date: 2020-08-24
permalink: /resources/:categories/:title:output_ext
---

The _ARRAYFORMULA_ function is very useful and differs from the ones you might be using day in / day out such as _SUM_. It allows the use of a formula with arrays which basically means it will apply some logic to every single cell within a range and return a range of values or array. A simple formula like _SUM_ or _AVERAGE_ returns one value only. Let's go through one example.

### Quick look at the data:

Let's say we have the number of daily website visitors for a specific period of time, and we want to easily remove the outliers: values that deviate significantly from the observations. To keep it simple we will define outliers as values beyond the mean + 2 times the standard deviation. Here is the dataset:

![png]({{ 'assets/img/googlesheets/img-arrayformula/data.png' | relative_url }})

### Let's apply the formula:

If we type the following formula in cell C2:

```
=ARRAYFORMULA(if(B2:B10 > average(B2:B10) + 2 * STDEV.S(B2:B10), "", B2:B10))
```

we then managed to identify and remove one outlier:

![png]({{ 'assets/img/googlesheets/img-arrayformula/results.png' | relative_url }})

### Et voila!