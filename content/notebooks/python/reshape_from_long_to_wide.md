
---
title: Reshape a DataFrame from wide to long format
---


```python
# Import
import pandas as pd
import numpy as np
```


```python
# Create some data
df = pd.DataFrame({"Channel": ["Social","Paid Search","Email"],
                  "Avg Duration": [2.34,2.54,1.56],
                  "Conversions": [10, 13, 8]})
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



We will be using the melt() function which is available in the pandas library. We pass on two parameters: id_vars - column(s) to use as identifier variables & value_vars - column(s) to unpivot. 


```python
# Reshape the data using pandas
df2 = pd.melt(df, id_vars = ['Channel'], value_vars = ['Avg Duration', 'Conversions'])
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


