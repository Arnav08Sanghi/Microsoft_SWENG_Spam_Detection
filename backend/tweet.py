import re
import tweepy

# Ideally, you should store this in an environment variable
bearer_token = 'AAAAAAAAAAAAAAAAAAAAAJBPzAEAAAAAZbMyhYgdlXXG7eRxVKULuRDAzmw%3DQIUrFg2LhPeWmqLLGMsL0NbUzDMi4eTbBbqQ3qW7837wXbIUac'

# Setup Twitter API client
client = tweepy.Client(bearer_token=bearer_token)

# Extract tweet ID from the URL
def extract_tweet_id(url):
    match = re.search(r"status/(\d+)", url)
    return match.group(1) if match else None

# Main function to call from app.py
def extract_text_from_tweet(url):
    tweet_id = extract_tweet_id(url)
    if not tweet_id:
        raise ValueError("Invalid tweet URL")

    try:
        tweet = client.get_tweet(tweet_id)
        return tweet.data['text']
    except tweepy.TweepyException as e:
        raise RuntimeError(f"Error fetching tweet: {e}")
