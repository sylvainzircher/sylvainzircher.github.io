---
layout: "resource"
title: "Loading and Saving a CSV File in R"
slug: loading-saving-csv-in-r
categories: R
date: 2020-09-21
permalink: /resources/:categories/:title:output_ext
---
This is a very short post related to loading and saving csv files in R. If you are like me, you might always be confused with the syntax and constantly mixing up Python with R. So here is a short one to not be confused anymore!

### Load a csv file
```r
# Let's load a csv saved locally on my machine
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

### Save a csv file
```r
# First let find the current directory
dir = getwd()
# Let's save the iris dataset
write.csv(iris, paste(getwd(), "/iris.csv", sep=""))
```
### Et voila!
