---
layout: "resource"
title: "Create a Binary Variable Using ifelse"
slug: if-else-statements-in-r
categories: R
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

This trick can be very useful for transforming a categorical variable into a binary variable. Let's say your sales team has a list of potential opportunities and with each opportunity an associated revenue band. You might want to simplify the several revenue categories into "Low" and "High" only. Let's see how we can do that using _ifelse_!

### Let's get some data to play with first!
```r
opportunity_id = c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
opportunity_band = c("0 - 10k","10k - 25k","10k - 25k","0 - 10k","0 - 10k","25k - 50k","25k+","25k+","25k+","10k - 25k")
data = data.frame(opportunity_id,opportunity_band)
data
```
```
   opportunity_id opportunity_band
1               1          0 - 10k
2               2        10k - 25k
3               3        25k - 50k
4               4          0 - 10k
5               5          0 - 10k
6               6        25k - 50k
7               7         50k-100k
8               8         50k-100k
9               9            100k+
10             10        10k - 25k
```
### Let's create the binary variable!

Let's say we consider any opportunity above 10k to be "high" and anything below 10k to be a "low" opportunity.
```r
data$binary_band = ifelse(data$opportunity_band == "0 - 10k", "Low", "High")
data
```
```
   opportunity_id opportunity_band binary_band
1               1          0 - 10k         Low
2               2        10k - 25k        High
3               3        25k - 50k        High
4               4          0 - 10k         Low
5               5          0 - 10k         Low
6               6        25k - 50k        High
7               7         50k-100k        High
8               8         50k-100k        High
9               9            100k+        High
10             10        10k - 25k        High
```
### Et voila!