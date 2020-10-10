---
layout: "resource"
title: "Convert all the values in a column to lower/upper case"
slug: python-convert-values-in-column-to-lower-or-upper-case
categories: python
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---
This one is pretty straight forward. Let's say you have a column in a DataFrame that contains String data whose format is all over the place: mix of lowercase, uppercase and camelcase. Here is how you can go through all the values in that column and change them all to lowercase for example, thus keeping it consistent. Let's have a look!

### Let's import some packages


```python
# Import
import pandas as pd
import numpy as np
```

### We create a dataset to play with


```python
# Create some data
df = pd.DataFrame({"String Data": ["all lower","ALL UPPER","mix of lower AND UPPER"]})
df
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>String Data</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>all lower</td>
</tr>
<tr>
<th>1</th>
<td>ALL UPPER</td>
</tr>
<tr>
<th>2</th>
<td>mix of lower AND UPPER</td>
</tr>
</tbody>
</table>
</div>



### Let's transform the data

Here we are using the apply function in association with a lambda function to go over every single element of the _String Data_ column and apply lower(). We are just adding a new column to the original DataFrame to demonstrate the result against the original data.


```python
df["String Data Formatted"] = df["String Data"].apply(lambda x: x.lower())
df
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>String Data</th>
<th>String Data Formatted</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>all lower</td>
<td>all lower</td>
</tr>
<tr>
<th>1</th>
<td>ALL UPPER</td>
<td>all upper</td>
</tr>
<tr>
<th>2</th>
<td>mix of lower AND UPPER</td>
<td>mix of lower and upper</td>
</tr>
</tbody>
</table>
</div>



Just in case you were wondering, amending the above function to format the values in the _String Data_ column to uppercase is just as simple as:


```python
df["String Data Formatted"] = df["String Data"].apply(lambda x: x.upper())
df
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>String Data</th>
<th>String Data Formatted</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>all lower</td>
<td>ALL LOWER</td>
</tr>
<tr>
<th>1</th>
<td>ALL UPPER</td>
<td>ALL UPPER</td>
</tr>
<tr>
<th>2</th>
<td>mix of lower AND UPPER</td>
<td>MIX OF LOWER AND UPPER</td>
</tr>
</tbody>
</table>
</div>



### Et voila!
