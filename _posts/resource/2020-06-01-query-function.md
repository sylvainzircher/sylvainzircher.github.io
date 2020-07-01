---
layout: "resource"
title: "The Query Function or How to Use SQL Within Google Sheets"
slug: googlesheets-query-function
categories: Sheets
date: 2020-05-02
permalink: /resources/:categories/:title:output_ext
---
The _QUERY_ function is such a powerful function and let you use SQL like commands within Google Sheets. So if you know a bit of SQL you can very quickly select subsets, transform or aggregate any range.

### Let's load some data first:

Imagine you have gathered the number of daily visitors coming to your website for a specific date range and you have obtained the data below.

![png]({{ 'assets/img/googlesheets/img-query/data.png' | relative_url }})

### Applying QUERY:

The easiest formula we can apply is to just select the whole range. Imagine that we type the formula described below in cell A12. We would obtain a copy of the whole dataset starting cell A12.

```
=QUERY(A1:B10, "select *")
```

![png]({{ 'assets/img/googlesheets/img-query/basic.png' | relative_url }})


Now adding a where clause to select the data for a specific date range is very easy:

```
=QUERY(A1:B10, "select A, B where A > date '2020-04-05' and A < date '2020-04-09")
```

![png]({{ 'assets/img/googlesheets/img-query/where.png' | relative_url }})


Finally it is also very easy to aggregate the values using different functions. Here we will average all the visitors for the full period and give the output the following name "Average Number of Visitors" using _LABEL_: 

```
=QUERY(A1:B10, "select avg(B) LABEL avg(B) 'Average Number of Visitors'")
```

![png]({{ 'assets/img/googlesheets/img-query/avg.png' | relative_url }})


There is so much more that can be done with _QUERY_ and would deserve a full blog post, but I believe this quick post is a good starting point!

### Et voila!