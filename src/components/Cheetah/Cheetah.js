import React from 'react';
import './Cheetah.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const CheetahPage = () => {
  return (

    <div><Header/>
    <div className="cheetah-container">
      <h1 className="cheetah-title">Southeast African Cheetah</h1>
      
      <div className="video-container">
        <iframe 
          title="Cheetah Video"
          className="cheetah-video"
          src="https://www.youtube.com/embed/N7e_lDDojas" 
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>


      <div className="info-container">
        <h2 className="section-title">General Information</h2>
        <p className="info-text">
          Cheetahs are the fastest land animals, capable of reaching speeds up to 70 mph...
        </p>

        <h2 className="section-title">Physical features and characteristics</h2>
        <p className="info-text">
          They have a slender body, deep chest, spotted coat, and a small rounded head with black tear-like streaks on their face...
        </p>

        <h2 className="section-title">Lifestyle and reproduction</h2>
        <p className="info-text">
          Cheetahs are solitary animals and females raise their cubs alone...
        </p>

        <h2 className="section-title">Habitat</h2>
        <p className="info-text">
          They prefer open grasslands and savannas where they can spot prey and run at high speeds...
        </p>

        <h2 className="section-title">Diet</h2>
        <p className="info-text">
          Their diet mainly consists of small to medium-sized ungulates like gazelles and impalas...
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default CheetahPage;
