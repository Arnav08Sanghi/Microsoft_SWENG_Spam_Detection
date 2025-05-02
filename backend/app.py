from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
from sklearn.svm import SVC
from TextPreprocessingUtils import preprocess_text
import os
import numpy as np
import nltk
nltk.download('wordnet')


# Load the trained spam detection model
svm = joblib.load("final_svm.pkl")

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/predict', methods=['POST'])
def classify_text():
    data = request.get_json()
    
    if not data or 'text' not in data:
        return jsonify({"error": "No input provided"}), 400

    input_text = data['text']
    prediction = svm.predict([input_text])
    print(prediction[0])
    predicted_class = 0 if prediction[0] == 0 else 1

    return jsonify(predicted_class)


@app.route('/predict2', methods=['POST'])
def classify_twitter_link():
    from tweet import extract_text_from_tweet

    data = request.get_json()
    
    if not data or 'text' not in data:
        return jsonify({"error": "No input provided"}), 400

    tweet_url = data['text']

    try:
        tweet_text = extract_text_from_tweet(tweet_url)
    except Exception as e:
        print(f"Error extracting tweet text: {e}")
        return jsonify({"error": str(e)}), 500

    prediction = svm.predict([tweet_text])
    predicted_class = 0 if prediction[0] == 0 else 1

    return jsonify(predicted_class)


@app.route('/')
def home():
    return "Hello, World!"

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)


