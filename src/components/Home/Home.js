import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Motive from '../Motive/Motive';
import Meaning from '../Meaning/Meaning';
import Animals from '../Animal/Animals';
import Plants from '../Plants/Plants';
import SlideImage from '../SlideImage/SlideImage';



function Home() {
  return (
   
      <div className="Home">
        <Header />
        <SlideImage/>
        <Animals />
        <Plants />
        <Motive />
        <Meaning />
        <Footer />
      </div>
  );
}

export default Home;
