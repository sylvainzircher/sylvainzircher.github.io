---
layout: "resource"
title: "Subselect a DataFrame Based on Keyword Search"
slug: subselect-dataframe-based-on-keyword-search
categories: python
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

In this post, what we are trying to accomplish is selecting rows in a DataFrame by looking for keywords that are contained within a se tof columns filled with text data.

### Let's import some packages


```python
# Import
import pandas as pd
import numpy as np
```

### We create a dataset to play with


```python
# Create some data
df = pd.DataFrame({"Shopping list": ["apple","pasta","olive oil","Apple","bananas","water bottles","Oranges"]})
df
```

<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>Shopping list</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>apple</td>
</tr>
<tr>
<th>1</th>
<td>pasta</td>
</tr>
<tr>
<th>2</th>
<td>olive oil</td>
</tr>
<tr>
<th>3</th>
<td>Apple</td>
</tr>
<tr>
<th>4</th>
<td>bananas</td>
</tr>
<tr>
<th>5</th>
<td>water bottles</td>
</tr>
<tr>
<th>6</th>
<td>Oranges</td>
</tr>
</tbody>
</table>
</div>


### Subselecting using keywords

Please note in the dataset above, I have on purpose included _apple_ twice: both with a lowercase _a_ and uppercase _A_. This is just to draw your attention about the importance of transforming your data first: either all lower or upper case before searching for specific terms. In any case, here is how you would proceed if you wanted to select the fruits within the list only:


```python
fruits = df[df["Shopping list"].str.contains("apple")
            | df["Shopping list"].str.contains("Apple")
            | df["Shopping list"].str.contains("bananas")            
            | df["Shopping list"].str.contains("Oranges")]
fruits
```


<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>Shopping list</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>apple</td>
</tr>
<tr>
<th>3</th>
<td>Apple</td>
</tr>
<tr>
<th>4</th>
<td>bananas</td>
</tr>
<tr>
<th>6</th>
<td>Oranges</td>
</tr>
</tbody>
</table>
</div>


Now let's say from that list of fruits, you wanted to exclude _Oranges_. Here is what you should do:


```python
noOranges = fruits[-fruits["Shopping list"].str.contains("Oranges")]
noOranges
```


<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>Shopping list</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>apple</td>
</tr>
<tr>
<th>3</th>
<td>Apple</td>
</tr>
<tr>
<th>4</th>
<td>bananas</td>
</tr>
</tbody>
</table>
</div>



### Et voila!