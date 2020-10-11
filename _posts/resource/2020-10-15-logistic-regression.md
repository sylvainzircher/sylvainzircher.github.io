---
layout: "resource"
title: "Quick Logistic Regression in R"
slug: logistic-regression-in-r
categories: R
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

### Let's load a dataset first
I will be using the _birthwt_ dataset which can be found in the _MASS_ library:
```r
library(MASS)
data(birthwt)
```
It is very important to make sure that any categorical variable is coded as factor:
```r
birthwt$race = as.factor(birthwt$race)
birthwt$smoke = as.factor(birthwt$smoke)
birthwt$ht = as.factor(birthwt$ht)
birthwt$ui = as.factor(birthwt$ui)
```
### Now we can run a logistic regression model
```r
model = glm(low ~ age + race + smoke + ht + ui + lwt, data = birthwt, family = "binomial")
summary(model)
```
```
Call:
glm(formula = low ~ age + race + smoke + ht + ui + lwt, family = "binomial", 
    data = birthwt)

Deviance Residuals: 
    Min       1Q   Median       3Q      Max  
-1.7323  -0.8328  -0.5345   0.9868   2.1673  

Coefficients:
             Estimate Std. Error z value Pr(>|z|)   
(Intercept)  0.437240   1.191931   0.367  0.71374   
age         -0.018256   0.035354  -0.516  0.60559   
race2        1.280641   0.526695   2.431  0.01504 * 
race3        0.901880   0.434362   2.076  0.03786 * 
smoke1       1.027571   0.393931   2.609  0.00909 **
ht1          1.857617   0.688848   2.697  0.00700 **
ui1          0.895387   0.448494   1.996  0.04589 * 
lwt         -0.016285   0.006859  -2.374  0.01758 * 
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

(Dispersion parameter for binomial family taken to be 1)

    Null deviance: 234.67  on 188  degrees of freedom
Residual deviance: 203.95  on 181  degrees of freedom
AIC: 219.95

Number of Fisher Scoring iterations: 4
```
The output for the coefficients is quite intuitive to understand. A closer look at the last part of the summary is necessary though:
```
    Null deviance: 234.67  on 188  degrees of freedom
Residual deviance: 203.95  on 181  degrees of freedom
AIC: 219.95
```
This compares the deviance values for two models: one with no predictor and another one with all the predictors. Using the difference in variance (234.67 - 203.95) and the difference in parameters (188 - 181) we can look up the probability that the model with all predictors is better than the model with no predictors in a Chi square table.

### Et voila!