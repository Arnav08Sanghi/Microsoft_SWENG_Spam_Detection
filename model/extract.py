# reads data from legitimate_user_tweets and content_polluters_tweets into python
# change this to read them in from my English only datasets
# (the above a note for personal understanding that i will remove - joe)

import random
import re
import csv
import random

data = []

with open("model/data/legitimate_english_tweets.txt", encoding="utf-8") as ham:
    for x in range(200000):
        line = ham.readline()
        results = re.split("	", line)
        data.append([results[2], 0])

with open("model/data/english_spam_tweets.txt", encoding="utf-8") as spam:
    for x in range(200000):
        line = spam.readline()
        results = re.split("	", line)
        data.append([results[2], 1])
        
random.Random(4).shuffle(data)
with open("model/data/balanced_raw_data.csv", 'w', newline = "", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerows(data)

