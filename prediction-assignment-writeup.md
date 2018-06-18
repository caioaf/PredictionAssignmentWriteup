# Prediction Assignment Writeup

## Backgroupd

This is an R Markdown document. Markdown is a simple formatting syntax for authoring HTML, PDF, and MS Word documents. For more details on using R Markdown see <http://rmarkdown.rstudio.com>.

When you click the **Knit** button a document will be generated that includes both content as well as the output of any embedded R code chunks within the document. You can embed an R code chunk like this:

## Data Processing

* During CSV loading I considered 'NA', '#DIV/0!' and empty values as NA
* Based on summary() I removed manually columns "X", "user_name", "raw_timestamp_part_1", "raw_timestamp_part_2", "cvtd_timestamp",  "new_window", and "skewness_roll_belt"
* Iterate through the dataset to remove columns whose median was equal to 0
* During training I've used 'preProcess = c("range", "nzv", "pca")'
* Data partitioning (for validation):

```R
data <- read.csv("pml-training.csv", na.strings = c("NA", "#DIV/0!", ""))

inTrain <- createDataPartition(y=data[["classe"]], p=0.9, list=FALSE)
train <- data[inTrain,]
val <- data[-inTrain,]
```



## Prediction Model

```R
# Enabling parallelism
fitControl <- trainControl(method = "cv",
                           number = 5,
                           allowParallel = TRUE)

# Training random forest model
model <- train(classe ~ .,
               data = train,
               method = "rf",
               preProcess = c("range", "nzv", "pca"),
               trControl = fitControl,
               na.action = na.omit)
```

* ```trControl``` was set to enable parallelism and make the training faster



## Result

```
Confusion Matrix and Statistics

          Reference
Prediction   A   B   C   D   E
         A 557   0   0   1   0
         B   7 364   4   2   2
         C   0   4 338   0   0
         D   0   1   9 311   0
         E   0   2   2   1 355

Overall Statistics
                                                  
               Accuracy : 0.9821429               
                 95% CI : (0.9752519, 0.9875311)  
    No Information Rate : 0.2877551               
    P-Value [Acc > NIR] : < 0.00000000000000022204
                                                  
                  Kappa : 0.9774039               
 Mcnemar's Test P-Value : NA                      

Statistics by Class:

                      Class: A  Class: B  Class: C  Class: D  Class: E
Sensitivity          0.9875887 0.9811321 0.9575071 0.9873016 0.9943978
Specificity          0.9992837 0.9905601 0.9975109 0.9939210 0.9968808
Pos Pred Value       0.9982079 0.9604222 0.9883041 0.9688474 0.9861111
Neg Pred Value       0.9950071 0.9955724 0.9907293 0.9975595 0.9987500
Prevalence           0.2877551 0.1892857 0.1801020 0.1607143 0.1821429
Detection Rate       0.2841837 0.1857143 0.1724490 0.1586735 0.1811224
Detection Prevalence 0.2846939 0.1933673 0.1744898 0.1637755 0.1836735
Balanced Accuracy    0.9934362 0.9858461 0.9775090 0.9906113 0.9956393
```

