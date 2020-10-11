---
layout: "resource"
title: "Transforming a Date in a String Format Into a Date Format"
slug: tranforming-date-from-string-to-date-format
categories: R
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

The tile is self-explanatory so let's get to it.

### Let's get some data to play with first
```r
opportunity_id = c(1, 2, 3, 4)
opportunity_created_date = c("2019-07-31T17:47:43", "2019-08-06T06:31:52", "2019-07-08T18:20:28", "2019-08-24T02:00:14")
d = data.frame(opportunity_id, opportunity_created_date)
d
```
```
  opportunity_id opportunity_created_date
1              1      2019-07-31T17:47:43
2              2      2019-08-06T06:31:52
3              3      2019-07-08T18:20:28
4              4      2019-08-24T02:00:14
```

### Transforming the date field into a date format
```r
d$opportunity_created_date_formatted = as.Date(substr(d$opportunity_created_date, 1, 10), format="%Y-%m-%d")
d
```
```
  opportunity_id opportunity_created_date opportunity_created_date_formatted
1              1      2019-07-31T17:47:43                         2019-07-31
2              2      2019-08-06T06:31:52                         2019-08-06
3              3      2019-07-08T18:20:28                         2019-07-08
4              4      2019-08-24T02:00:14                         2019-08-24
```
Let's check we did indeed created a new field with a date format:
```r
str(d)
```
```
'data.frame':	4 obs. of  3 variables:
 $ opportunity_id                    : num  1 2 3 4
 $ opportunity_created_date          : Factor w/ 4 levels "2019-07-08T18:20:28",..: 2 3 1 4
 $ opportunity_created_date_formatted: Date, format: "2019-07-31" "2019-08-06" "2019-07-08" ...
```

### Et voila!