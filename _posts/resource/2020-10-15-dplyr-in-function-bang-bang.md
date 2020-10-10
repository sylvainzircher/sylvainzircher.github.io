---
layout: "resource"
title: "Create a Reusable Data Transformation Function Using dplyr, enexpr() and !!"
slug: custom-data-transformation-function-ggplot
categories: R
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---
  
Using dplyr to build your own functions for aggregating or summarizing data can be tricky. Understanding _tidy evaluation_ is very important. The goal of this post is not to detail how tidy evaluation works but simply give a working example for reference. For more information on this look <a href="https://www.youtube.com/watch?v=nERXS3ssntw" target="blank">here</a>.

Let's say you want to build a function that can be reused at will and does the following: group any dataset by a specific column and provide the average of a numerical value for each sub group. Let's see how we can do that!

### Let's import some libraries
```r
library(dplyr)
```

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
Imagine we want a function that groups the iris dataset by species and allow us to compute the average of a specific dimension either sepal_length, sepal_width, petal_length or petal_width.

### Let's create our function using tidy evaluation and dplyr functions!
```r
AvgBySpecies = function(data, summariseby, groupby) {
  # Function that takes three input: a DataFrame, the dimension to summarize and the dimension to group the dataset by.
  # Returns a DataFrame
  
  # We use enexpr to capture the user's input in other words what is passed to the functions by the user. This is what we want to use to build our new grouped data to be returned.
  summariseby = enexpr(summariseby)
  groupby = enexpr(groupby)
  
  # We use the unquoting parameter !! (bang bang) to pass the variable the user passed as parameter. 
  newData = data %>%
    group_by(!!groupby) %>%
    summarise(metric = mean(!!summariseby))

  colnames(newData) = c("category", "metric")
  
  return(newData %>%
    arrange(metric) %>%
    mutate(category=factor(category, levels=category)))
}
```
We will run the function for _sepal length_:
```r
AvgBySpecies(iris,sepal_width,species)
```
```
  category   metric
  <fct>       <dbl>
1 versicolor   2.77
2 virginica    2.97
3 setosa       3.42
```
We do the same computation for _petal length_:
```r
AvgBySpecies(iris,petal_width,species)
```
```
  category   metric
  <fct>       <dbl>
1 setosa      0.244
2 versicolor  1.33 
3 virginica   2.03 
```
### Et voila!