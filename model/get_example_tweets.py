import joblib
import pandas as pd

svm = joblib.load("backend/final_svm.pkl")

data = pd.read_csv("model/data/balanced_raw_data.csv")

for x in range(data.shape[0]):
    if (svm.predict(data.iloc[x][0])[0] == 1):
        print(data.iat[x][0] + "This is spam!")
    else:
        print(data.iat[x][0] + "This is ham!")

