import React, { useState } from 'react';
import './Quiz.css'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AnimalQuiz from './AnimalQuiz';
import PlantQuiz from './PlantQuiz';
import EnvironmentQuiz from './EnviromentQuiz';

const QuizPage = () => {
  const [quizType, setQuizType] = useState(null); 

  return (
    <div>
      <Header />
      <div className="p">
        <p>
          The quiz section on our website about the zoo provides an engaging and educational experience for visitors to test their knowledge of wildlife. Designed to be both entertaining and informative, our quiz section offers a variety of questions covering different aspects of fauna, flora, conservation efforts, and more. Users can explore fascinating facts about animals, plants, and ecosystems while challenging themselves with multiple-choice questions, true/false statements, and other interactive formats. With each quiz session, users not only have the opportunity to learn new information but also to reinforce their understanding of the natural world. Whether you're a casual visitor or a dedicated nature enthusiast, our quiz section offers a fun way to delve deeper into the diverse wonders of the animal kingdom and the importance of wildlife conservation.
        </p>
      </div>
      <div className="quiz-container">
        <h1 className="quiz-title">Choose a Quiz Category:</h1>
        <div className="quiz-options">
          
          <div className="quiz-option">
            <button className="quiz-option-button" onClick={() => setQuizType('animal')}>
              <img src="https://getwallpapers.com/wallpaper/full/1/b/b/151906.jpg" alt="Animal Quiz" />
              Animal Quiz
            </button>
          </div>
          
          <div className="quiz-option">
            <button className="quiz-option-button" onClick={() => setQuizType('plant')}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9yx_VMgoeymMQBB4W17PqndrRWvPz2MABfuNI61Rdw&s" alt="Plant Quiz" />
              Plant Quiz
            </button>
          </div>
          
          <div className="quiz-option">
            <button className="quiz-option-button" onClick={() => setQuizType('environment')}>
              <img src="https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_640.jpg" alt="Environment Quiz" />
              Environment Quiz
            </button>
          </div>
        </div>
        
        {quizType === 'animal' && <AnimalQuiz />}
        {quizType === 'plant' && <PlantQuiz />}
        {quizType === 'environment' && <EnvironmentQuiz />}
      </div>
      <Footer />
    </div>
  );
}

export default QuizPage;
