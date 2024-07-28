import React from 'react';
import './Gorilla.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const GorillaPage = () => {
  return (
    <div><Header/>
    <div className="gorilla-container">
      <h1 className="gorilla-title">Gorilla</h1>
      
      <div className="video-container">
        <iframe 
          title="Gorilla Video"
          className="gorilla-video"
          src="https://www.youtube.com/embed/V3auPw3Ee3M" 
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>


      <div className="info-container">
        <h2 className="section-title">General Information</h2>
        <p className="info-text">
          Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central sub-Saharan Africa...
        </p>

        <h2 className="section-title">Physical features and characteristics</h2>
        <p className="info-text">
          Gorillas have a robust build with long arms, a slightly shorter, broad chest, and a flat nose with large nostrils...
        </p>

        <h2 className="section-title">Lifestyle and reproduction</h2>
        <p className="info-text">
          Gorillas live in groups called troops, led by a dominant male known as a silverback...
        </p>

        <h2 className="section-title">Habitat</h2>
        <p className="info-text">
          They primarily inhabit tropical and subtropical forests, ranging from montane forests to swampy areas...
        </p>

        <h2 className="section-title">Diet</h2>
        <p className="info-text">
          Gorillas are primarily herbivores, with their diet consisting mainly of leaves, shoots, fruits, and stems...
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default GorillaPage;
