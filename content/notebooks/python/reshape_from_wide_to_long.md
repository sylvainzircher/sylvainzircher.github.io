
---
title: Reshape a DataFrame from long to wide format
---


```python
# Import
import pandas as pd
import numpy as np
```


```python
# Create some data
df = pd.DataFrame({"Channel": ["Social","Social","Paid Search","Paid Search","Email","Email"],
                  "Metric": ["Conversions","Avg Duration","Conversions","Avg Duration","Conversions","Avg Duration"],
                  "Values": [10, 2.34, 13, 2.54, 8, 1.56]})
df
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
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



We will be using the pivot() function which is available in the pandas library. We will pass three parameters: index - which is the column to use to make the new index, columns - column to use to make the new DataFrame's columns and finally values - that will populate the values for the new DataFrame. 


```python
# Reshape the data using pandas
df2=df.pivot(index='Channel', columns='Metric', values='Values')
df2
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
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




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
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


