import React from 'react';
import './Panda.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const PandaPage = () => {
  return (
    <div>
    <Header/>  
    <div className="panda-container">
    
      <h1 className="panda-title">Giant Panda</h1>
      
      <div className="video-container">
        <iframe 
          title="Panda Video"
          className="panda-video"
          src="https://www.youtube.com/embed/3szkFHfr6sA" 
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>


      <div className="info-container">
        <h2 className="section-title">General Information</h2>
        <p className="info-text">
          Giant pandas are bears and are members of the Order Carnivora. They are unique because, although they evolved among the mostly carnivorous bear species of the world, their diet is vegetarian. Despite the availability of other plants, they feed almost exclusively on bamboo.
        </p>

        <h2 className="section-title">Physical features and characteristics</h2>
        <p className="info-text">
          The low nutrient value of bamboo figures prominently in the biology of the giant panda...
        </p>

        <h2 className="section-title">Lifestyle and reproduction</h2>
        <p className="info-text">
          Females are fertile for only a very short period of time and exhibit delayed implantation...
        </p>

        <h2 className="section-title">Habitat</h2>
        <p className="info-text">
          Their preferred cool and wet bamboo forests are found at elevations between 5,000 and 10,000 feet...
        </p>

        <h2 className="section-title">Diet</h2>
        <p className="info-text">
          Our animal care professionals offer each adult or subadult giant panda about 80 pounds of various bamboo species per day...
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default PandaPage;
