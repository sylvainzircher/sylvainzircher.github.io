---
layout: "resource"
title: "How to Split Text into Words"
slug: split-text-into-words
categories: Apps-Script
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

Let's say you run NPS surveys and you want to understand what the most used words are within the feedback from your customers. The first step will be to split all the comments into words and here is how to do just that.

### Let's first access the cell where the text is

We pretend that cell A1 in Sheet1 contains the text we want to analyse.

```javascript
function tokenise() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var text = s.getRange("A1").getValue();
}
```

### Now we split the text into words

We will split the text on white spaces between words, also making sure to change the case to lower case for consistency.

```javascript
function tokenise() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var text = s.getRange("A1").getValue();

  var words = text.toString().toLowerCase().split(" ");
}
```

Since we split the text on white spaces, punctuations will appear in our list of words. We want to get rid of them. First we will have to create a new array variable that will contain the list of words without any punctuation. Loop through the list and remove any dot, comma etc... at the end of each word. Then push the "cleaned" version of each word into the new array. Here we go:

```javascript
function tokenise() {
  var ss = SpreadsheetApp.getActive();
  var s = ss.getSheetByName("Sheet1");
  var text = s.getRange("A1").getValue();

  var words = text.toString().toLowerCase().split(" ");

  var wordsCleaned = [];
  words.forEach(function(w) { 
    w = w.toString().replace(/\./g,"").replace(/\,/g,"").replace(/\;/g,"").replace(/\!/g,"");
    wordsCleaned.push(w);
  });  
}
```

### Et voila!