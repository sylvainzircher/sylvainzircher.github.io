---
layout: "resource"
title: "Ordering Lists Within a Column of Lists in a DataFrame"
slug: order-lists-dataframe
categories: python
date: 2020-09-14
permalink: /resources/:categories/:title:output_ext
---
Let's say you have a form on your website containing a long list of fields (but none of them are mandatory). You record which fields are being filled out by your visitors. The result is saved in an array and added to a DataFrame along with the unique id of the form submission. And you want to understand what the most common field combination is.

If the arrays of fields being saved into the DataFrame are not always in order: for example one form submission has [firstname, email, lastname] as its output while another one has [firstname, lastname, email]. Even though the fields are the same, it is obvious that we want to order them all first before doing any counting. We want to make sure that we do not distinguish between [firstname, email, lastname] &amp; [firstname, lastname, email] - they are the same combination.

Now, to the point of this post: let's see how we order items within lists contained in a DataFrame.

### Let's import some packages


```python
# Import
import pandas as pd
import numpy as np
```

### We create a dataset to play with


```python
# Create some data
df = pd.DataFrame({"Form id": [1,2,3,4,5],
                  "Field Combo": [['email','firstname','lastname'],['firstname','email','lastname'],['lastname','firstname','email'],['email'],['lastname','firstname']]})
df
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>Field Combo</th>
<th>Form id</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>[email, firstname, lastname]</td>
<td>1</td>
</tr>
<tr>
<th>1</th>
<td>[firstname, email, lastname]</td>
<td>2</td>
</tr>
<tr>
<th>2</th>
<td>[lastname, firstname, email]</td>
<td>3</td>
</tr>
<tr>
<th>3</th>
<td>[email]</td>
<td>4</td>
</tr>
<tr>
<th>4</th>
<td>[lastname, firstname]</td>
<td>5</td>
</tr>
</tbody>
</table>
</div>



### Ordering the lists

The solution is pretty simple and detailled below. I have just appended the sorted result to the original DataFrame so we can verify that the line of code worked:


```python
df['Field Combo Sorted'] = df['Field Combo'].apply(sorted)
df
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>Field Combo</th>
<th>Form id</th>
<th>Field Combo Sorted</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>[email, firstname, lastname]</td>
<td>1</td>
<td>[email, firstname, lastname]</td>
</tr>
<tr>
<th>1</th>
<td>[firstname, email, lastname]</td>
<td>2</td>
<td>[email, firstname, lastname]</td>
</tr>
<tr>
<th>2</th>
<td>[lastname, firstname, email]</td>
<td>3</td>
<td>[email, firstname, lastname]</td>
</tr>
<tr>
<th>3</th>
<td>[email]</td>
<td>4</td>
<td>[email]</td>
</tr>
<tr>
<th>4</th>
<td>[lastname, firstname]</td>
<td>5</td>
<td>[firstname, lastname]</td>
</tr>
</tbody>
</table>
</div>



Now we want to count how many times every single combination occurs. It is a bit more complicated as we have to breakdown every single array into its components, stitch all the components back up into one string and then counts how many times each string appears. Here is how we would do that:


```python
df['Field Combo Sorted'].apply(lambda x: ', '.join(map(str, x))).value_counts()
```




    email, firstname, lastname    3
    firstname, lastname           1
    email                         1
    Name: Field Combo Sorted, dtype: int64



__Bonus__ let's say we do not want a count but a percentage. Here is one solution:


```python
perc = df['Field Combo Sorted'].apply(lambda x: ', '.join(map(str, x))).value_counts()
perc / len(df['Field Combo Sorted'])
```




    email, firstname, lastname    0.6
    firstname, lastname           0.2
    email                         0.2
    Name: Field Combo Sorted, dtype: float64



### Et voila!
