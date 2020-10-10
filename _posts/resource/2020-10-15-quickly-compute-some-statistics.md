---
layout: "resource"
title: "Quickly Compute Percentiles"
slug: python-quickly-compute-percentiles
categories: python
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---
More often than not, quickly computing some percentiles to understand a distribution can save some time. Here is a very quick (and dirty) way to do so, that I use all the time.

### Let's import some packages


```python
# Import
import pandas as pd
import numpy as np
```

### We create a dataset to play with


```python
# Here I am loading the Iris Dataset saved locally on my computer
df = pd.read_csv('Iris.csv')
df.head()
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>sepal_length</th>
<th>sepal_width</th>
<th>petal_length</th>
<th>petal_width</th>
<th>species</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>5.1</td>
<td>3.5</td>
<td>1.4</td>
<td>0.2</td>
<td>setosa</td>
</tr>
<tr>
<th>1</th>
<td>4.9</td>
<td>3.0</td>
<td>1.4</td>
<td>0.2</td>
<td>setosa</td>
</tr>
<tr>
<th>2</th>
<td>4.7</td>
<td>3.2</td>
<td>1.3</td>
<td>0.2</td>
<td>setosa</td>
</tr>
<tr>
<th>3</th>
<td>4.6</td>
<td>3.1</td>
<td>1.5</td>
<td>0.2</td>
<td>setosa</td>
</tr>
<tr>
<th>4</th>
<td>5.0</td>
<td>3.6</td>
<td>1.4</td>
<td>0.2</td>
<td>setosa</td>
</tr>
</tbody>
</table>
</div>



### Let's get some percentiles & statistics

In this example we will compute various distribution statistics for the _petal width_.


```python
print("Total count of flowers: {}".format(len(df['species'])))
print("Average petal width: %f" % np.average(df['petal_width']))
print("Petal width - 25th Perc: %f" % np.percentile(df['petal_width'], 25))
print("Petal width - Median: %f" % np.percentile(df['petal_width'], 50))
print("Petal width - 90th: %f" % np.percentile(df['petal_width'], 90))
print("Petal width - 95th: %f" % np.percentile(df['petal_width'], 99))
```

    Total count of flowers: 150
    Average petal width: 1.198667
    Petal width - 25th Perc: 0.300000
    Petal width - Median: 1.300000
    Petal width - 90th: 2.200000
    Petal width - 95th: 2.500000


### Et voila!
