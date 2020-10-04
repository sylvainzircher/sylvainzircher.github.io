---
layout: "resource"
title: "Subselect a dataframe"
slug: subselect-dataframe
categories: R
date: 2020-10-03
permalink: /resources/:categories/:title:output_ext
---
  
The title is self-explanatory but very briefly, we are going to use the famous Iris dataset which contains data regarding 3 classes of iris plant. We will load it first and secondly we will select the data for 2 types of iris plant only. 

### Let's get the Iris dataset
```r
iris = read.csv("/Users/sylvainzircher/Downloads/Iris.csv", header=TRUE)
unique(iris$species)
```
```
[1] setosa     versicolor virginica 
Levels: setosa versicolor virginica
```

### Let's select only two species: setosa and virginica
```r
subset = iris[iris$species == "setosa" | iris$species == "virginica",]
unique(subset$species)
```
```
[1] setosa    virginica
Levels: setosa versicolor virginica
```
### Et voila!