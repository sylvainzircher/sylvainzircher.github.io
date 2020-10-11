---
layout: "resource"
title: "Data Profiling 101 in Python"
slug: data-profiling-101-python
categories: python
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

When you look at a dataset for the first time, it is always good practice to quickly assess it: size of the dataset, number of columns, type of variables, is there any empty values etc... In this post, we will go through a number of python commands that are useful in terms of quickly profiling a dataset. Let's start.

### Let's import some packages


```python
# Import
import pandas as pd
import numpy as np
```

### We create a dataset to play with


```python
# Here I am loading the Titanic Dataset saved locally on my computer
df = pd.read_csv('titanic.csv')
df.head()
```

<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>PassengerId</th>
<th>Pclass</th>
<th>Name</th>
<th>Sex</th>
<th>Age</th>
<th>SibSp</th>
<th>Parch</th>
<th>Ticket</th>
<th>Fare</th>
<th>Cabin</th>
<th>Embarked</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>892</td>
<td>3</td>
<td>Kelly, Mr. James</td>
<td>male</td>
<td>34.5</td>
<td>0</td>
<td>0</td>
<td>330911</td>
<td>7.8292</td>
<td>NaN</td>
<td>Q</td>
</tr>
<tr>
<th>1</th>
<td>893</td>
<td>3</td>
<td>Wilkes, Mrs. James (Ellen Needs)</td>
<td>female</td>
<td>47.0</td>
<td>1</td>
<td>0</td>
<td>363272</td>
<td>7.0000</td>
<td>NaN</td>
<td>S</td>
</tr>
<tr>
<th>2</th>
<td>894</td>
<td>2</td>
<td>Myles, Mr. Thomas Francis</td>
<td>male</td>
<td>62.0</td>
<td>0</td>
<td>0</td>
<td>240276</td>
<td>9.6875</td>
<td>NaN</td>
<td>Q</td>
</tr>
<tr>
<th>3</th>
<td>895</td>
<td>3</td>
<td>Wirz, Mr. Albert</td>
<td>male</td>
<td>27.0</td>
<td>0</td>
<td>0</td>
<td>315154</td>
<td>8.6625</td>
<td>NaN</td>
<td>S</td>
</tr>
<tr>
<th>4</th>
<td>896</td>
<td>3</td>
<td>Hirvonen, Mrs. Alexander (Helga E Lindqvist)</td>
<td>female</td>
<td>22.0</td>
<td>1</td>
<td>1</td>
<td>3101298</td>
<td>12.2875</td>
<td>NaN</td>
<td>S</td>
</tr>
</tbody>
</table>
</div>


### Quick data profiling

The first element of the dataset we might want to understand is its size. We can easily determine that our dataset has 418 rows and 11 columns using _shape_.


```python
df.shape
```

    (418, 11)


The _info_ function is also very helpful. It outputs the number of columns that a dataframe contains, the column types, whether they contain null values and also how many non-nulls values each column has:


```python
df.info()
```

    <class 'pandas.core.frame.dataframe'="">
    RangeIndex: 418 entries, 0 to 417
    Data columns (total 11 columns):
    PassengerId    418 non-null int64
    Pclass         418 non-null int64
    Name           418 non-null object
    Sex            418 non-null object
    Age            332 non-null float64
    SibSp          418 non-null int64
    Parch          418 non-null int64
    Ticket         418 non-null object
    Fare           417 non-null float64
    Cabin          91 non-null object
    Embarked       418 non-null object
    dtypes: float64(2), int64(4), object(5)
    memory usage: 36.0+ KB


You can also very easily determine how many null values each column contains:


```python
df.isnull().sum()
```


    PassengerId      0
    Pclass           0
    Name             0
    Sex              0
    Age             86
    SibSp            0
    Parch            0
    Ticket           0
    Fare             1
    Cabin          327
    Embarked         0
    dtype: int64



If you want to find the completeness rate for each column as opposed to a count:


```python
df.isnull().sum() / df.shape[0]
```


    PassengerId    0.000000
    Pclass         0.000000
    Name           0.000000
    Sex            0.000000
    Age            0.205742
    SibSp          0.000000
    Parch          0.000000
    Ticket         0.000000
    Fare           0.002392
    Cabin          0.782297
    Embarked       0.000000
    dtype: float64



Finally - and this one is my favorite. One can obtain lots of statistics for each numerical columns using the _describe_ function:


```python
df.describe()
```

<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>PassengerId</th>
<th>Pclass</th>
<th>Age</th>
<th>SibSp</th>
<th>Parch</th>
<th>Fare</th>
</tr>
</thead>
<tbody>
<tr>
<th>count</th>
<td>418.000000</td>
<td>418.000000</td>
<td>332.000000</td>
<td>418.000000</td>
<td>418.000000</td>
<td>417.000000</td>
</tr>
<tr>
<th>mean</th>
<td>1100.500000</td>
<td>2.265550</td>
<td>30.272590</td>
<td>0.447368</td>
<td>0.392344</td>
<td>35.627188</td>
</tr>
<tr>
<th>std</th>
<td>120.810458</td>
<td>0.841838</td>
<td>14.181209</td>
<td>0.896760</td>
<td>0.981429</td>
<td>55.907576</td>
</tr>
<tr>
<th>min</th>
<td>892.000000</td>
<td>1.000000</td>
<td>0.170000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>0.000000</td>
</tr>
<tr>
<th>25%</th>
<td>996.250000</td>
<td>1.000000</td>
<td>21.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>7.895800</td>
</tr>
<tr>
<th>50%</th>
<td>1100.500000</td>
<td>3.000000</td>
<td>27.000000</td>
<td>0.000000</td>
<td>0.000000</td>
<td>14.454200</td>
</tr>
<tr>
<th>75%</th>
<td>1204.750000</td>
<td>3.000000</td>
<td>39.000000</td>
<td>1.000000</td>
<td>0.000000</td>
<td>31.500000</td>
</tr>
<tr>
<th>max</th>
<td>1309.000000</td>
<td>3.000000</td>
<td>76.000000</td>
<td>8.000000</td>
<td>9.000000</td>
<td>512.329200</td>
</tr>
</tbody>
</table>
</div>



### Et voila!