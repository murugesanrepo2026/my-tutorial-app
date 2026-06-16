// src/data/machineLearningQA.js
export const machineLearningQA = [
  {
    question: "What do you understand by Machine learning?",
    answer: "Machine learning is the form of Artificial Intelligence that deals with system programming and automates data analysis to enable computers to learn and act through experiences without being explicitly programmed. Example: Robots learn programs from sensor data."
  },
  {
    question: "Differentiate between inductive learning and deductive learning.",
    answer: "Inductive learning learns by examples from observed instances to draw a generalized conclusion (e.g., showing fire accident images to teach danger). Deductive learning first applies a conclusion, then draws observation (e.g., letting a child touch fire to learn)."
  },
  {
    question: "What is the difference between Data Mining and Machine Learning?",
    answer: "Data mining extracts knowledge or unknown patterns from structured data using ML algorithms. Machine learning is the study and development of algorithms that allow processors to learn without explicit programming."
  },
  {
    question: "What is the meaning of Overfitting in Machine learning?",
    answer: "Overfitting occurs when a statistical model describes random error or noise instead of the underlying relationship, often due to excessive model complexity or too many parameters relative to training data size."
  },
  {
    question: "Why overfitting occurs?",
    answer: "Overfitting occurs when the criteria used for training the model is not aligned with the criteria used to judge the model's efficiency."
  },
  {
    question: "What is the method to avoid overfitting?",
    answer: "Use a large amount of data. If data is limited, use cross-validation. Also use regularization techniques like Isotonic Regression."
  },
  {
    question: "Differentiate supervised and unsupervised machine learning.",
    answer: "Supervised: trained using labeled data, predicts outcomes by analyzing labeled examples (e.g., classification). Unsupervised: no labeled data, algorithms make decisions without output variables, finds patterns naturally."
  },
  {
    question: "How does Machine Learning differ from Deep Learning?",
    answer: "Machine learning uses algorithms to parse data, learn, and make decisions. Deep learning is a subset inspired by human brain structure, useful for feature detection."
  },
  {
    question: "How is KNN different from k-means?",
    answer: "KNN (K nearest neighbors) is a supervised classification algorithm where a test sample's class is majority of its nearest neighbors. K-means is an unsupervised clustering algorithm that groups unlabeled points by computing mean distances."
  },
  {
    question: "What are the different types of Algorithm methods in Machine Learning?",
    answer: "Supervised Learning, Semi-supervised Learning, Unsupervised Learning, Transduction, Reinforcement Learning."
  },
  {
    question: "What do you understand by Reinforcement Learning technique?",
    answer: "Reinforcement learning involves an agent interacting with its environment by producing actions and discovering rewards/penalties. It learns the best behavior based on reward or penalty for each action."
  },
  {
    question: "What is the trade-off between bias and variance?",
    answer: "Bias is error from overly simplistic assumptions (underfitting). Variance is error from too much complexity (overfitting). To minimize total error, we trade off bias and variance."
  },
  {
    question: "How do classification and regression differ?",
    answer: "Classification predicts discrete class labels (e.g., spam or not). Regression predicts continuous quantities (e.g., stock price). Classification has binary/multi-class; regression often uses multiple input variables."
  },
  {
    question: "What are the five popular algorithms we use in Machine Learning?",
    answer: "Decision Trees, Probabilistic Networks, Neural Networks, Support Vector Machines, Nearest Neighbor."
  },
  {
    question: "What do you mean by ensemble learning?",
    answer: "Ensemble learning combines multiple models (classifiers) strategically to solve a computational problem. Example: random forest uses several decision trees to improve classification, prediction, etc."
  },
  {
    question: "What is a model selection in Machine Learning?",
    answer: "Model selection is the process of choosing among diverse mathematical models that describe the same data, applied in statistics, data mining, and machine learning."
  },
  {
    question: "What are the three stages of building the hypotheses or model in machine learning?",
    answer: "Model building (choose algorithm and train), Applying the model (check accuracy with test data), Model testing (perform changes and apply final model)."
  },
  {
    question: "What according to you, is the standard approach to supervised learning?",
    answer: "The standard approach is to split the set of examples into a training set and a test set."
  },
  {
    question: "Describe 'Training set' and 'Training Test'.",
    answer: "Training set is data used to discover predictive relationships. Test set is held back to test the accuracy of the hypotheses generated by the learner. They are distinct."
  },
  {
    question: "What are the common ways to handle missing data in a dataset?",
    answer: "Delete rows, replace with mean/median/mode, predict missing values, assign a unique category, or use algorithms that support missing values."
  },
  {
    question: "What do you understand by ILP?",
    answer: "ILP (Inductive Logic Programming) is a part of machine learning using logic programming to search patterns in data for building predictive models, assuming logic programs as hypotheses."
  },
  {
    question: "What are the necessary steps involved in Machine Learning Project?",
    answer: "Data collection, data preparation, parameter tuning, training the model, model evaluation, and prediction."
  },
  {
    question: "Describe Precision and Recall.",
    answer: "Precision (positive predictive value) is fraction of relevant instances among retrieved instances. Recall (sensitivity) is fraction of relevant instances retrieved over total relevant instances."
  },
  {
    question: "What do you understand by Decision Tree in Machine Learning?",
    answer: "A Decision Tree is a supervised learning model that splits data continuously according to parameters, building a tree structure with decision nodes and leaves (outcomes). Handles both categorical and numerical data."
  },
  {
    question: "What are the functions of Supervised Learning?",
    answer: "Classification, Speech Recognition, Regression, Predict Time Series, Annotate Strings."
  },
  {
    question: "What are the functions of Unsupervised Learning?",
    answer: "Finding clusters of data, low-dimensional representations, interesting directions in data, novel observations, interesting coordinates and correlations."
  },
  {
    question: "What do you understand by algorithm independent machine learning?",
    answer: "Algorithm independent machine learning refers to mathematical foundations that are independent of any particular classifier or learning algorithm."
  },
  {
    question: "Describe the classifier in machine learning.",
    answer: "A classifier is a hypothesis or discrete-valued function that assigns class labels to data points. It inputs feature values and outputs a single discrete class."
  },
  {
    question: "What do you mean by Genetic Programming?",
    answer: "Genetic Programming (GP) is similar to evolutionary algorithms, using random mutation, fitness function, crossover, and multiple generations of evolution to resolve tasks. It selects the best option among results."
  },
  {
    question: "What is SVM in machine learning? What classification methods can SVM handle?",
    answer: "SVM (Support Vector Machine) is a supervised learning model for classification and regression. Classification methods: combining binary classifiers, modifying binary to incorporate multiclass learning."
  },
  {
    question: "How will you explain a linked list and an array?",
    answer: "Array: contiguous memory, static allocation, random access O(1), fixed size. Linked list: non-contiguous, dynamic allocation, sequential access O(n), variable size, faster insertions/deletions."
  },
  {
    question: "What do you understand by the Confusion Matrix?",
    answer: "A confusion matrix (error matrix) is a table summarizing classification algorithm performance, showing True Positive, True Negative, False Positive, False Negative."
  },
  {
    question: "Explain True Positive, True Negative, False Positive, and False Negative with an example.",
    answer: "True Positive: correctly predicts positive (umpire says NOT OUT when batsman is NOT OUT). True Negative: correctly predicts negative (umpire says OUT when OUT). False Positive (Type I error): incorrectly predicts positive (umpire says NOT OUT when OUT). False Negative (Type II error): incorrectly predicts negative (umpire says OUT when NOT OUT)."
  },
  {
    question: "What according to you, is more important between model accuracy and model performance?",
    answer: "Model accuracy is a subset of model performance. Better performance leads to more accurate predictions, so they are directly proportional."
  },
  {
    question: "What is Bagging and Boosting?",
    answer: "Bagging (Bootstrap Aggregating) improves unstable estimation/classification schemes. Boosting sequentially reduces bias of the combined model."
  },
  {
    question: "What are the similarities and differences between bagging and boosting?",
    answer: "Similarities: both ensemble methods, generate training data via random sampling, average results, reduce variance. Differences: Boosting adds models that perform well where previous failed, determines data weights, reduces bias (bagging may reduce over-fitting)."
  },
  {
    question: "What do you understand by Cluster Sampling?",
    answer: "Cluster sampling randomly selects intact groups (clusters) within a population sharing similar characteristics. Each sampling unit is a collection or cluster of elements."
  },
  {
    question: "What do you know about Bayesian Networks?",
    answer: "Bayesian Networks (belief/causal networks) are graphical models representing probabilistic relationships among variables. Example: diseases and symptoms. Dynamic Bayesian networks relate variables over time."
  },
  {
    question: "Which are the two components of Bayesian logic program?",
    answer: "Logical component (Bayesian Clauses capturing qualitative structure) and Quantitative component (encodes quantitative domain information)."
  },
  {
    question: "Describe dimension reduction in machine learning.",
    answer: "Dimension reduction reduces the number of random variables under consideration, divided into feature selection and feature extraction."
  },
  {
    question: "Why instance-based learning algorithm sometimes referred to as Lazy learning algorithm?",
    answer: "Because induction and generalization are delayed until classification is performed, hence it is called lazy learning algorithm."
  },
  {
    question: "What do you understand by the F1 score?",
    answer: "F1 score is a weighted average of precision and recall. Values near 1 are best, near 0 are worst. Used in classification tests where true negatives don't matter much."
  },
  {
    question: "How is a decision tree pruned?",
    answer: "Pruning removes branches with weak predictive power to reduce complexity and increase accuracy. Methods: reduced error pruning (replace node if accuracy not decreased), cost complexity pruning."
  },
  {
    question: "What are the Recommended Systems?",
    answer: "Recommended Systems (sub-directory of information filtering) predict user preferences for products and provide similar recommendations. Used in movies, news, music, products, etc."
  },
  {
    question: "What do you understand by Underfitting?",
    answer: "Underfitting occurs when a model has low error on both training and testing sets, but fails to capture underlying patterns. Algorithms work for interpretations but poor for predictions."
  },
  {
    question: "When does regularization become necessary in Machine Learning?",
    answer: "Regularization is necessary when the model begins to overfit or underfit. It adds a cost term to push coefficients toward zero, reducing model complexity and improving generalization."
  },
  {
    question: "What is Regularization? What kind of problems does regularization solve?",
    answer: "Regularization is a form of regression that constrains coefficient estimates toward zero, discouraging complex models to avoid overfitting. It reduces variance without substantial bias increase."
  },
  {
    question: "Why do we need to convert categorical variables into factor? Which functions are used?",
    answer: "Most ML algorithms require numerical input. Converting categorical values to factors yields numerical values without dummy variables. Functions: `factor()` and `as.factor()`."
  },
  {
    question: "Do you think treating a categorical variable as continuous would result in a better predictive model?",
    answer: "A categorical variable can be treated as continuous only when the variable is ordinal in nature, otherwise it may not improve prediction."
  },
  {
    question: "How is machine learning used in day-to-day life?",
    answer: "ML is used in internet searches (cookies track preferences to provide suggestions), navigation systems (distance optimization), and increasingly in many daily applications."
  }
];