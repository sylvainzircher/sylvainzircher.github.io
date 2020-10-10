---
layout: "resource"
title: "Automate Conditional Formatting in Google Sheets"
slug: loading-saving-csv-in-r
categories: Apps-Script
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---
In this post we will look at how we can automatically set conditional formatting on a range of cells that contains numerical data. 

### Let's access the range we want to format

```javascript
function formatting() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var rg = s.getRange(1, 1, s.getLastRow(), s.getLastColumn());
}
```

### Now we apply conditional formatting

We access first all the conditional formatting rules:

```javascript
function formatting() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var rg = s.getRange(1, 1, s.getLastRow(), s.getLastColumn());

  var conditionalFormatRules = s.getConditionalFormatRules();
}
```

The second step is to create a new rule that will apply a red to green (with a white middle point) color scale to our data:

```javascript
function formatting() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var rg = s.getRange(1, 1, s.getLastRow(), s.getLastColumn());

  var conditionalFormatRules = s.getConditionalFormatRules();

  conditionalFormatRules.push(SpreadsheetApp.newConditionalFormatRule()
                              .setRanges([rg])
                              .whenCellNotEmpty()
                              .setGradientMinpoint('#E67C73')
                              .setGradientMidpointWithValue('#FFFFFF', SpreadsheetApp.InterpolationType.PERCENTILE, '50')
                              .setGradientMaxpoint('#57BB8A')
                              .build()); 
}
```

Finally, we add the new rule to the list of already existing conditional formatting rules. 

```javascript
function formatting() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var rg = s.getRange(1, 1, s.getLastRow(), s.getLastColumn());

  var conditionalFormatRules = s.getConditionalFormatRules();

  conditionalFormatRules.push(SpreadsheetApp.newConditionalFormatRule()
                              .setRanges([rg])
                              .whenCellNotEmpty()
                              .setGradientMinpoint('#E67C73')
                              .setGradientMidpointWithValue('#FFFFFF', SpreadsheetApp.InterpolationType.PERCENTILE, '50')
                              .setGradientMaxpoint('#57BB8A')
                              .build());
  
  s.setConditionalFormatRules(conditionalFormatRules);  
}
```

### Et voila!