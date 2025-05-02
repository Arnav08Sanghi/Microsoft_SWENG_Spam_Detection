import pandas as pd
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV
import joblib
from backend.TextPreprocessingUtils import vectorize_text_data


xtrain, xtest, ytrain, ytest = vectorize_text_data("model/data/raw_data.csv")

params_grid = {'C': [1, 10, 100],
               'gamma': [0.001, 0.01, 0.1, 0.5]}

grid_clf = GridSearchCV(SVC(class_weight='balanced', kernel='rbf'), param_grid=params_grid)
grid_clf = grid_clf.fit(xtrain.to_numpy(), ytrain.to_numpy())
joblib.dump(grid_clf.best_estimator_, 'svm.pkl')
print(grid_clf.cv_results_ + '\n')
print(grid_clf.best_params_ + '\n')