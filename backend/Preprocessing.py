import joblib
import nltk
import string
import sklearn
from nltk import word_tokenize, WordNetLemmatizer
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer
from TextPreprocessingUtils import preprocess_text

# Download necessary resources for nltk preprocessing
nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('stopwords')

vectorizer = joblib.load("tfidf_vectorizer.pkl")


def preprocess_and_vectorize(text):
    processed_text = preprocess_text(text)
    # Use the entire sentence for TF-IDF vectorization
    vectorized_data = vectorizer.transform([processed_text]).toarray()  # Convert to NumPy array

    return vectorized_data
