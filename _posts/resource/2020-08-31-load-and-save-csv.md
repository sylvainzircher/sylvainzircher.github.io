---
layout: "resource"
title: "Load and Save a CSV File in Python"
slug: load-and-save-csv-file-python
categories: python
date: 2020-08-31
permalink: /resources/:categories/:title:output_ext
---

This is a very short post related to loading and saving csv files in python. I am always confused with the syntax and mix up python's with R syntax. So here is to not be confused anymore!

### Let's import some packages


```python
# Import
import pandas as pd
```

### Let's load a csv file


```python
# Let's load the Iris dataset saved locally on my computer
df = pd.read_csv("iris.csv")
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



### Saving a DataFrame into a csv file


```python
df.to_csv("dataframe.csv")
```

### Et voila!
