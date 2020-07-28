---
layout: "resource"
title: "How to Loop Through an Array in Apps-Script"
slug: How-to-loop-through-an-array-in-Apps-Script
categories: Apps-Script
date: 2020-07-27
permalink: /TipsnTricks/:categories/:title:output_ext
---

Looping through an array is a very important trick to learn in Apps-Script. In this example we will select a range, where each cell contains a number, then we will loop trough all the values and sum them up.

### Let's select the range first

We are selecting the range A1 to A10 in Sheet1 where we manually input some random numbers.

```javascript
function sum() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var rg = s.getRange("A1:A10");
}
```

### Looping through all the values within the range

The _getValues_ function automatically extract all the values within the selected range and save the result as an array.
Using the <em>forEach</em> function we are looping through the array and extracting the content of each cell one by one. We will also have to convert each value from string to integer with <em>Number</em> so we can sum them up. Finally we will paste the result in cell B1:

```javascript
function sum() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var vals = s.getRange("A1:A10").getValues();

  var result = 0;

  vals.forEach(function(v) {
    result = result + Number(v);
  });
  
  s.getRange("B1").setValue(result);
}
```

### Et voila!