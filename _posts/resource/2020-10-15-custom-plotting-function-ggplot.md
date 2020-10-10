---
layout: "resource"
title: "Create a Reusable Plotting Function Using ggplot2, enexpr() and !!"
slug: custom-plotting-function-ggplot
categories: R
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

Using ggplot2 to build your own plotting functions can be tricky. Understanding _tidy evaluation_ is very important. The goal of this post is not to detail how tidy evaluation works but simply give a working example for reference. For more information on this look <a href="https://www.youtube.com/watch?v=nERXS3ssntw" target="blank">here</a>.

Let's say you want to build a function that can be reused at will and does the following: display a bar chart calculating the mean value based on some numerical variable grouped by a specific category. Let's see how we can do that.

### We need to import some libraries first
```r
library(ggplot2)
library(dplyr)
```

### Let's get some data to play with!
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
### Let's transform the data!

Here as an example, we calculate the mean _petal length_ per species:
```r
iris_agg = iris %>% group_by(species) %>% summarise(mean = mean(petal_length))
iris_agg
```
```
  species     mean
  <fct>      <dbl>
1 setosa      1.46
2 versicolor  4.26
3 virginica   5.55
```

Now we have formatted the data in the way we wanted we can focus on creating a function for plotting this data.

### Let's create our function using tidy evaluation and ggplot2!
```r
barChart = function(data, metric, category) {
  
  # We use enexpr to capture the user's input in other words what is passed to the functions by the user. This is what we want to use to build our new grouped data to be returned.
  category = enexpr(category)
  metric = enexpr(metric)
  
  # We use the unquoting parameter !! (bang bang) to pass the variable the user passed as parameter. 
  ggplot(data, aes(x=!!category, y=!!metric)) +
    geom_bar(stat = "identity", color="black", fill = '#999999') +
    ylab(enexpr(metric)) +
    theme_classic() +
    coord_flip()
}
```
We will run the function for the _iris_agg_ dataset created earlier on:
```r
barChart(iris_agg, mean, species)
```

We can also combine the data aggregation step and the plotting like so:
```r
barChart(iris %>% group_by(species) %>% summarise(mean = mean(petal_width)), 
        mean, 
        species)
```

### Et voila!