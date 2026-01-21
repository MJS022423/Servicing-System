from sklearn.naive_bayes import MultinomialNB #type: ignore
from sklearn.feature_extraction.text import CountVectorizer #type: ignore


y_train = []

vectorizer = CountVectorizer()
x_train = vectorizer.fit_transform()

model = MultinomialNB()
model.fit(x_train, y_train)