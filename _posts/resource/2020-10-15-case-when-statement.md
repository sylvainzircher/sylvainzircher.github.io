---
layout: "resource"
title: "How to Create Case When Statements in R"
slug: case-when-statement-in-r
categories: R
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---
Case when statements are very handy to lower the granularity of a categorical variable for example. Let's say you are dealing with a dataset made of a list of companies along with their company sizes. The column reporting the sizes is too granular for you and contains values such as 1 to 9 or 100 to 259 enployees. You want to bucket the companies into small, medium or big and the case_when() function from the _dplyr_ library can help!
  
### First let's create a dataframe
```r
companies = c('Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F', 'Company G')
sizes = c('1-9', '10-49', '50-99', '100-249', '250-499', '500-999', '1000+')
data = data.frame(companies, sizes)
```
### Introducing The casewhen() function from the dplyr library
```r
library(dplyr)

data$sizes_2 = case_when(
  data$sizes == "1-9" ~ "Small",
  data$sizes == "10-49" ~ "Small",
  data$sizes == "50-99" ~ "Small",
  data$sizes == "100-249" ~ "Medium",
  data$sizes == "250-499" ~ "Medium",
  data$sizes == "500-999" ~ "Medium",
  data$sizes == "1000+" ~ "Big",
)
head(data)
```
```
  companies   sizes sizes_2
1 Company A     1-9   Small
2 Company B   10-49   Small
3 Company C   50-99   Small
4 Company D 100-249  Medium
5 Company E 250-499  Medium
6 Company F 500-999  Medium
```
### Et voila!