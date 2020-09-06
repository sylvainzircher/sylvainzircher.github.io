---
layout: "resource"
title: "How to Normalize a DataFrame"
slug: normalizing-dataframe-python
categories: python
date: 2020-09-06
permalink: /resources/:categories/:title:output_ext
---
Imagine you have a form builder tool and you are collecting the data related to how your users are creating their forms for their website. The dataset at your disposal might be denormalized and contains the form id, for every id there could be one or several fields created (name, address ...) and the type of the field (integer, string ...):<br/><br/>
![png]({{ 'assets/img/python/python-norm-dataset/Original-data.png' | relative_url }})

What we want to achieve is have a row per form. In other words we need to group all the field names and field types into one array and obtain a dataset that would look like the following:<br/><br/>
![png]({{ 'assets/img/python/python-norm-dataset/Final-data.png' | relative_url }})

This is the job at hand so let's get to it!

### Importing some packages


```python
# Import
import pandas as pd
import numpy as np
```

### We create a dataset to play with


```python
# Create some data
df = pd.DataFrame({"Form Id": ["Form1","Form1","Form2","Form2","Form2"],
                  "Field Name": ["Name","Email","Email","Company Size","Subscribed"],
                  "Field Type": ["String","String","String","Integer","Boolean"]})
df
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>Form Id</th>
<th>Field Name</th>
<th>Field Type</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>Form1</td>
<td>Name</td>
<td>String</td>
</tr>
<tr>
<th>1</th>
<td>Form1</td>
<td>Email</td>
<td>String</td>
</tr>
<tr>
<th>2</th>
<td>Form2</td>
<td>Email</td>
<td>String</td>
</tr>
<tr>
<th>3</th>
<td>Form2</td>
<td>Company Size</td>
<td>Integer</td>
</tr>
<tr>
<th>4</th>
<td>Form2</td>
<td>Subscribed</td>
<td>Boolean</td>
</tr>
</tbody>
</table>
</div>



### Let's normalize the dataset!

The goal here is not to explain in details how the below code works but merely provide a recipe that can be applied. So in a nutshell here is what we do: we group the DataFrame by the field we want to make unique (Form Id in our case). Then by leveraging agg() and lambda functions we create lists out of the other dimensions. We also show as a bonus how we can surface the count of fields created in every forms.


```python
# Before Pandas 0.25
df_transformed = df.groupby(['Form Id']).agg({
    'Field Type': [lambda x: list(x)],
    'Field Name': {
        'list' : lambda x: list(x),
        'count' : 'count'
    }
}).reset_index()

df_transformed.columns = ['Form Id', 'Field Type List', 'Field Name List', 'Field Name Count']
df_transformed
```


```python
# After Pandas 0.25
df_transformed = df.groupby(['Form Id']).agg(
    Field_Type = pd.NamedAgg(column = 'Field Type', aggfunc = lambda x: list(x)),
    Field_Name_List = pd.NamedAgg(column = 'Field Name', aggfunc = lambda x: list(x)),
    Field_Name_Count = pd.NamedAgg(column = 'Field Name', aggfunc = 'count')
).reset_index()

df_transformed
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>Form Id</th>
<th>Field_Type</th>
<th>Field_Name_List</th>
<th>Field_Name_Count</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>Form1</td>
<td>[String, String]</td>
<td>[Name, Email]</td>
<td>2</td>
</tr>
<tr>
<th>1</th>
<td>Form2</td>
<td>[String, Integer, Boolean]</td>
<td>[Email, Company Size, Subscribed]</td>
<td>3</td>
</tr>
</tbody>
</table>
</div>



### Et voila!
