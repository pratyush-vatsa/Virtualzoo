import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Motive from './components/Motive/Motive';
import Meaning from './components/Meaning/Meaning';
import Animals from './components/Animal/Animals';
import Plants from './components/Plants/Plants';
import Fauna from './components/Fauna/Fauna';
import Flora from './components/Flora/Flora';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import QuizPage from './components/Quiz/QuizPage';
import About from './components/About/About';

import PandaPage from './components/Panda/Panda';
import EaglePage from './components/Eagle/Eagle';
import LionPage from './components/Lion/Lion';
import GorillaPage from './components/Gorilla/Gorilla';
import CheetahPage from './components/Cheetah/Cheetah';


function App() {
  return (
   
      <div className="App">
        
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Fauna' element={<Fauna/>} />
        <Route path='/Flora' element={<Flora/>} />
        <Route path='/Donation' element={<Donation/>} />
        <Route path='/Quiz' element={<QuizPage/>} />
        <Route path='/AboutUs' element={<About/>} />
        <Route path='/Panda' element={<PandaPage/>} />
        <Route path='/Eagle' element={<EaglePage/>} />

        <Route path='/Lion' element={<LionPage/>} />
        <Route path='/Gorilla' element={<GorillaPage/>} />
        <Route path='/Cheetah' element={<CheetahPage/>} />
        </Routes>
        
      </div>
  );
}

export default App;
