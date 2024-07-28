import React from 'react';
import './Eagle.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const EaglePage = () => {
  return (
    <div>
      <Header/>
    <div className="eagle-container">
      <h1 className="eagle-title">White-tailed Eagle</h1>
      
      <div className="video-container">
        <iframe 
          title="Eagle Video"
          className="eagle-video"
          src="https://www.youtube.com/embed/2P0VCMYZenw" 
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      

      <div className="info-container">
        <h2 className="section-title">General Information</h2>
        <p className="info-text">
          White-tailed eagles, also known as sea eagles, are large birds of prey native to Eurasia...
        </p>

        <h2 className="section-title">Physical features and characteristics</h2>
        <p className="info-text">
          They have a distinctive white tail and yellow beak. Their wingspan can reach up to 2.45 meters...
        </p>

        <h2 className="section-title">Lifestyle and reproduction</h2>
        <p className="info-text">
          These eagles are primarily fish-eaters, but they also hunt birds and small mammals...
        </p>

        <h2 className="section-title">Habitat</h2>
        <p className="info-text">
          They inhabit coastal regions, lakes, and rivers where they can find ample food sources...
        </p>

        <h2 className="section-title">Diet</h2>
        <p className="info-text">
          Their diet consists mainly of fish, but they are opportunistic feeders and will eat a variety of prey...
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default EaglePage;
