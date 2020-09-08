---
layout: "resource"
title: "How to Loop Through a Range Using Apps Script"
slug: How-to-loop-through-a-range-in-Apps-Script
categories: Apps-Script
date: 2020-07-20
permalink: /TipsnTricks/:categories/:title:output_ext
---

In this post I will show you how to loop through a range in a GoogleSheets and access its content cell by cell. We will format the result into an array: it usually makes things easier down the line if more transformation or calculation is needed.

### Let's select the range first

The array goes from cell A1 to cell B10, and we will use the <em>getLastRow</em> and <em>getLastColumn</em> functions to automate the detection of the full range.

```javascript
function accessRange() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var lastRow = s.getLastRow();
  var lastColumn = s.getLastColumn();
  var rg = s.getRange(1, 1, lastRow, lastColumn);
}
```

### Now we will be looping through all the cells within the range

Using for loops we will loop through all the cells within the range and push the content into an array. Finally we will log the result to make sure we successfully run the script.

```javascript
function accessRange() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var lastRow = s.getLastRow();
  var lastColumn = s.getLastColumn();
  var rg = s.getRange(1, 1, lastRow, lastColumn);
  
  var result = [];

  for (var i = 1; i <= lastRow; i++) {
    for (var j = 1; j <= lastColumn; j++) {    
      result.push(rg.getCell(i, j).getValue());
    }
  }

  Logger.log(result);
}
```

### Et voila!