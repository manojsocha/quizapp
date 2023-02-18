import React, { useState } from 'react';

function QuizApp() {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Madrid', 'Rome'],
      answer: 'Paris'
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Kilimanjaro', 'Matterhorn'],
      answer: 'Mount Everest'
    },
    {
      question: 'What is the currency of Japan?',
      options: ['Yen', 'Dollar', 'Euro', 'Pound'],
      answer: 'Yen'
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (answer) => {
    if (answer === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handleResetButtonClick = () => {
    setShowScore(false);
    setScore(0);
    setCurrentIndex(0);
  };

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={handleResetButtonClick}>Reset</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentIndex + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentIndex].question}
          </div>
          <div className="answer-section">
            {questions[currentIndex].options.map((option) => (
              <button key={option} onClick={() => handleAnswerButtonClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
