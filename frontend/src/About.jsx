// import React from 'react';
// import NavBar from './NavBar.jsx';
// import DarkMode from './darkMode.jsx';
// import Footer from './Footer.jsx';
// import '/About.css'

function About() {
  return (
    <>
      <div className="about-container">
        <h1>About This Project</h1>
        <p>
          This spam detection system was developed as part of the Software Engineering module (CSU22013-CSU33013)
          in collaboration with Microsoft. Our objective is to create an intelligent solution for identifying and filtering spam on social media.
        </p>

        <h2>Our Team</h2>
        <ul>
          <li>Elizabeth O&apos;Sullivan (Team Lead & Documentation)</li>
          <li>Vansh Khetan (Product Owner)</li>
          <li>Harry Fitzpatrick (Backend Team Lead)</li>
          <li>Arnav Sanghi (Frontend Team Lead)</li>
          <li>Joe Reidy (NLP Team Joint Lead)</li>
          <li>Lukas Anderson (NLP Team Joint Lead)</li>
        </ul>

        <h2>Mentors</h2>
        <ul>
          <li>Aviejay Paul</li>
          <li>Paresh</li>
          <li>Tanay</li>
        </ul>

        <h2>Technologies</h2>
        <ul>
          <li>React.js (Frontend)</li>
          <li>Flask (Backend)</li>
          <li>Scikit-learn, NLTK (ML & NLP)</li>
          <li>Pandas (Data Storage)</li>
          <li>Microsoft Azure (Deployment)</li>
        </ul>
      </div>
    </>
  );
}

export default About;
