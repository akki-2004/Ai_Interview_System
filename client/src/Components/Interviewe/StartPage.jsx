import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const StartPage = () => {
  const location = useLocation();
  const { languages } = location.state || { languages: [] };
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.post("http://localhost:5000/questions", { languages });
        const selectedQuestions = response.data.sort(() => 0.5 - Math.random()).slice(0, 5); // Select 5 random questions
        setQuestions(selectedQuestions);
        setCurrentQuestion(selectedQuestions[0]);
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

  const handleUserInput = async () => {
    if (!userInput.trim()) return;

    const currentQuestionText = currentQuestion.question;

    try {
      const response = await axios.post("http://localhost:5000/evaluate-answer", {
        question: currentQuestionText,
        userAnswer: userInput,
      });

      const { feedback } = response.data;

      setScore((prevScore) => prevScore + feedback.score);

      if (questionIndex < questions.length - 1) {
        setQuestionIndex((prevIndex) => prevIndex + 1);
        setCurrentQuestion(questions[questionIndex + 1]);
        setUserInput(""); // Clear the input field
      } else {
        setIsFinished(true);
      }
    } catch (error) {
      console.error("Error evaluating answer:", error);
      setError("Failed to evaluate answer. Please try again.");
    }
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="page-container">
      <header className="header">
        <h1>Interview Quiz</h1>
        <p className="score">Score: {score}</p>
      </header>
      <main className="main-content">
        {isFinished ? (
          <div className="result">
            <h2>Quiz Finished!</h2>
            <p>Your score: {score} / {questions.length}</p>
          </div>
        ) : (
          <div className="question-section">
            {currentQuestion && (
              <>
                <p className="question">{currentQuestion.question}</p>
                <div className="input-area">
                  <input
                    type="text"
                    placeholder="Type your answer here..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleUserInput()}
                  />
                  <button onClick={handleUserInput} className="send-button">
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </main>
      <footer className="footer">
        <p>Powered by React</p>
      </footer>

      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }
        .header {
          background-color: #4a90e2;
          color: white;
          padding: 20px;
          text-align: center;
        }
        .score {
          font-size: 18px;
          margin: 0;
        }
        .main-content {
          flex: 1;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .question-section {
          background: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          width: 100%;
          text-align: center;
        }
        .question {
          font-size: 20px;
          margin-bottom: 20px;
          font-weight: bold;
        }
        .input-area {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
        input[type="text"] {
          flex: 1;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 16px;
        }
        .send-button {
          background-color: #4a90e2;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .send-button:hover {
          background-color: #357abd;
        }
        .result {
          background: #f8f8f8;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .footer {
          background-color: #4a90e2;
          color: white;
          text-align: center;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default StartPage;
