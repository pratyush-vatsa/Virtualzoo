import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';

const AnimalQuiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: 'What is the largest mammal on Earth?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale'
    },
    {
      question: 'Which bird can fly backwards?',
      options: ['Eagle', 'Hummingbird', 'Ostrich', 'Penguin'],
      correctAnswer: 'Hummingbird'
    },
    {
      question: 'What is the only mammal capable of sustained flight?',
      options: ['Bat', 'Squirrel', 'Flying Fox', 'Pigeon'],
      correctAnswer: 'Bat'
    },
    {
      question: 'Which animal is known as the "King of the Jungle"?',
      options: ['Tiger', 'Lion', 'Leopard', 'Cheetah'],
      correctAnswer: 'Lion'
    },
    {
      question: 'What is the largest species of bear?',
      options: ['Polar Bear', 'Grizzly Bear', 'Brown Bear', 'Black Bear'],
      correctAnswer: 'Polar Bear'
    },
    {
      question: 'Which animal is the national symbol of the United States?',
      options: ['Eagle', 'Buffalo', 'Bear', 'Deer'],
      correctAnswer: 'Eagle'
    },
    {
      question: 'What is the fastest land animal?',
      options: ['Cheetah', 'Lion', 'Leopard', 'Tiger'],
      correctAnswer: 'Cheetah'
    },
    {
      question: 'Which animal has the longest neck?',
      options: ['Giraffe', 'Elephant', 'Zebra', 'Rhino'],
      correctAnswer: 'Giraffe'
    },
    {
      question: 'What is the only continent without reptiles?',
      options: ['Europe', 'Antarctica', 'Africa', 'Australia'],
      correctAnswer: 'Antarctica'
    },
    {
      question: 'Which species of snake is the largest in the world by weight?',
      options: ['Anaconda', 'Python', 'Cobra', 'Viper'],
      correctAnswer: 'Anaconda'
    }
  ];


  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const updatedAnswers = [...answers];
    updatedAnswers.push({
      question: questions[currentQuestion].question,
      answer: answer,
      correctAnswer: questions[currentQuestion].correctAnswer
    });
    setAnswers(updatedAnswers);

    if (currentQuestion === questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  return (
    <div className="quiz">
      {quizCompleted ? (
        <div className="quiz-results">
          <h2 className="result-title">Quiz Completed!</h2>
          <p className="score-text">Your score: {score} out of {questions.length}</p>
          <div className="answers">
            {answers.map((answer, index) => (
              <div key={index} className="answer">
                <p><strong>Question:</strong> {answer.question}</p>
                <p><strong>Your Answer:</strong> {answer.answer}</p>
                <p><strong>Correct Answer:</strong> {answer.correctAnswer}</p>
              </div>
            ))}
          </div>
          <button className="restart-button" onClick={resetQuiz} style={{ backgroundColor: '#2E8B57', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Restart Quiz</button>
        </div>
      ) : (
        <QuizQuestion
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default AnimalQuiz;