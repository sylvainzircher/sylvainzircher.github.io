---
layout: "resource"
title: "Add your function to the Google Sheets UI"
slug: add-apps-script-function-to-google-sheets-ui
categories: Apps-Script
date: 2020-10-03
permalink: /TipsnTricks/:categories/:title:output_ext
---

What if you want to make your App Script function accessible to yourself or your stakeholders? You can easily do that and we are going to see how.

### Let's create a simple App Script function

I will be using the <em>accessInput</em> function created in a <a href="https://sylvainzircher.com/resources/apps-script/googlesheets-input-output.html" target="blank">different post</a>.
```javascript
function accessInput() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var cellContent = s.getRange("A1").getValue();
  
  s.getRange("A2").setValue(cellContent);
}
```

### Adding a function to the UI

On open, we will call the Google Sheets UI and add a new menu to it. We will call it "New Menu" - original I know. We will add our <em>accessInput</em> function and call it "Access Input".
```javascript
function onOpen() {
  ui = SpreadsheetApp.getUi();
  
  ui.createMenu("New Menu")
  .addItem("Access Input", "accessInput") 
  .addToUi();
};

function accessInput() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var cellContent = s.getRange("A1").getValue();
  
  s.getRange("A2").setValue(cellContent);
}
```
Save, close the editor and refresh the Google Sheets. Wait a couple of seconds and you should see the newly created menu appearing now beside Help.

### Et voila!