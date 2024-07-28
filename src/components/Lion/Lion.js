import React from 'react';
import './Lion.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const LionPage = () => {
  return (
    <div><Header/>
    <div className="lion-container">
      <h1 className="lion-title">Lion</h1>
      
      <div className="video-container">
        <iframe 
          title="Lion Video"
          className="lion-video"
          src="https://www.youtube.com/embed/QcpMHK8NBHM"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="info-container">
        <h2 className="section-title">General Information</h2>
        <p className="info-text">
          Lions are large carnivorous mammals that belong to the Felidae family and are known for their majestic appearance and loud roars...
        </p>

        <h2 className="section-title">Physical features and characteristics</h2>
        <p className="info-text">
          Male lions are easily recognized by their impressive manes, which signify maturity and dominance...
        </p>

        <h2 className="section-title">Lifestyle and reproduction</h2>
        <p className="info-text">
          Lions are social animals that live in groups called prides. The female lions do the majority of the hunting...
        </p>

        <h2 className="section-title">Habitat</h2>
        <p className="info-text">
          Lions can be found in savannahs, grasslands, and open woodlands across sub-Saharan Africa...
        </p>

        <h2 className="section-title">Diet</h2>
        <p className="info-text">
          Lions primarily prey on large herbivores such as zebras, wildebeests, and buffalo...
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default LionPage;
