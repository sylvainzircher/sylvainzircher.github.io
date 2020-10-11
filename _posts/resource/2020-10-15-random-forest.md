---
layout: "resource"
title: "Random Forest in R"
slug: random-forest-r
categories: R
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

### Loading a dataset first

I will be using the _birthwt_ dataset which can be found in the _MASS_ library:

```r
library(MASS)
data(birthwt)
```

It is very important to make sure that any categorical variable is coded as factor first:

```r
birthwt$race = as.factor(birthwt$race)
birthwt$smoke = as.factor(birthwt$smoke)
birthwt$ht = as.factor(birthwt$ht)
birthwt$ui = as.factor(birthwt$ui)
```

### Creating a Random Forest algorithm:

```r
# Load the randomForest package
library(randomForest)

# Implement the random forest algorithm and look at the result
rf = randomForest(low~., data=birthwt)
rf
```
```
Call:
 randomForest(formula = low ~ ., data = birthwt) 
               Type of random forest: regression
                     Number of trees: 500
No. of variables tried at each split: 3

          Mean of squared residuals: 0.008889174
                    % Var explained: 95.86
```

We can check variable importance as follows:

```r
varImpPlot(rf)
```
![png]({{ 'assets/img/R/RandomForest/RandomForest.png' | relative_url }})

### Et voila!