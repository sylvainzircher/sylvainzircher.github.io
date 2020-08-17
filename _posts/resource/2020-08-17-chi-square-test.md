---
layout: "resource"
title: "Performing a chi-square Test in Python"
slug: python-chi-square-test
categories: python
date: 2020-08-17
permalink: /resources/:categories/:title:output_ext
---
If you are working in web optimization, the chances are you might have a tool that does all the statistical significance calculations for you. However you will most likely face situations where you are being asked what the impact of an experiment is on metrics down the funnel such as revenue.

Going beyond the A/B test platform you love and leverage your data wharehouse to calculate the said impact is super important. I am not going to show you how to extract the right data from your data warehouse and just assume you have what you need. Once you have the requested data, the next step is to run the appropriate statistical test. 

In this present case I will show you how to run a chi-square test in Python. It helps you compare two categorical variables such as conversion rates and determines wether their difference is statistically different.

### Let's import some packages


```python
# Import
import pandas as pd
import numpy as np
from scipy.stats import chi2_contingency
```

### We create a dataset to play with


```python
# Let's manually create some data
control = {"Total": 55,
          "Converted": 12,
          "Not converted": 43}

variant = {"Total": 62,
          "Converted": 18,
          "Not converted": 44}
```

### Now we run the chi2 test!

First we have to created an array composed of the observed data:


```python
observed = np.array([[control["Converted"],control["Not converted"]], 
                         [variant["Converted"],variant["Not converted"]]])
observed
```




    array([[12, 43],
           [18, 44]])



Now we can use the _chi2 contingency_ function to find out the chi square statistic and the pvalue:


```python
expected = chi2_contingency(observed, correction=False)
print("Chi square stat: {}\nPvalue: {}".format(expected[0], expected[1]))
```

    Chi square stat: 0.7955384770957628
    Pvalue: 0.37243064814119775


As a quick *bonus* here is how you can code your own implementation:


```python
from scipy import stats

observed = np.array([[control["Converted"],control["Not converted"]], 
                         [variant["Converted"],variant["Not converted"]]]) 

total = observed.sum()
total_row1 = observed[0,0] + observed[0,1]
total_row2 = observed[1,0] + observed[1,1]
total_column1 = observed[0,1] + observed[1,1]
total_column2 = observed[0,0] + observed[1,0]

expected_00 = total_column1 * total_row1 / total
expected_01 = total_column1 * total_row2 / total
expected_10 = total_column2 * total_row1 / total
expected_11 = total_column2 * total_row2 / total

observed = observed.ravel()
expected = np.array([expected_10,expected_00,expected_11,expected_01])

chi_squared_stat = ((observed - expected)**2 / expected).sum()
print("chi_squared_stat: {:0.5f}".format(chi_squared_stat))

p_value_chi2 = 1 - stats.chi2.cdf(x = chi_squared_stat, df = 1, loc=0)
print("P-value: {:0.5f}".format(p_value_chi2))
```

    chi_squared_stat: 0.79554
    P-value: 0.37243


We obtain the same result as with the _chi2 contingency_ function.

### Et voila!
