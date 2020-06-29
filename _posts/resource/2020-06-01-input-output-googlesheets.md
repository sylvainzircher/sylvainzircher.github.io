---
layout: "resource"
title: "GoogleSheets I/O using App Script"
categories: Apps-Script
date: 2020-04-03
permalink: /resources/:categories/:title:output_ext
---

This post covers one of the most basic aspect of interacting with a Google Sheets through App Script which is accessing some data contained in a cell within a sheet and writing data to a cell. 


### Let's access the content of a cell using App Script

Accessing "Sheet1" in the current Google Sheets:
```javascript
function accessInput() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
}
```

Accessing the content of the cell A1 and saving it into a variable.
```javascript
function accessInput() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var cellContent = s.getRange("A1").getValue();
}
```

### Now let's write the content into a cell

I am now going to write the content of cell A1 into cell A2:
```javascript
function accessInput() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet4");
  var cellContent = s.getRange("A1").getValue();
  
  s.getRange("A2").setValue(cellContent);
}
```
If you now just type anything into cell A1 within Sheet1 and run the script in the editor you should see the content of A1 being duplicated in A2.

### Et voila!