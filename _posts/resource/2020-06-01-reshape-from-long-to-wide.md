---
layout: "resource"
title: "Long to Wide Format in Python"
slug: python-long-to-wide
categories: python
date: 2020-02-16
permalink: /resources/:categories/:title:output_ext
---
In this post I will explain how we can transform a DataFrame with a long format into a DataFrame with a wide format. As an example let's say we have a dataset with three columns: one column containing a list of marketing channels, a second one containing a list of metrics for each channel (either the average duration of the sessions or the number of converted sessions belonging to the respective channels) and finally a third one reporting the values for each metric. 

Now what we want to do is "ungroup" the metrics contained in columns 2 (metric definition) and 3 (values). In other words, we want to separate the average duration and the number of converted sessions metrics and create a column for each. This is summarised as follows:

<picture>
	<source media="(min-width: 840px)" srcset="{{ 'assets/img/python/long-to-wide/longTowideDesktop.png' | relative_url }}">
	<source media="(max-width: 840px)" srcset="{{ 'assets/img/python/long-to-wide/longTowideMobile.png' | relative_url }}">
	<img src="{{ 'assets/img/python/long-to-wide/longTowideMobile.png' | relative_url }}" alt="Wide to Long Format"/>
</picture>


So let's see how we do it!

### First thing first: importing packages


```python
# Import
import pandas as pd
import numpy as np
```

### We create the dataset in a long format


```python
# Create some data
df = pd.DataFrame({"Channel": ["Social","Social","Paid Search","Paid Search","Email","Email"],
                  "Metric": ["Conversions","Avg Duration","Conversions","Avg Duration","Conversions","Avg Duration"],
                  "Values": [10, 2.34, 13, 2.54, 8, 1.56]})
df
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>Channel</th>
<th>Metric</th>
<th>Values</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>Social</td>
<td>Conversions</td>
<td>10.00</td>
</tr>
<tr>
<th>1</th>
<td>Social</td>
<td>Avg Duration</td>
<td>2.34</td>
</tr>
<tr>
<th>2</th>
<td>Paid Search</td>
<td>Conversions</td>
<td>13.00</td>
</tr>
<tr>
<th>3</th>
<td>Paid Search</td>
<td>Avg Duration</td>
<td>2.54</td>
</tr>
<tr>
<th>4</th>
<td>Email</td>
<td>Conversions</td>
<td>8.00</td>
</tr>
<tr>
<th>5</th>
<td>Email</td>
<td>Avg Duration</td>
<td>1.56</td>
</tr>
</tbody>
</table>
</div>



### Let's transform it into a wide format

We will be using the pivot() function which is available in the pandas library. We will pass three parameters to the function: _index_ - which is the column to use to create the new index: in our case Channel; _columns_ - for the new DataFrame's columns and finally _values_ - that will populate the values for the new DataFrame. 


```python
# Reshape the data using pandas
df2=df.pivot(index='Channel', columns='Metric', values='Values')
df2
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th>Metric</th>
<th>Avg Duration</th>
<th>Conversions</th>
</tr>
<tr>
<th>Channel</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<th>Email</th>
<td>1.56</td>
<td>8.0</td>
</tr>
<tr>
<th>Paid Search</th>
<td>2.54</td>
<td>13.0</td>
</tr>
<tr>
<th>Social</th>
<td>2.34</td>
<td>10.0</td>
</tr>
</tbody>
</table>
</div>




```python
# Reshape the data using pandas and format the DataFrame properly
df3=df.pivot(index='Channel', columns='Metric', values='Values').reset_index()
df3.columns.name = ""
df3
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>Channel</th>
<th>Avg Duration</th>
<th>Conversions</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>Email</td>
<td>1.56</td>
<td>8.0</td>
</tr>
<tr>
<th>1</th>
<td>Paid Search</td>
<td>2.54</td>
<td>13.0</td>
</tr>
<tr>
<th>2</th>
<td>Social</td>
<td>2.34</td>
<td>10.0</td>
</tr>
</tbody>
</table>
</div>



### Et voila!