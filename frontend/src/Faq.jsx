// import React from 'react';
// import NavBar from './NavBar.jsx';
// import DarkMode from './darkMode.jsx';
// import Footer from './Footer.jsx';

function Faq() {
  return (
    <>
      <div className="about-container">
        <h1>FAQ</h1>
        <h2>What do we identify as spam?</h2>
        <ul>
          <li>Spam is any kind of unwanted, unsolicited digital communication that gets sent out in bulk.  </li>
        </ul>

        <h2>What is the Spam Detection project about?</h2>
        <ul>
          <li>Our project is a web-based spam detection tool designed to identify and filter out unwanted or harmful messages in digital communications.
             It uses machine learning and natural language processing (NLP) techniques to classify text as spam or non-spam.</li>
        </ul>

        <h2>How does the spam detection work?</h2>
        <ul>
          <li>The system employs a combination of supervised learning (using models such as Naïve Bayes, SVM, and deep learning architectures like CNNs/RNNs) and NLP for text preprocessing. 
            This approach allows the model to evaluate the input text and output a probability score indicating the likelihood of spam.)</li>
        </ul>
      </div>
    </>
  );
}

export default Faq;
