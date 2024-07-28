import React from 'react';
import './Plant.css';
import PlantCard from './PlantCard';

function Plants() {
  return (
    <section style={{backgroundColor:""}}>
    <div className="App">
      <h1>Plants</h1>
      <div className="plant-container">
      <PlantCard
name="Tulip"
species="Tulipa"
habitat="Gardens, parks"
found="Native to Central Asia and the Middle East"
image="https://live.staticflickr.com/4126/5042859294_9fb625cd6f_c.jpg"
/>
<PlantCard
name="Marigold"
species="Tagetes"
habitat="Gardens, parks"
found="Native to Mexico and Central America"
image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Marigold.JPG/800px-Marigold.JPG"
/>

<PlantCard
name="Impatiens"
species="Impatiens walleriana"
habitat="Gardens, parks, flower beds"
found="Native to Eastern Africa"
image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Starr_070906-8886_Impatiens_hawkeri.jpg/800px-Starr_070906-8886_Impatiens_hawkeri.jpg"
/>
   <PlantCard
name="Pansy"
species="Viola tricolor"
habitat="Gardens, parks, flower beds"
found="Native to Europe"
image="https://media.sciencephoto.com/c0/58/14/17/c0581417-800px-wm.jpg"
/>

      </div>
    </div>
    </section>
  );
}

export default Plants;