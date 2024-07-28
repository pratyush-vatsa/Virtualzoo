import React from 'react';
import AnimalCard from '../Animal/AnimalCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Fauna.css';

const Fauna = () => {
  return (
    <div>
      <Header />
      <div className="cont">
        <h1 style={{ fontSize: '5rem', color: '#3a5a40', marginBottom: '15px' }}>Fauna</h1>
        <div className="animal-section">
          <hr></hr>
          <h2>Mammals</h2>
          <p>Mammals are warm-blooded vertebrates characterized by having hair or fur, giving birth to live young, and typically nursing their offspring with milk. They exhibit a diverse range of behaviors and adaptations, inhabiting various ecosystems across the globe.</p>
          <div className="animal-cont">
          <AnimalCard 
          name="Lion" 
          species="Panthera leo" 
          found="Africa and southwest Asia"
          habitat="Grasslands, savannas, dense bush" 
          image="https://w0.peakpx.com/wallpaper/538/615/HD-wallpaper-male-lion-animal-wildlife-lion-male.jpg" 
        />
            <AnimalCard 
              name="Elephant" 
              species="Loxodonta africana" 
              habitat="Grasslands, forests, deserts" 
              image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsMjY1MTg4MzU1NDItaW1hZ2Uta3liZWxhZm8uanBn.jpg" 
            />
            <AnimalCard 
  name="Tiger" 
  species="Panthera tigris" 
  found="Native to various parts of Asia" 
  habitat="Forests, grasslands, swamps" 
  image="https://i.pinimg.com/originals/c6/85/9b/c6859b12d0535e70f1034fef71894cb2.jpg"
/>
<AnimalCard 
  name="Rhinoceros" 
  species="Rhinocerotidae" 
  found="Native to Africa and Asia" 
  habitat="Grasslands, savannas, forests" 
  image="https://cdn.pixabay.com/photo/2021/03/03/14/55/rhino-6065480_1280.jpg"
/>
<AnimalCard 
  name="Giraffe" 
  species="Giraffa camelopardalis" 
  found="Native to Africa" 
  habitat="Savannas, grasslands, open woodlands" 
  image="https://images.unsplash.com/photo-1518709368567-b22d4217b91f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D"
/>
<AnimalCard 
  name="Hippopotamus" 
  species="Hippopotamus amphibius" 
  found="Native to sub-Saharan Africa" 
  habitat="Rivers, lakes, swamps" 
  image="https://c0.wallpaperflare.com/preview/651/121/68/hippo-nature-animal-world-safari.jpg"
/>
<AnimalCard 
  name="Zebra" 
  species="Equus zebra" 
  found="Native to Africa" 
  habitat="Grasslands, savannas" 
  image="https://c4.wallpaperflare.com/wallpaper/346/434/343/zebra-4k-high-def-wallpaper-preview.jpg"
/>  
<AnimalCard 
  name="Bison" 
  species="Bison bison" 
  found="Native to North America" 
  habitat="Grasslands, plains" 
  image="https://c1.wallpaperflare.com/preview/840/928/847/bison-usa-buffalo-beef.jpg"
/>
<AnimalCard 
  name="Polar Bear" 
  species="Ursus maritimus" 
  found="Native to Arctic Circle" 
  habitat="Arctic sea ice, coastal areas" 
  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SjF1SVfAMS1G4W29hYvFA5vEstOseyJU2A&s"
/>
<AnimalCard 
  name="Kangaroo" 
  species="Macropodidae" 
  found="Native to Australia" 
  habitat="Forests, grasslands, deserts" 
  image="https://c0.wallpaperflare.com/preview/539/873/311/animalsnature.jpg"
/>   
<AnimalCard
name="Horse"
species="Equus ferus caballus"
found="Domesticated animal, originated from wild horses in Eurasia"
habitat="Grasslands, savannas, forests, and deserts"
image="https://c4.wallpaperflare.com/wallpaper/74/640/935/animal-horse-horse-animals-horses-hd-art-wallpaper-preview.jpg"
/>
<AnimalCard
name="Hyena"
species="Hyaenidae"
found="Native to Africa and parts of Asia"
habitat="Savannas, grasslands, forests, and deserts"
image="https://w0.peakpx.com/wallpaper/233/930/HD-wallpaper-spotted-hyena-hyena-wildlife-animals.jpg"
/>

          </div>
        </div>
        <hr></hr>
        <div className="animal-section">
          <h2>Reptiles</h2>
          <p>Reptiles are cold-blooded vertebrates characterized by their dry, scaly skin and laying eggs on land. They include snakes, lizards, turtles, and crocodiles, and are found in diverse habitats ranging from deserts to rainforests.</p>
          <div className="animal-cont">
   <AnimalCard
     name="American Alligator"
     species="Alligator mississippiensis"
     found="Native to Southeastern United States"
     habitat="Freshwater wetlands, swamps, marshes, rivers"
     image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Two_american_alligators.jpg/800px-Two_american_alligators.jpg?20080523215639"
   />
   <AnimalCard
     name="Green Anaconda"
     species="Eunectes murinus"
     found="Native to South America"
     habitat="Tropical rainforests, swamps, marshes"
     image="https://c4.wallpaperflare.com/wallpaper/212/526/346/5bd3a060f0bb6-wallpaper-preview.jpg"
   />

   <AnimalCard
     name="Desert Tortoise"
     species="Gopherus agassizii"
     found="Native to the Mojave and Sonoran Deserts"
     habitat="Desert washes, grasslands, and scrub"
     image="https://a-z-animals.com/media/animals/images/original/desert_tortoise2.jpg"
   />

   <AnimalCard
     name="Western Diamondback Rattlesnake"
     species="Crotalus atrox"
     found="Native to Southwestern United States and Mexico"
     habitat="Deserts, grasslands, and scrub"
     image="https://media.sciencephoto.com/c0/51/87/44/c0518744-800px-wm.jpg"
   />

   <AnimalCard
     name="Gila Monster"
     species="Heloderma suspectum"
     found="Native to Southwestern United States and Mexico"
     habitat="Deserts, grasslands, and scrub"
     image="https://media.sciencephoto.com/c0/37/36/93/c0373693-800px-wm.jpg"
   />


   <AnimalCard
     name="Eastern Box Turtle"
     species="Terrapene carolina carolina"
     found="Native to Eastern United States"
     habitat="Forests, grasslands, and wetlands"
     image="https://c0.wallpaperflare.com/preview/95/901/245/box-turtle-land-turtles-eastern-box-turtle-orange-turtle.jpg"
   />

   <AnimalCard
     name="Black Rat Snake"
     species="Pantherophis obsoletus"
     found="Native to Eastern United States"
     habitat="Forests, grasslands, and wetlands"
     image="https://media.sciencephoto.com/c0/03/94/14/c0039414-800px-wm.jpg"
   />

   <AnimalCard
     name="Corn Snake"
     species="Pantherophis guttatus"
     found="Native to Eastern United States"
     habitat="Forests, grasslands, and wetlands"
     image="https://c4.wallpaperflare.com/wallpaper/375/690/429/animals-snake-reptiles-corn-snake-wallpaper-preview.jpg"
   />

   <AnimalCard
     name="Eastern Fence Lizard"
     species="Sceloporus undulatus"
     found="Native to Eastern United States"
     habitat="Forests, grasslands, and wetlands"
     image="https://media.sciencephoto.com/f0/31/93/68/f0319368-800px-wm.jpg"
   />
<AnimalCard 
  name="Python" 
  species="Pythonidae" 
  found="Native to various parts of the world" 
  habitat="Forests, grasslands, swamps" 
  image="https://media.sciencephoto.com/c0/40/20/22/c0402022-800px-wm.jpg"/>
  <AnimalCard 
  name="Crocodile" 
  species="Crocodylidae" 
  found="Native to various continents" 
  habitat="Rivers, lakes, swamps" 
  image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Mugger_crocodile_%28Crocodylus_palustris%29_Gal_Oya.jpg/800px-Mugger_crocodile_%28Crocodylus_palustris%29_Gal_Oya.jpg"
/>
    <AnimalCard
      name="Eastern Coachwhip"
      species="Masticophis flagellum"
      found="Native to Eastern United States"
      habitat="Forests, grasslands, and wetlands"
      image="https://media.sciencephoto.com/f0/31/53/86/f0315386-800px-wm.jpg"
    />
          </div>
        </div>
        <hr></hr>
        <div className="animal-section">
          <h2>Birds</h2>
          <p>Birds are warm-blooded vertebrates with feathers, wings, and beaks. They are known for their ability to fly, although not all birds can do so. Birds inhabit virtually all ecosystems worldwide, from polar regions to tropical forests.</p>
          <div className="animal-cont">
          <AnimalCard 
  name="Scarlet Macaw" 
  species="Ara macao" 
  found="Native to South America" 
  habitat="Tropical rainforests and savannas" 
  image="https://c4.wallpaperflare.com/wallpaper/737/943/787/pair-of-beautiful-colorful-parrots-scarlet-macaws-wallpapers-hd-for-mobile-phones-tablet-and-computer-1920%C3%971200-wallpaper-preview.jpg"
/>

<AnimalCard 
  name="Toucan" 
  species="Ramphastidae" 
  found="Native to South and Central America" 
  habitat="Rainforests and tropical forests" 
  image="https://c4.wallpaperflare.com/wallpaper/566/20/900/nature-tropics-background-bird-wallpaper-preview.jpg"
/>


<AnimalCard 
  name="Hummingbird" 
  species="Trochilidae" 
  found="Native to the Americas" 
  habitat="Various habitats including forests, mountains, and gardens" 
  image="https://c4.wallpaperflare.com/wallpaper/34/791/641/photography-of-pink-and-yellow-petaled-flowers-wallpaper-preview.jpg"
/>


<AnimalCard 
  name="Puffin" 
  species="Fratercula" 
  found="Native to the North Atlantic Ocean" 
  habitat="Coastal cliffs and islands" 
  image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Puffin_%28Fratercula_arctica%29.jpg/800px-Puffin_%28Fratercula_arctica%29.jpg"
/>


<AnimalCard 
  name="Flamingo" 
  species="Phoenicopteridae" 
  found="Native to various continents including Africa, Asia, and the Americas" 
  habitat="Saltwater lakes, lagoons, and coastal areas" 
  image="https://w0.peakpx.com/wallpaper/149/947/HD-wallpaper-flamingo-pair-flamingos-birds-coral-white-pair-feathers.jpg"
/>


<AnimalCard 
  name="Kingfisher" 
  species="Alcedinidae" 
  found="Native to various continents including Europe, Asia, and Africa" 
  habitat="Rivers, lakes, ponds, and coastal areas" 
  image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/%E2%99%82_Common_Kingfisher_%28Alcedo_atthis%29_Photograph_By_Shantanu_Kuveskar%2C_Mangaon%2C_Maharashtra%2C_India.jpg/800px-%E2%99%82_Common_Kingfisher_%28Alcedo_atthis%29_Photograph_By_Shantanu_Kuveskar%2C_Mangaon%2C_Maharashtra%2C_India.jpg"
/>


<AnimalCard 
  name="Peacock" 
  species="Pavo" 
  found="Native to the Indian subcontinent" 
  habitat="Forests and woodlands" 
  image="https://i.pinimg.com/736x/86/89/c1/8689c1cf1cbcfa95798448a30f714414.jpg"
/>


<AnimalCard 
  name="Owl" 
  species="Strigiformes" 
  found="Found worldwide except Antarctica" 
  habitat="Various habitats including forests, woodlands, and grasslands" 
  image="https://w0.peakpx.com/wallpaper/591/74/HD-wallpaper-the-look-of-an-owl-owl-wildlife-mayur-kotlikar-india.jpg"
/>


<AnimalCard 
  name="Woodpecker" 
  species="Picidae" 
  found="Found worldwide except for Australia, New Guinea, New Zealand, Madagascar, and the extreme polar regions" 
  habitat="Forests, woodlands, and savannas" 
  image="https://w0.peakpx.com/wallpaper/200/714/HD-wallpaper-birds-woodpecker-pileated-woodpecker-bird.jpg"
/>
 
<AnimalCard 
  name="Swan" 
  species="Anatidae" 
  found="Found worldwide except for Antarctica" 
  habitat="Lakes, ponds, rivers, and marshes" 
  image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/SwansCygnus_olor.jpg/800px-SwansCygnus_olor.jpg"/>


<AnimalCard 
  name="Dove" 
  species="Columbidae" 
  found="Found worldwide except for the extreme polar regions" 
  habitat="Forests, woodlands, urban areas, and farmlands" 
  image="https://c4.wallpaperflare.com/wallpaper/717/125/113/pigeon-bird-hd-white-dove-wallpaper-preview.jpg"
/>


<AnimalCard 
  name="Crane" 
  species="Gruidae" 
  found="Found worldwide except Antarctica and South America" 
  habitat="Wetlands, grasslands, and agricultural fields" 
  image="https://img.lovepik.com/photo/48011/4365.jpg_wh860.jpg"
/>
          </div>
        </div>
        <hr></hr>
        <div className="animal-section">
          <h2>Aquatic Animals</h2>
          <p>Aquatic animals include a wide range of species that live in freshwater or saltwater environments. They encompass fish, amphibians, marine mammals, and various invertebrates, playing essential roles in aquatic ecosystems and global biodiversity.</p>
          <div className="animal-cont">
          <AnimalCard
     name="Clownfish"
     species="Amphiprioninae"
     found="Native to the Pacific and Indian Oceans"
     habitat="Coral reefs"
     image="https://t3.ftcdn.net/jpg/00/17/17/86/360_F_17178634_htGSLiA6vmvngvInIWrG5YTLWyfM00zX.jpg"
   />

   <AnimalCard
     name="Anglerfish"
     species="Lophiiformes"
     found="Deep-sea fish found in the Atlantic and Antarctic Oceans"
     habitat="Deep-sea environments"
     image="https://media.sciencephoto.com/c0/33/86/11/c0338611-800px-wm.jpg"/>

   <AnimalCard
     name="Betta Fish"
     species="Betta splendens"
     found="Native to Southeast Asia"
     habitat="Freshwater environments"
     image="https://c4.wallpaperflare.com/wallpaper/706/930/440/betta-fighting-fish-psychedelic-wallpaper-preview.jpg"
   />

   <AnimalCard
     name="Discus Fish"
     species="Symphysodon aequifasciatus"
     found="Native to the Amazon River Basin"
     habitat="Freshwater environments"
     image="https://w0.peakpx.com/wallpaper/816/826/HD-wallpaper-discus-fish-colourful-fish-animal-discus.jpg"
   />

   <AnimalCard
     name="Guppy"
     species="Poecilia reticulata"
     found="Native to South America"
     habitat="Freshwater environments"
     image="https://media.istockphoto.com/id/1057678494/photo/guppy-poecilia-reticulata-colorful-rainbow-tropical-aquarium-fish.jpg?s=612x612&w=0&k=20&c=4tUPXfrG_nudlJCDLGPudHPkVYfgtxI22Nm_2H1Ama4="
   />

   <AnimalCard
     name="Neon Tetra"
     species="Paracheirodon innesi"
     found="Native to South America"
     habitat="Freshwater environments"
     image="https://media.istockphoto.com/id/514967377/photo/neon-tetra-paracheirodon-innesi-freshwater-tropical-fish.jpg?s=612x612&w=0&k=20&c=xhuD4cltTuoxm3lLdbUg8YHRJgW6q7vB1QT5CQeK77Q="
   />

   <AnimalCard
     name="Goldfish"
     species="Carassius auratus"
     found="Domesticated from the Prussian carp in East Asia"
     habitat="Freshwater environments"
     image="https://c1.wallpaperflare.com/preview/896/753/190/veiltail-fish-goldfish-swim.jpg"
   />

   <AnimalCard
     name="Zebrafish"
     species="Danio rerio"
     found="Native to South Asia"
     habitat="Freshwater environments"
     image="https://thumbs.dreamstime.com/b/zebrafish-zebra-barb-danio-rerio-freshwater-aquarium-fish-zebrafish-zebra-barb-danio-rerio-freshwater-aquarium-fish-fish-174627946.jpg"
   />

   <AnimalCard
     name="Koi Fish"
     species="Cyprinus carpio"
     found="Domesticated from the common carp in East Asia"
     habitat="Freshwater environments"
     image="https://img.freepik.com/premium-photo/colorful-mandarin-fish-ocean-photography-mandarin-fish-sea-generative-ai_796128-740.jpg"
   />

    <AnimalCard
      name="Tilapia"
      species="Oreochromis niloticus"
      found="Native to Africa"
      habitat="Freshwater environments"
      image="https://t4.ftcdn.net/jpg/05/94/29/27/360_F_594292775_lxNOLnAIOAeelJmQPcuIuZimVQ4IQnbb.jpg"
    />

    <AnimalCard
      name="Salmon"
      species="Salmo salar"
      found="Native to the North Atlantic"
      habitat="Saltwater and freshwater environments"
      image="https://media.istockphoto.com/id/627987316/photo/salmon-fish-isolated-on-white.jpg?s=612x612&w=0&k=20&c=eDA2DkO8PbnQ7_F4w7B6RYM4TGTWhB5VEd1mpvF3BD4="
    />

    <AnimalCard
      name="Tuna"
      species="Thunnus thynnus"
      found="Native to the Atlantic Ocean"
      habitat="Saltwater environments"
      image="https://cdn.pixabay.com/photo/2012/12/11/11/57/tuna-69317_640.jpg"
    />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Fauna;
