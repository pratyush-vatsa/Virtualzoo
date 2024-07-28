import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';

const EnvironmentQuiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: 'What is the primary greenhouse gas responsible for global warming?',
      options: ['Carbon Dioxide (CO2)', 'Methane (CH4)', 'Nitrous Oxide (N2O)', 'Ozone (O3)'],
      correctAnswer: 'Carbon Dioxide (CO2)'
    },
    {
      question: 'Which of the following is a renewable source of energy?',
      options: ['Coal', 'Natural Gas', 'Solar Power', 'Nuclear Energy'],
      correctAnswer: 'Solar Power'
    },
    {
      question: 'What is the term for the variety of life on Earth, including ecosystems, species, and genetic diversity?',
      options: ['Biodiversity', 'Ecology', 'Sustainability', 'Conservation'],
      correctAnswer: 'Biodiversity'
    },
    {
      question: 'Which of the following is a major cause of deforestation?',
      options: ['Urbanization', 'Mining', 'Logging', 'Fishing'],
      correctAnswer: 'Logging'
    },
    {
      question: 'What is the process by which fertile land becomes desert, typically as a result of drought, deforestation, or inappropriate agriculture?',
      options: ['Desertification', 'Erosion', 'Salinization', 'Deforestation'],
      correctAnswer: 'Desertification'
    },
    {
      question: 'What is the term for the excessive use of fertilizers, which leads to the pollution of water bodies?',
      options: ['Eutrophication', 'Pollination', 'Evapotranspiration', 'Condensation'],
      correctAnswer: 'Eutrophication'
    },
    {
      question: 'Which international agreement aims to limit global temperature rise and mitigate climate change?',
      options: ['Paris Agreement', 'Kyoto Protocol', 'Montreal Protocol', 'Copenhagen Accord'],
      correctAnswer: 'Paris Agreement'
    },
    {
      question: 'What is the term for the gradual increase in the Earth’s average temperature?',
      options: ['Global Warming', 'Global Cooling', 'Greenhouse Effect', 'El Niño'],
      correctAnswer: 'Global Warming'
    },
    {
      question: 'Which of the following is an example of a non-renewable resource?',
      options: ['Wind Energy', 'Solar Energy', 'Coal', 'Hydroelectric Power'],
      correctAnswer: 'Coal'
    },
    {
      question: 'What is the name of the process by which pollutants are removed from the atmosphere?',
      options: ['Deposition', 'Absorption', 'Desorption', 'Filtration'],
      correctAnswer: 'Deposition'
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

export default EnvironmentQuiz;