import React, { useState } from 'react';
import './QuizQuestion.css'; 

const QuizQuestion = ({ question, options, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      handleAnswer(selectedOption);
      setSelectedOption('');
    }
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{question}</h2>
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <div key={index} className="option-container">
            <input
              type="radio"
              id={`option${index}`}
              name="quizOption"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="radio-input"
            />
            <label htmlFor={`option${index}`} className="radio-label">
              {option}
            </label>
          </div>
        ))}
        <button type="submit" className="submit-button">
          Next
        </button>
      </form>
    </div>
  );
};

export default QuizQuestion;
