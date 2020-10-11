---
layout: "resource"
title: "Dealing with JSON Files"
slug: dealing-with-JSON-files
categories: python
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

It is very likely that sooner or later you will have to parse through a JSON file as opposed to a well organised CSV file. This post gather a couple of python code that can help you get started making sense of JSON format. Let's quickly have a look.

### Let's import some packages


```python
# Import
import json
from pandas.io.json import json_normalize
```

### We create a dataset to play with

```python
# Let's manually create some JSON string
json_string = """
{
    "person": {
        "name": "John",
        "age": 31,
        "city": "San Francisco",
        "relatives": [
            {
                "name": "Jane",
                "age": 34,
                "city": "Los Angeles"
            }
        ]
    }
}
"""
data = json.loads(json_string)
data
```

    {'person': {'age': 31,
      'city': 'San Francisco',
      'name': 'John',
      'relatives': [{'age': 34, 'city': 'Los Angeles', 'name': 'Jane'}]}}


### Let's parse the data!

We can easily transform a dataset in a JSON format into a more readible format - like a DataFrame - using the _json_normalize_ function. See below:


```python
data_parsed = json_normalize(data)
data_parsed
```

<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>person.age</th>
<th>person.city</th>
<th>person.name</th>
<th>person.relatives</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>31</td>
<td>San Francisco</td>
<td>John</td>
<td>[{'name': 'Jane', 'age': 34, 'city': 'Los Ange...</td>
</tr>
</tbody>
</table>
</div>


```python
json_normalize(data_parsed["person.relatives"][0])
```

<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>age</th>
<th>city</th>
<th>name</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>34</td>
<td>Los Angeles</td>
<td>Jane</td>
</tr>
</tbody>
</table>
</div>


Loading a JSON file into a jupyter notebook, normalizing the data and saving it into a DataFrame can be done as follows:

```python
filepath = "pathtojonfile/file.json"
dataJSON = json.load(open(filepath))
dataDF = json_normalize(dataJSON)
```

### Et voila!