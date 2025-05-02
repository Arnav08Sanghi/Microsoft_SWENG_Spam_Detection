// import React from 'react';
// import NavBar from './NavBar.jsx';
//  import DarkMode from './darkMode.jsx';
// import Footer from './Footer.jsx';
//import '/About.css'

function Sustainability() {
  return (
    <>
      {/* <DarkMode /> */}
      <div className="about-container">
        <h1>Sustainability Information</h1>
        <p>
          This spam detection system uses green computing in three key ways.
        </p>

        <h2>A Greener AI by design</h2>
        <ul>
          <p>With the recent rise in use of AI models, one of the most important ethical concerns about their use has been their environmental impact. While much attention has been drawn to model’s energy-intensive training phase, recent research shows that the majority of a model’s carbon footprint often comes from the inference stage i.e the part that runs every time a user interacts with an AI tool.

A recent study done by Luccioni et. al (2024) demonstrates that task-specific models like ours are orders of magnitude more energy efficient than large general-purpose models. By using an optimised Support Vector Machine, a lightweight and highly efficient model for text classification, we dramatically reduce computational cost per prediction, especially compared to multi-modal models like Chat GPT
          </p>
        </ul>

        <h2>Hosting with a conscience</h2>
        <ul>
          <p>We host our app on Microsoft Azure, which has pledged to run entirely on renewable energy by 2025. Azure’s infrastructure also includes features like auto-scaling and resource optimization, which help reduce wasteful energy usage during periods of low demand.
          Together, our low-emission model and green infrastructure make this project a frontrunner in sustainable AI development.</p>
        </ul>

        <h2>Low Memory Footprint</h2>
        <ul>
          <p>Our app is stateless and does not store any user data, further minimizing energy usage from memory and storage. Additionally, SVMs are very memory efficient as they only need to store the closest vectors to the optimal hypeplane calculated by the function. This saves space compared to larger neural networks.</p>
        </ul>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://dl.acm.org/doi/10.1145/3630106.3658542">https://dl.acm.org/doi/10.1145/3630106.3658542</a></li>
          <li><a href = "https://datacenters.microsoft.com/globe/pdfs/sustainability/factsheets/Ireland%20(North%20Europe).pdf">https://datacenters.microsoft.com/globe/pdfs/sustainability/factsheets/Ireland%20(North%20Europe).pdf</a></li>
        </ul>
      </div>
    </>
  );
}

export default Sustainability;
