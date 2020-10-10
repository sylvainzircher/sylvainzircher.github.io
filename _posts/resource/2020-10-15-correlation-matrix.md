---
layout: "resource"
title: "Create a Correlation Matrix"
slug: correlation-matrix-in-python
categories: python
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---
Correlation matrices are very handy to understand at a glance the relationships between the variables that are contained in a DataFrame. I will show you in this post how to build one. Let's have a look.

### Let's import some packages


```python
# Import
import pandas as pd
import numpy as np
import seaborn as sns
%matplotlib inline
```

### We create a dataset to play with


```python
# Here I am loading the Iris dataset
df = pd.read_csv("/Iris.csv")
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


### Let's transform the data

Here I am going to subselect the four first columns as they contain the numerical values I am interested in.


```python
df_subselected = df.iloc[:,1:4]
df_subselected.head()
```


<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>sepal_width</th>
<th>petal_length</th>
<th>petal_width</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>3.5</td>
<td>1.4</td>
<td>0.2</td>
</tr>
<tr>
<th>1</th>
<td>3.0</td>
<td>1.4</td>
<td>0.2</td>
</tr>
<tr>
<th>2</th>
<td>3.2</td>
<td>1.3</td>
<td>0.2</td>
</tr>
<tr>
<th>3</th>
<td>3.1</td>
<td>1.5</td>
<td>0.2</td>
</tr>
<tr>
<th>4</th>
<td>3.6</td>
<td>1.4</td>
<td>0.2</td>
</tr>
</tbody>
</table>
</div>



Now I can simply apply the _corr_ function:


```python
df_subselected.corr()
```


<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>sepal_width</th>
<th>petal_length</th>
<th>petal_width</th>
</tr>
</thead>
<tbody>
<tr>
<th>sepal_width</th>
<td>1.000000</td>
<td>-0.420516</td>
<td>-0.356544</td>
</tr>
<tr>
<th>petal_length</th>
<td>-0.420516</td>
<td>1.000000</td>
<td>0.962757</td>
</tr>
<tr>
<th>petal_width</th>
<td>-0.356544</td>
<td>0.962757</td>
<td>1.000000</td>
</tr>
</tbody>
</table>
</div>


Finally I can also display the result in a heatmap format as well. It makes it easier to assess the strength of the correlations.


```python
sns.heatmap(df_subselected.corr())
```


![png]({{ '/assets/img/python/draft-correlation-matrix_files/draft-correlation-matrix_12_1.png' | relative_url }})


### Et voila!
