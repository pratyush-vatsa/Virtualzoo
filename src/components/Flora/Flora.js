import React from 'react';
import PlantCard from '../Plants/PlantCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Flora.css';

const Flora = () => {
  return (
    <div>
      <Header />
      <div className="cont">
        <h1 style={{ fontSize: '5rem', color: '#3a5a40', marginBottom: '15px' }}>Flora</h1>
        <div className="plant-section">
          <h2>Garden Plants</h2>
          <p>Garden plants refer to the various types of plants that are commonly grown and cultivated in gardens for ornamental, decorative, or practical purposes. These plants can include flowers, shrubs, trees, herbs, and vegetables. Garden plants are often chosen for their aesthetic appeal, fragrance, or usefulness in attracting pollinators such as bees and butterflies. They contribute to creating beautiful outdoor spaces and enhancing the environment around homes and public areas.</p>
          <div className="plant-cont">
          <PlantCard
name="Daffodil"
species="Narcissus"
habitat="Gardens, parks, meadows"
found="Native to Europe, North Africa, and parts of Asia"
image="https://media.sciencephoto.com/c0/50/44/94/c0504494-800px-wm.jpg"
/>

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
name="Sunflower"
species="Helianthus annuus"
habitat="Gardens, parks, fields"
found="Native to North America"
image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Sunflower_in_a_field.jpg/800px-Sunflower_in_a_field.jpg?20170926185946"
/>

<PlantCard
name="Daisy"
species="Bellis perennis"
habitat="Gardens, parks, lawns"
found="Native to Europe"
image="https://www.bushgear.co.uk/cdn/shop/articles/800px-Daisy_Ganseblumchen_Bellis_perennis_01.jpg?v=1605536821"
/>

<PlantCard
name="Lavender"
species="Lavandula"
habitat="Gardens, parks, herb gardens"
found="Native to the Mediterranean region"
image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Single_lavender_flower02.jpg/800px-Single_lavender_flower02.jpg"
/>

<PlantCard
name="Pansy"
species="Viola tricolor"
habitat="Gardens, parks, flower beds"
found="Native to Europe"
image="https://media.sciencephoto.com/c0/58/14/17/c0581417-800px-wm.jpg"
/>

<PlantCard
name="Petunia"
species="Petunia"
habitat="Gardens, parks, flower beds"
found="Native to South America"
image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/African_Sunset_petunias.jpg/800px-African_Sunset_petunias.jpg"
/>

<PlantCard
name="Impatiens"
species="Impatiens walleriana"
habitat="Gardens, parks, flower beds"
found="Native to Eastern Africa"
image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Starr_070906-8886_Impatiens_hawkeri.jpg/800px-Starr_070906-8886_Impatiens_hawkeri.jpg"
/>

<PlantCard
name="Snapdragon"
species="Antirrhinum"
habitat="Gardens, parks, flower beds"
found="Native to the Mediterranean region"
image="https://media.sciencephoto.com/f0/31/34/29/f0313429-800px-wm.jpg"
/>

<PlantCard
name="Verbena"
species="Verbena"
habitat="Gardens, parks, flower beds"
found="Native to the Americas"
image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Verbena_bonariensis.jpg/800px-Verbena_bonariensis.jpg"
/>

<PlantCard
name="Zinnia"
species="Zinnia elegans"
habitat="Gardens, parks, flower beds"
found="Native to Mexico"
image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Zinnienbl%C3%BCte_Zinnia_elegans_stack15_20190722-RM-7222254.jpg/800px-Zinnienbl%C3%BCte_Zinnia_elegans_stack15_20190722-RM-7222254.jpg"
/>
          </div>
        </div>
        <div className="plant-section">
          <h2>Wild Plants</h2>
          <p>Wild plants, also known as native or indigenous plants, are species that grow and thrive naturally in their native habitats without human intervention. These plants play crucial roles in local ecosystems, providing food and shelter for wildlife, stabilizing soil, and contributing to biodiversity. Wild plants can include a wide range of species such as grasses, wildflowers, shrubs, and trees. They are adapted to specific environmental conditions and often have unique characteristics that enable them to survive and reproduce in their natural surroundings.</p>
          <div className="plant-cont">
          <PlantCard
name="Dandelion"
species="Taraxacum officinale"
habitat="Lawns, fields, disturbed areas"
found=""
image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Dandelion_clock.jpg/800px-Dandelion_clock.jpg"
/>

<PlantCard
name="Milkweed"
species="Asclepias syriaca"
habitat="Fields, meadows, roadsides"
found=""
image="https://media.sciencephoto.com/c0/26/48/21/c0264821-800px-wm.jpg"
/>

<PlantCard
name="Goldenrod"
species="Solidago canadensis"
habitat="Fields, meadows, roadsides"
found=""
image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Solidago_gigantea01.jpg/800px-Solidago_gigantea01.jpg"
/>

<PlantCard
name="Clover"
species="Trifolium pratense"
habitat="Fields, meadows, lawns"
found=""
image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Four-leaf_Clover_Trifolium_repens_2.jpg/800px-Four-leaf_Clover_Trifolium_repens_2.jpg"
/>

<PlantCard
name="Thistle"
species="Cirsium vulgare"
habitat="Fields, meadows, roadsides"
found=""
image="https://media.sciencephoto.com/f0/31/25/26/f0312526-800px-wm.jpg"
/>

<PlantCard
name="Buttercup"
species="Ranunculus acris"
habitat="Fields, meadows, roadsides"
found=""
image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ranunculus_flabellaris.jpg/800px-Ranunculus_flabellaris.jpg"
/>

<PlantCard
name="Mullein"
species="Verbascum thapsus"
habitat="Fields, meadows, roadsides"
found=""
image="https://www.boondieseeds.com.au/cdn/shop/products/800px-Verbascum_Jackie_in_Pink_2zz_800x.jpg?v=1669695421"
/>

<PlantCard
name="Yarrow"
species="Achillea millefolium"
habitat="Fields, meadows, roadsides"
found=""
image="https://media.sciencephoto.com/c0/47/85/97/c0478597-800px-wm.jpg"
/>

<PlantCard
name="Chicory"
species="Cichorium intybus"
habitat="Fields, meadows, roadsides"
found=""
image="https://awkwardbotany.com/wp-content/uploads/2019/08/800px-cichoriumintybus-plant-kl.jpg"
/>

<PlantCard
name="Oxeye Daisy"
species="Leucanthemum vulgare"
habitat="Fields, meadows, roadsides"
found=""
image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg/800px-Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg"
/>

<PlantCard
name="Queen Anne's Lace"
species="Daucus carota"
habitat="Fields, meadows, roadsides"
found=""
image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/DaucusCarota.jpg/800px-DaucusCarota.jpg"
/>

<PlantCard
name="Wild Geranium"
species="Geranium maculatum"
habitat="Fields, meadows, woods"
found=""
image="https://media.sciencephoto.com/f0/31/63/85/f0316385-800px-wm.jpg"
/>

          </div>
        </div>
        <div className="plant-section">
          <h2>Aquatic Plants</h2>
          <p>Aquatic plants are species that grow and thrive in aquatic environments such as lakes, rivers, ponds, and wetlands. These plants have adapted to living partially or completely submerged in water and play essential roles in aquatic ecosystems. Aquatic plants help oxygenate water, provide habitats for aquatic animals, stabilize shorelines, and filter pollutants. They come in various forms, including floating plants, submerged plants, and emergent plants, and can include species such as water lilies, water hyacinths, and cattails.</p>
          <div className="plant-cont">
          <PlantCard
     name="Water Hyacinth"
     species="Eichhornia crassipes"
     habitat="Freshwater environments, such as ponds and lakes"
     found="Native to the Amazon Basin"
     image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Common_Water_hyacinth.jpg/800px-Common_Water_hyacinth.jpg"
   />

   <PlantCard
     name="Water Lettuce"
     species="Pistia stratiotes"
     habitat="Freshwater environments, such as ponds and lakes"
     found="Native to tropical and subtropical regions"
     image="https://media.sciencephoto.com/c0/10/39/96/c0103996-800px-wm.jpg"
   />

   <PlantCard
     name="Water Lily"
     species="Nymphaea"
     habitat="Freshwater environments, such as ponds and lakes"
     found="Native to tropical and temperate regions"
     image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/2016_Kwiat_grzybieni_bia%C5%82ych_2.jpg/800px-2016_Kwiat_grzybieni_bia%C5%82ych_2.jpg"
   />

   <PlantCard
     name="Cattail"
     species="Typha"
     habitat="Freshwater environments, such as ponds and marshes"
     found="Native to North America and Europe"
     image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Grote_lisdoddes_aan_het_water.jpg/800px-Grote_lisdoddes_aan_het_water.jpg"
   />

   <PlantCard
     name="Water Fern"
     species="Azolla"
     habitat="Freshwater environments, such as ponds and lakes"
     found="Native to tropical and subtropical regions"
     image="https://media.sciencephoto.com/b4/50/01/40/b4500140-800px-wm.jpg"
   />

   <PlantCard
     name="Water Chestnut"
     species="Trapa natans"
     habitat="Freshwater environments, such as ponds and lakes"
     found="Native to Europe and Asia"
     image="https://adkinvasives.com/data/images/gallery/Water%20chestnut_leaves.jpg"
   />

   <PlantCard
     name="Pondweed"
     species="Potamogeton"
     habitat="Freshwater environments, such as ponds and lakes"
     found="Native to North America and Europe"
     image="https://thumbs.dreamstime.com/b/curled-pondweed-potamogeton-crispus-aquatic-plant-nordic-lake-curled-pondweed-water-plant-125567228.jpg"
   />

   <PlantCard
     name="Bladderwort"
     species="Utricularia"
     habitat="Freshwater environments, such as ponds and lakes"
     found="Native to North America and Europe"
     image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Z6L57Oii4kMFs3Fg0V_cTft9neBPHrpn9buWHDZR3A&s"
   />

   <PlantCard
     name="Coontail"
     species="Ceratophyllum demersum"
     habitat="Freshwater environments, such as ponds and lakes"
     found="Native to North America and Europe"
     image="https://www.minnesotawildflowers.info/udata/r9ndp23q/pd3/ceratophyllum-demersum-080219-3.jpg"
   />

    <PlantCard
      name="Eelgrass"
      species="Zostera marina"
      habitat="Saltwater environments, such as estuaries and bays"
      found="Native to North America and Europe"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLO27KzWAr0VWaIRHAu7fJEQPh9S3DcbjTAqc1mzq9w&s"
    />

    <PlantCard
      name="Widgeon Grass"
      species="Ruppia maritima"
      habitat="Saltwater environments, such as estuaries and bays"
      found="Native to North America and Europe"
      image="https://assets.isu.pub/document-structure/230530172059-bc853480a46b13243f6cbfc9d5a95335/v1/be0945df247f5485273f56ad1a3af64c.jpeg"
    />

    <PlantCard
      name="Shoalweed"
      species="Halophila engelmannii"
      habitat="Saltwater environments, such as estuaries and bays"
      found="Native to the Gulf of Mexico"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIJrc8r7GGFBCrd5vbt61aOhy32-q4HeZPiM-biLVSg&s"
    />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Flora
