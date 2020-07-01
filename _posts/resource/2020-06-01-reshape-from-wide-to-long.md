---
layout: "resource"
title: "Wide to Long Format in Python"
slug: python-wide-to-long
categories: python
date: 2020-02-16
permalink: /resources/:categories/:title:output_ext
---
In this post I will try to explain how we can transition from a DataFrame with a wide format to a DataFrame with a long format. Let's say we have a dataset with three columns (the definitions does not really matter here but it just helps better understand what we are trying to do!): one column containing a list of marketing channels, a second containing the number of converted sessions and finally the average sessions duration related to these channels.

Now what we want to do is group the two columns containing the average duration and the number of converted sessions together under one column called Value. And finally have another column called Metric which will help us differentiate between the two measures like so:

<picture>
	<source media="(min-width: 840px)" srcset="{{ 'assets/img/python/wide-to-long/wideTolongDesktop.png' | relative_url }}">
	<source media="(max-width: 840px)" srcset="{{ 'assets/img/python/wide-to-long/wideTolongMobile.png' | relative_url }}">
	<img src="{{ 'assets/img/python/wide-to-long/wideTolongMobile.png' | relative_url }}" alt="Wide to Long Format"/>
</picture>

So let's have a look at how we can do it.

### Importing some packages


```python
# Import
import pandas as pd
import numpy as np
```

### We create a dataset with a wide format


```python
# Create some data
df = pd.DataFrame({"Channel": ["Social","Paid Search","Email"],
                  "Avg Duration": [2.34,2.54,1.56],
                  "Conversions": [10, 13, 8]})
df
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>Avg Duration</th>
<th>Channel</th>
<th>Conversions</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>2.34</td>
<td>Social</td>
<td>10</td>
</tr>
<tr>
<th>1</th>
<td>2.54</td>
<td>Paid Search</td>
<td>13</td>
</tr>
<tr>
<th>2</th>
<td>1.56</td>
<td>Email</td>
<td>8</td>
</tr>
</tbody>
</table>
</div>



### Let's transform it into a long format

We will be using the melt() function which is available in the pandas library. We pass on two parameters. The first one being _id_vars_ - which is the column(s) to use as an identifier; in our case Channel. The second parameter is _value_vars_ - column(s) to unpivot; in our case, these are the two columns that include the metrics we want to group together: Avg Duration and Conversions.


```python
# Reshape the data using pandas
df2 = pd.melt(df, id_vars = ['Channel'], value_vars = ['Avg Duration', 'Conversions'])
df2
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>Channel</th>
<th>variable</th>
<th>value</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>Social</td>
<td>Avg Duration</td>
<td>2.34</td>
</tr>
<tr>
<th>1</th>
<td>Paid Search</td>
<td>Avg Duration</td>
<td>2.54</td>
</tr>
<tr>
<th>2</th>
<td>Email</td>
<td>Avg Duration</td>
<td>1.56</td>
</tr>
<tr>
<th>3</th>
<td>Social</td>
<td>Conversions</td>
<td>10.00</td>
</tr>
<tr>
<th>4</th>
<td>Paid Search</td>
<td>Conversions</td>
<td>13.00</td>
</tr>
<tr>
<th>5</th>
<td>Email</td>
<td>Conversions</td>
<td>8.00</td>
</tr>
</tbody>
</table>
</div>



### Et voila!

