---
layout: "resource"
title: "How to do translations right in your GoogleSheets"
categories: Sheets
date: 2020-03-28
permalink: /resources/:categories/:title:output_ext
---
If you deal with feedback coming from your customers all over the world, having the ability to translate their comments in your native language is crucial! You obviously do not want to exclude non-english speaking users from your analysis for example. Translating is super easy in Google Sheets, and I will show you how to do just that using the _GOOGLETRANSLATE_ function.

### Here is how it works:

In the following example we will translate the content in cell A1 from French to English.

```
=googletranslate(A1,"fr","en")
```

![png]({{ 'assets/img/googlesheets/img-googletranslate/googletranslate.png' | relative_url }})

Here is more, you can use _GOOGLETRANSLATE_ in collaboration with the _DETECTLANGUAGE_ function, so you can let Google Sheets figure out the original language:

```
=googletranslate(A1,detectlanguage(A1),"en")
```

![png]({{ 'assets/img/googlesheets/img-googletranslate/detectlanguage.png' | relative_url }})

### To sum it up

The _GOOGLETRANSLATE_ function take three parameters as input: text, source_language and target_language.

Text is simply the piece of text you want to be translated.

Source_language, is auto by default (GoogleSheets will automatically detect the language) however we can indicate the source language by using a two-letters code as below:

![png]({{ 'assets/img/googlesheets/img-googletranslate/two-letters-code.png' | relative_url }})

Finally the target_language is the two-letters code for the language we want the text to be translated into.

<!--
<picture>
	<source media="(min-width: 840px)" srcset="{{ 'assets/img/googlesheets/img-googletranslate/googletranslate_formula_desktop.png' | relative_url }}">
	<source media="(max-width: 840px)" srcset="{{ 'assets/img/googlesheets/img-googletranslate/googletranslate_formula_mobile.png' | relative_url }}">
	<img src="{{ 'assets/img/googlesheets/img-googletranslate/googletranslate_formula_mobile.png' | relative_url }}" alt="Google Translate Summary"/>
</picture>
-->

### Et voila!