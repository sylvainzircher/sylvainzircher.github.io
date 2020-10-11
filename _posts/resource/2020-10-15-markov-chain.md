---
layout: "resource"
title: "Quickly Generate a Markov Chain Model"
slug: create-markov-chain-model
categories: R
date: 2020-10-15
permalink: /resources/:categories/:title:output_ext
---

A Markov Chain model can be very useful to understand a sequence of events. I usually extract the transition matrix from the model to understand, for example, the probability that the visitors of my website might do a certain action based on the previous action they performed. Here is a simple example using weather data:

### Let's install and load the markovchain library
```r
install.packages("markovchain")
library(markovchain)
```

### Generating a Dataset
Here I am creating a random sequence:
```r
sequence = c("rainy", "rainy", "sunny", "cloudy", "rainy", "cloudy", "sunny", "cloudy", "rainy", "rainy", "rainy", "cloudy", "cloudy", "cloudy", "rainy", "sunny", "rainy")
```

### Creating a Markov Chain Model
Let's fit a Markov Chain Model to the sequence
```r
mcFit = markovchainFit(data=sequence)
TrMat = mcFit$estimate
```

And plot the transition matrix
```r
plot(TrMat, package = "diagram"
     , cex.txt = 0.6
     , box.size = 0.1
     , box.prop = 0.5
     , box.col = "light yellow"
     , box.lwd = 0.1
     , box.cex = 0.6
     , shadow.col = NULL
     , arr.width= 0.1
     , arr.length = 0.1
     , arr.lwd = 0.1
     , arr.type = "triangle"
     , arr.col = "gray"
     , arr.lcol = "gray"
     , self.cex = .6
     , main = "Markov Chain - Transition Matrix"
)
```

![png]({{ 'assets/img/R/Markov/transitionmatrix.png' | relative_url }})

We can export the transition matrix as a dataframe and save it in a csv:

```r
TrDf = as(TrMat, "data.frame")
write.csv(TrDf, file = "df - Markov Chain.csv")
```

### Et voila!