---
layout: "resource"
title: "Create a Dataframe From Scratch"
slug: create-dataframe-from-scratch-in-r
categories: R
date: 2020-09-28
permalink: /resources/:categories/:title:output_ext
---

This is a very simple post about creating a dataframe in R from scratch. If you both use Python and R like I do you might get confused ate times between the two programming languages syntax. So here is a post to solve this problem. :)  

### First we create some vectors
```r
name = c("John", "Mark", "Julie")
age = c(23, 45, 31)
```

### Then we create a dataframe from the vectors
```r
df = data.frame(name, age)
df
```
```
   name age
1  John  23
2  Mark  45
3 Julie  31
```
### Et voila!