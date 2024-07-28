import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';

const PlantQuiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: 'What is the process by which green plants use sunlight to synthesize foods from carbon dioxide and water?',
      options: ['Photosynthesis', 'Respiration', 'Transpiration', 'Germination'],
      correctAnswer: 'Photosynthesis'
    },
    {
      question: 'Which of the following is not a type of plant tissue?',
      options: ['Epidermis', 'Xylem', 'Phloem', 'Nephron'],
      correctAnswer: 'Nephron'
    },
    {
      question: 'Which plant is known as the "King of Fruits"?',
      options: ['Mango', 'Banana', 'Apple', 'Orange'],
      correctAnswer: 'Mango'
    },
    {
      question: 'What is the study of fungi called?',
      options: ['Botany', 'Mycology', 'Entomology', 'Ornithology'],
      correctAnswer: 'Mycology'
    },
    {
      question: 'Which plant is known for its ability to repel mosquitoes?',
      options: ['Lavender', 'Citronella', 'Basil', 'Peppermint'],
      correctAnswer: 'Citronella'
    },
    {
      question: 'What is the term for the scientific study of plants?',
      options: ['Zoology', 'Botany', 'Geology', 'Anthropology'],
      correctAnswer: 'Botany'
    },
    {
      question: 'Which of the following is not a carnivorous plant?',
      options: ['Venus Flytrap', 'Pitcher Plant', 'Sunflower', 'Sundew'],
      correctAnswer: 'Sunflower'
    },
    {
      question: 'What is the name of the process by which plants lose water vapor through small openings in their leaves?',
      options: ['Transpiration', 'Evaporation', 'Condensation', 'Respiration'],
      correctAnswer: 'Transpiration'
    },
    {
      question: 'What is the national flower of Japan?',
      options: ['Rose', 'Lotus', 'Cherry Blossom', 'Sunflower'],
      correctAnswer: 'Cherry Blossom'
    },
    {
      question: 'Which of the following is not a type of grass?',
      options: ['Bermuda Grass', 'Zoysia Grass', 'St. Augustine Grass', 'Lavender'],
      correctAnswer: 'Lavender'
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

export default PlantQuiz;