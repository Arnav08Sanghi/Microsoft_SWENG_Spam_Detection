import string
import nltk
import joblib
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_selection import SelectKBest
from sklearn.model_selection import train_test_split
from nltk.stem import WordNetLemmatizer
import pandas as pd


#Text Preprocessing
def preprocess_text(text):
    if not isinstance(text, str):
        return ""
    # Convert to lowercase
    text = text.lower()

    # Tokenize the text
    tokens = word_tokenize(text)

    # Initialize stopwords and lemmatizer
    stop_words = set(stopwords.words("english"))
    lemmatizer = WordNetLemmatizer()

    # Remove stopwords and punctuation, and lemmatize tokens
    processed_tokens = [
        lemmatizer.lemmatize(word) for word in tokens
        if word.isalpha() and word not in stop_words
    ]

    return " ".join(processed_tokens)


#  Process Dataset, Split into Train/Test, and Use TF-IDF
def vectorize_text_data(data_csv_path):

    # Load the input CSV into a DataFrame
    print("Loading data...")
    df = pd.read_csv(data_csv_path, header=None)
    df.columns = ['message', 'label']
    spam_labels = df.pop('label')

    # Tokenize and Standardize with preprocess_text()
    print("Preprocessing text data...")
    df['processed_message'] = df['message'].apply(preprocess_text)

    # Initialize the TF-IDF Vectorizer
    print("Vectorizing text data with TF-IDF...")
    tfidf_vectorizer = TfidfVectorizer(
        max_features=200,     # Increased vocab size
        min_df=2,              # Include rarer but not super-rare terms
        max_df=0.85,           # Exclude overly common terms
        ngram_range=(1, 2)     # Use unigrams and bigrams
    )
    csr_embed = tfidf_vectorizer.fit_transform(df['processed_message'])     # The vectorizer saves to a csr martix (sparse)

    joblib.dump(tfidf_vectorizer, "backend/tfidf_vectorizer.pkl")
    print("TF-IDF Vectorizer saved as 'tfidf_vectorizer.pkl'.")

    df_embed = pd.DataFrame.sparse.from_spmatrix(csr_embed)     # Create dataframe from sparse matrix
    df_embed.columns = tfidf_vectorizer.get_feature_names_out()

    print("Splitting data into training and testing sets...")
    xtrain, xtest, ytrain, ytest = train_test_split(
        df_embed, spam_labels, test_size=0.35, random_state=42
    )

    print("TF-IDF vectorization completed, and data saved successfully!")
    return xtrain, xtest, ytrain, ytest



def preprocess_for_cnn(texts, tokenizer, maxlen=200):
    """
    Preprocess a list of raw text strings for CNN model input.

    Parameters:
    - texts: list or Series of raw message strings
    - tokenizer: fitted Keras Tokenizer
    - maxlen: max sequence length (default = 1000)

    Returns:
    - numpy array of padded token sequences ready for CNN
    """
    from TextPreprocessingUtils import preprocess_text  
    cleaned = [preprocess_text(t) for t in texts]
    sequences = tokenizer.texts_to_sequences(cleaned)
    padded = pad_sequences(sequences, maxlen=maxlen, padding='post', truncating='post')

    return padded
