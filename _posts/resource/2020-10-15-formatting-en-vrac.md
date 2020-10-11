---
layout: "resource"
title: "Formatting 'En Vrac': Number Format, Background Color and Other" 
slug: formatting-en-vrac
categories: Apps-Script
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

This post is just a collection of snippets of codes to format the content in your Google Sheets.

### Removing the grid

```javascript
function removeGrid() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  
  s.setHiddenGridlines(true);
}
```

### Setting the number format

```javascript
function numberFormat() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var text = s.getRange("A1");

  text.setNumberFormat('0.00');
}
```

### Setting the font color and the background color

```javascript
function colorFormat() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var text = s.getRange("A1");

  text.setBackground('#666666').setFontColor('#ffffff');
}
```

### Aligning the text within a cell

```javascript
function alignFormat() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var text = s.getRange("A1");

  text.setHorizontalAlignment('center').setVerticalAlignment('center');
}
```

### Autoresizing columns

Here we will autoresize the columns A,B and C:

```javascript
function alignFormat() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");

  s.autoResizeColumns(1, 3);  
}
```


### Et voila!