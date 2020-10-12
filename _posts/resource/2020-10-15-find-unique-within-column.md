---
layout: "resource"
title: "Find Unique Values in a Dataframe"
slug: python-t-test
categories: R
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

The title is self-explanatory so let's get to it!

### Let's get some data to play with first!
```r
iris = read.csv("Iris.csv", header=TRUE)
head(iris)
```
```
  sepal_length sepal_width petal_length petal_width species
1          5.1         3.5          1.4         0.2  setosa
2          4.9         3.0          1.4         0.2  setosa
3          4.7         3.2          1.3         0.2  setosa
4          4.6         3.1          1.5         0.2  setosa
5          5.0         3.6          1.4         0.2  setosa
6          5.4         3.9          1.7         0.4  setosa
```

### Now let's find out how many different species there is in the dataframe
```r
unique(iris$species)
```
```
[1] setosa     versicolor virginica 
Levels: setosa versicolor virginica
```
### Et voila!