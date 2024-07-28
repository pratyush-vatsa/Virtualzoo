import React, { useState, useEffect } from 'react';
import './SlideImage.css'

function SlideImage() {
  
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/b/b9/Dudhwa_national_lazy_tiger.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/House_sparrow_male_in_Prospect_Park_%2853532%29.jpg/1500px-House_sparrow_male_in_Prospect_Park_%2853532%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Medv%C4%9Bd_plav%C3%BD_%28Ursus_arctos_isabellinus%29.jpg/1500px-Medv%C4%9Bd_plav%C3%BD_%28Ursus_arctos_isabellinus%29.jpg',
    'https://hips.hearstapps.com/hmg-prod/images/outdoor-hanging-plants-petunia-flowers-1655825453.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="slide-image">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        <div className="overlay-text">Welcome to the virtual zoo</div>
      </div>
    </div>
  );
}

export default SlideImage;
