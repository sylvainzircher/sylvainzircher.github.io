---
layout: "resource"
title: "Creating sparklines in Google Sheets"
slug: creating-sparklines-in-google-sheets
categories: Sheets
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

Sparklines are very useful when trying to summarize a lot of information in a very small visual. It could be a line chart or a bar chart showing your number of website visitors over time for example. It is a very simple and condensed way to show trends and I often use them. Here I am not going to go into extensive details on how they work and just show you a couple of examples to get you started!

### Line chart:

In the following example we will create a red line chart that will show the number of visitors on the website for the time period defined in column A using the _SPARKLINE_ function:

![png]({{ 'assets/img/googlesheets/img-sparkline/linechart.png' | relative_url }})


```
=sparkline(A1:B10,{"charttype","line";"color","red"})
```

### Bar chart:

Now let's say we want to change the red line chart by a blue bar chart, here is how we change the formula:

![png]({{ 'assets/img/googlesheets/img-sparkline/columns.png' | relative_url }})


```
=sparkline(A1:B10,{"charttype","column";"color","blue"})
```

In this case we want to add a bar representing the number of visitors at each date:

![png]({{ 'assets/img/googlesheets/img-sparkline/bars.png' | relative_url }})


```
=sparkline(B2,{"charttype","bar";"max",max($B$2:$B$10)})
```


### Et voila!