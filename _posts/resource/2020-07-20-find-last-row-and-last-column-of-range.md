---
layout: "resource"
title: "Find the Last Row and The Last Column of a Google Sheets Range"
slug: Find-Last-Row-and-Last-Column-Google-Sheets-Range
categories: Apps-Script
date: 2020-07-20
permalink: /TipsnTricks/:categories/:title:output_ext
---


When building macros in Apps Script, learning very quickly how to automatically detect the last row and the last column of a range is a massive time-saver! You can either build your own functions or you can leverage some very handy built-in ones: <em>getLastRow()</em> and <em>getLastColumn()</em>. Let's have a look.


### Let's access the sheet first

```javascript
function accessRange() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
}
```

### Now let's use the functions

We want to find the indice of the last row and the indice of the last column of the range we are interested in selecting.
```javascript
function accessRange() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var last_row = s.getLastRow();
  var last_col = s.getLastColumn();
}
```

If you know that your range starts in cell A1, for example, but do not know where it ends - and you want to select the full range, here is how you would go about it:
```javascript
function accessRange() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var rg = s.getRange(1, 1, s.getLastRow(), s.getLastColumn());
}
```

### Et voila!