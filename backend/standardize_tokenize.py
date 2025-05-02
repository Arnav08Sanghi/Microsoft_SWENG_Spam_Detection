import nltk
import string
from nltk.corpus import stopwords

# Download required resources
nltk.download('punkt')
nltk.download('stopwords')

# Tokenization pattern: Keep hashtags (#word) and URLs together, split everything else normally
def custom_tokenize(text):
    pattern = r"https?://\S+|#\w+|\w+"  # Matches URLs, hashtags, and normal words
    return nltk.regexp_tokenize(text, pattern)

# Get input text
text = input("Enter text: ")

# Tokenize using custom regex
tokens = custom_tokenize(text)

# Remove punctuation (except in hashtags and URLs, which are preserved by regex)
tokens = [word for word in tokens if word not in string.punctuation]

# Remove stopwords
list_stopwords = set(stopwords.words('english'))
tokens = [word for word in tokens if word.startswith("#") or word.startswith("http") or word.lower() not in list_stopwords]

print(tokens)

















