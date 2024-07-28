import React from 'react';
import './Animal.css';
import AnimalCard from './AnimalCard';


function Animals() {
  return (

  
    <section className="ani">
    <div className="App">
      <h1>Animals</h1>
      <div className="animal-container">
        <AnimalCard 
          name="Panda" 
          species="Giant Panda" 
          found="Native to South America"
          habitat="temperate forests " 
          image="assets/images/giant-pandas-foto.png" 
          Url="/Panda"
        />
        
        <AnimalCard 
          name="Lion" 
          species="Panthera leo" 
          found=" Africa and southwest Asia"
          habitat="savannas, grasslands, woodlands, and scrublands" 
          image="assets\images\Lion_(Panthera_leo)_(30941994012).jpg" 
          Url="/Lion"
        />
        <AnimalCard 
          name="Gorilla" 
          species="Gorilla beringei graueri" 
          found="Native to Congo"
          habitat="tropical rainforests" 
          image="assets/images/gorillas-foto.png"
          Url="/Gorilla" 

        />
        <AnimalCard 
          name="Cheetah" 
          species="Southeast African cheetah" 
          found="Native to Africa"
          habitat="rasslands, savannahs, scrub forests" 
          image="assets/images/cheetahs.png" 
          Url="/Cheetah"
        />
        
      </div>
    </div>
    </section>
    
   
  );
}

export default Animals;