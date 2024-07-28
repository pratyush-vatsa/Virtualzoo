import React from 'react';
import './sound.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Sound = () => {

  const playSound = (soundSrc) => {
    const audio = new Audio(soundSrc);
    audio.play();
  }

  const buttonAnimation = (animation) => {
    const button = document.querySelector(`[data-sound="${animation}"]`);
    button.classList.add("pressed");
    setTimeout(() => {
      button.classList.remove("pressed");
    }, 100);
  }

  const handleButtonClick = (event) => {
    const soundSrc = event.currentTarget.getAttribute("data-sound");
    playSound(soundSrc);
    buttonAnimation(event.currentTarget.textContent);
  }

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const button = document.querySelector(`[data-sound="sounds/${key.toLowerCase()}.mp3"]`);
    if (button) {
      playSound(`sounds/${key.toLowerCase()}.mp3`);
      buttonAnimation(key);
    }
  }

  return (
    <div>
        <Header/>
    <div className="containeraa">
      <h1 id="title23">Sound</h1>
      <div className="drum-set">
        <button className="drum" data-sound="sounds/tom-1.mp3" onClick={handleButtonClick}>W</button>
        <button className="drum" data-sound="sounds/tom-2.mp3" onClick={handleButtonClick}>A</button>
        <button className="drum" data-sound="sounds/crash.mp3" onClick={handleButtonClick}>S</button>
        <button className="drum" data-sound="sounds/kick-bass.mp3" onClick={handleButtonClick}>D</button>
        <button className="drum" data-sound="sounds/snare.mp3" onClick={handleButtonClick}>J</button>
        <button className="drum" data-sound="sounds/tom-3.mp3" onClick={handleButtonClick}>K</button>
        <button className="drum" data-sound="sounds/tom-4.mp3" onClick={handleButtonClick}>L</button>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
}

export default Sound;
