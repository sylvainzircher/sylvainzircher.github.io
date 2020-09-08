---
layout: "resource"
title: "Selecting a Range in Google Sheets Using Apps Script"
slug: select-range-with-app-script
categories: Apps-Script
date: 2020-07-13
permalink: /resources/:categories/:title:output_ext
---


In this post we will cover different ways of selecting a range within your Google Sheets using Apps Script.

### Let's create a simple function that selects one specific cell

Accessing a specific sheet like Sheet1 is as simple as:
```javascript
function rangeSelection() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
}
```

Then if we want to select A1 for example, there are two ways we can do so. We can pass the name of the cell as a string:
```javascript
function rangeSelection() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var c = s.getRange("A1");
}
```

Or, we can use an integer for the row and an integer for the column for the cell we want to select. Using integers really simplify matters when looping through cells within a range. In any case here is the syntax cell A1:
```javascript
function rangeSelection() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var c = s.getRange(1,1);
}
```

### What if we want to select several cells?

If we want to select the range A1:B2 for example, there are three ways we can do so. We can pass the name of the range as a string:
```javascript
function rangeSelection() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var rg = s.getRange("A1:B2");
}
```

We can also pass the name of the range as an array of strings, with each string defining a specific cell in the range:
```javascript
function rangeSelection() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var rg = s.getRangeList(["A1","A2","B1","B2"]);
}
```

Finally, we can use four integers: one for the "starting" row, one for the "starting" column and two that defines the number of rows and the number of columns within the range. Here is the example for the A1:B2:
```javascript
function rangeSelection() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var rg = s.getRange(1, 1, 2, 2);
}
```

### Et voila!