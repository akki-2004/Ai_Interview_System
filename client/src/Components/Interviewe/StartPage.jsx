import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const StartPage = () => {
  const location = useLocation();
  const { languages } = location.state || { languages: [] };
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.post("http://localhost:5000/questions", { languages });
        const selectedQuestions = response.data.sort(() => 0.5 - Math.random()).slice(0, 5); // Select 5 random questions
        setQuestions(selectedQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setError("Failed to load questions. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (languages.length > 0) {
      fetchQuestions();
    }
  }, [languages]);

  const handleAnswerChange = (e) => {
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: e.target.value });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered, calculate score
      calculateScore();
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] && userAnswers[index].trim().toLowerCase() === question.answer.trim().toLowerCase()) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="questions-container">
      <h2>Interview Questions</h2>
      {currentQuestion ? (
        <div className="question-card">
          <h3>Question {currentQuestionIndex + 1}: {currentQuestion.question}</h3>
          <p><strong>Language:</strong> {currentQuestion.programmingLanguage}</p>
          <input
            type="text"
            placeholder="Your answer"
            onChange={handleAnswerChange}
            value={userAnswers[currentQuestionIndex] || ''}
          />
          <button onClick={handleNext} className="next-button">
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      ) : (
        <p>No questions available for the selected languages.</p>
      )}

      {score !== null && <p>Your score: {score} / {questions.length}</p>}

      <style jsx>{`
        .questions-container {
          padding: 20px;
        }
        .question-card {
          background: #f9f9f9;
          padding: 15px;
          margin-bottom: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #3d52a0;
        }
        h3 {
          color: #333;
        }
        .next-button {
          background-color: #3d52a0;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }
        .next-button:hover {
          background-color: #2c3e75;
        }
      `}</style>
    </div>
  );
};

export default StartPage;
