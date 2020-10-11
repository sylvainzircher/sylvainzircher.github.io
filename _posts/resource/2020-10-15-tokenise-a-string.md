---
layout: "resource"
title: "String Tokenisation in Python"
slug: string-tokenisation-python
categories: python
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---
Tokenisation is such an important step when dealing with text. Let's say you want to understand what the most used words to describe your product are within your customer's feedback. The first step would be to split the feedback into words and this is where tokenisation comes in. Python has a very powerful library called _NLTK_ that can be used to do all the heavy lifting. Let's see how.

### Let's import some packages


```python
# Import
import pandas as pd
import numpy as np
import nltk
# nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.tokenize import RegexpTokenizer
```

### We create a dataset to play with


```python
# Let's manually create some comments
comment_id = ['comment_1','comment_2','comment_3']
comments = ['I love your app! It is the best on the market.',
           'A bit slow at times but overall good',
           'Does everything I need. Keep up the good work guys!!!']

df = pd.DataFrame({'comment_id': comment_id, 'comments': comments})
df
```




<div style="overflow-x:auto;">

<table border="1" class="dataframe">
<thead>
<tr>
<th></th>
<th>comment_id</th>
<th>comments</th>
</tr>
</thead>
<tbody>
<tr>
<th>0</th>
<td>comment_1</td>
<td>I love your app! It is the best on the market.</td>
</tr>
<tr>
<th>1</th>
<td>comment_2</td>
<td>A bit slow at times but overall good</td>
</tr>
<tr>
<th>2</th>
<td>comment_3</td>
<td>Does everything I need. Keep up the good work ...</td>
</tr>
</tbody>
</table>
</div>



### Let's tokenise!

_NLTK_ makes it super easy to obtain a list of stopwords (words such as _all_, _but_, _up_ etc...):


```python
stopWords = set(stopwords.words('english'))
```

We can also easily create a _RegexpTokeniser_ that will help us get rid of all the punctuation:


```python
punctuation = RegexpTokenizer(r'\w+')
```

Now we are ready to go through all the comments in our dataset, split each one of them into words and remove the stopwords and the punctuation.


```python
tokens = []
for row in df['comments']:
    for word in punctuation.tokenize(row):
        if word not in stopWords:
            tokens.append(word.lower())

tokens[:5]
```




    ['i', 'love', 'app', 'it', 'best']



As a *bonus*, let's compute how frequently a word appears and find out the most frequently used words:


```python
f = nltk.FreqDist(tokens)

# Here we are looking at the 10 most common words in our comments
for word, frequency in f.most_common(10):
    print('{} appears {} times'.format(word, frequency))
```

    i appears 2 times
    good appears 2 times
    love appears 1 times
    app appears 1 times
    it appears 1 times
    best appears 1 times
    market appears 1 times
    a appears 1 times
    bit appears 1 times
    slow appears 1 times


### Et voila!
