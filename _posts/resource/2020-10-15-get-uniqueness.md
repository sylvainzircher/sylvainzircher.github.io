---
layout: "resource"
title: "How to Calculate the Uniqueness Ratio of a Column"
slug: calculate-uniqueness-ratio
categories: python
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

Along with compliteness, uniqueness is a very important data profiling / quality metric. Let's see how we can compute uniqueness using python.

### Let's import some packages


```python
# Import
import pandas as pd
import numpy as np
```

### We create a dataset to play with

```python
# Let's manually create some random data, making sure that the ref column is not fully unique.
ref = ['id_1', 'id_2', 'id_3', 'id_4', 'id_3']
val = [1, 2, 5, 6, 9]

df = pd.DataFrame({'id': ref, 'values': val})
df
```

<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>id</th>
<th>values</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>id_1</td>
<td>1</td>
</tr>
<tr>
<th>1</th>
<td>id_2</td>
<td>2</td>
</tr>
<tr>
<th>2</th>
<td>id_3</td>
<td>5</td>
</tr>
<tr>
<th>3</th>
<td>id_4</td>
<td>6</td>
</tr>
<tr>
<th>4</th>
<td>id_3</td>
<td>9</td>
</tr>
</tbody>
</table>
</div>

### Computing uniqueness

We can easily find the list of unique ids by leveraging the _drop duplicates_ function:


```python
unique_ids = df.iloc[:,[0]].drop_duplicates()
unique_ids
```

<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>id</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>id_1</td>
</tr>
<tr>
<th>1</th>
<td>id_2</td>
</tr>
<tr>
<th>2</th>
<td>id_3</td>
</tr>
<tr>
<th>3</th>
<td>id_4</td>
</tr>
</tbody>
</table>
</div>

Now calculating uniqueness is as simple as:

```python
uniqueness = len(unique_ids) / len(df['id'])
uniqueness
```

    0.8

### Et voila!