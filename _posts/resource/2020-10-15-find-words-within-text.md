---
layout: "resource"
title: "Find if a Word is Contained Within a Text"
slug: find-words-within-text
categories: Apps-Script
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

This post is about automating the research of a word within a text. This can be easily expanded to find a word within a list of pieces of text. For example you might want to find out how many times a specific term is used when dealing with a list of NPS feedback. Let's have a look.

### We access first the cell where the text is located

We pretend that cell A1 in Sheet1 contains the text we want to analyse.

```javascript
function findWord() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var text = s.getRange("A1").getValue();
}
```

### Let's look for the keyword within the text

The first step will be to split the text into words.

```javascript
function findWord() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var text = s.getRange("A1").getValue();

  var words = text.toString().toLowerCase().split(" ");
}
```

To do it more accurately <a href="https://sylvainzircher.com/resources/apps-script/find-words-within-text.html" target="blank">see here</a> as you might want to remove the punctuation.

Now we will access the cell within the Google Sheets that contains the word to be searched for (here cell B1 in Sheet1) and try to find it within the array of words:

```javascript
function findWord() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var text = s.getRange("A1").getValue();

  var words = text.toString().toLowerCase().split(" ");

  var keyword = s.getRange("B1").getValue();
  if (words.indexOf(keyword) != -1) {return false;} else {return true;}
}
```

Using the <em>indexOf</em> function we can search for the keyword within the array of words. The function will return -1 if the keyword was not found or the indice within the array when found.

### Et voila!