'use client';
import React, { useState } from 'react';

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null); // Reset selected answer for the next question
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      {showResult ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-green-600">
            You scored {score} out of {questions.length}
          </h2>
          <button 
            onClick={restartQuiz} 
            className="mt-4 px-6 py-3 bg-gray-500 hover:bg-gray-700 text-white rounded-md shadow-md focus:outline-none transition duration-200"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-4 text-gray-700">
            Question {currentQuestion + 1} / {questions.length}
          </div>
          <h4 className="text-xl font-semibold mb-4">{questions[currentQuestion].questionText}</h4>

          <ul className="list-none space-y-3">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <li key={index}>
                <button 
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  className={`
                    block w-full p-4 rounded-md text-left 
                    transition duration-200 
                    focus:outline-none 
                    ${selectedAnswer === answerOption.answerText 
                      ? answerOption.isCorrect 
                        ? 'bg-green-200 text-green-700' 
                        : 'bg-red-200 text-red-700' 
                      : 'bg-gray-100 hover:bg-gray-200'
                    }
                  `}
                >
                  {answerOption.answerText}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;