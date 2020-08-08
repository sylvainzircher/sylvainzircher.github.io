---
layout: "resource"
title: "Create a DataFrame From Scratch"
slug: python-create-dataframe
categories: python
date: 2020-08-02
permalink: /resources/:categories/:title:output_ext
---
This is a very short post on how to create a dataFrame from scratch.

### Let's import the Pandas library


```python
# Import
import pandas as pd
```

### Now we create a dataFrame

Creating two arrays first:


```python
name = ["John", "Mark", "Julie"]
age = [32, 34, 25]
```

We can now make a dataFrame out of the two arrays previously created:


```python
df = pd.DataFrame({'Name': name, 'Age': age})
df
```


<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>Name</th>
<th>Age</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>John</td>
<td>32</td>
</tr>
<tr>
<th>1</th>
<td>Mark</td>
<td>34</td>
</tr>
<tr>
<th>2</th>
<td>Julie</td>
<td>25</td>
</tr>
</tbody>
</table>
</div>



### Et voila!
