from TextPreprocessingUtils import vectorize_text_data
import pandas as pd
import joblib
import sklearn
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score


print("started program")
svm = joblib.load("model/svm.pkl")
print("loaded model")
xtrain, xtest, ytrain, ytest = vectorize_text_data("model/data/raw_data.csv")
print("vectorised data")


y_pred_svm = svm.predict(xtest.to_numpy())

svm_accuracy = accuracy_score(ytest, y_pred_svm)
svm_precision = precision_score(ytest, y_pred_svm)
svm_recall = recall_score(ytest, y_pred_svm)
svm_f1 = f1_score(ytest, y_pred_svm)


print("SVM:")
print(f"Accuracy: {svm_accuracy:.4f}")
print(f"Precision: {svm_precision:.4f}")
print(f"Recall: {svm_recall:.4f}")
print(f"F1 Score: {svm_f1:.4f}")