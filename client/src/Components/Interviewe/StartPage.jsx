import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const StartPage = () => {
  const location = useLocation();
  const { languages } = location.state || { languages: [] };
  const [questions, setQuestions] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.post("http://localhost:5000/questions", { languages });
        const selectedQuestions = response.data.sort(() => 0.5 - Math.random()).slice(0, 5); // Select 2 random questions
        setQuestions(selectedQuestions);

        // Initialize the conversation with the first question
        setConversations([
          { text: "Let's start with your first question!", sender: "system" },
        ]);
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

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex === 0) {
      // Add the first question to the conversation
      setConversations((prevConversations) => [
        ...prevConversations,
        { text: questions[0].question, sender: "system" },
      ]);
    }
  }, [questions, currentQuestionIndex]);

  const handleUserInput = async () => {
    if (!userInput.trim()) return;

    const currentQuestion = questions[currentQuestionIndex];
    const userResponse = { text: userInput, sender: "user" };

    setConversations((prevConversations) => [
      ...prevConversations,
      userResponse,
    ]);
    setUserInput("");

    try {
      // Send the question and user answer to the backend for evaluation
      const response = await axios.post("http://localhost:5000/evaluate-answer", {
        question: currentQuestion.question,
        userAnswer: userInput,
      });

      const { feedback } = response.data;
      const systemResponse = {
        text: feedback.feedback,
        sender: "system",
      };

      // Append system feedback to the conversation history
      setConversations((prevConversations) => [
        ...prevConversations,
        systemResponse,
      ]);

      // Update the score
      setScore((prevScore) => prevScore + feedback.score);

      // Move to the next question or finish the quiz
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setConversations((prevConversations) => [
          ...prevConversations,
          { text: questions[currentQuestionIndex + 1].question, sender: "system" },
        ]);
      } else {
        setIsFinished(true);
        setConversations((prevConversations) => [
          ...prevConversations,
          { text: `Quiz Finished! Your score: ${score + feedback.score} / ${questions.length}`, sender: "system" },
        ]);
      }
    } catch (error) {
      console.error("Error evaluating answer:", error);
      setError("Failed to evaluate answer. Please try again.");
    }
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="conversation-container">
      <h2>Interview Chat</h2>
      <p>Score: {score}</p>
      <div className="conversation-box">
        {conversations.map((conv, index) => (
          <div key={index} className={`message ${conv.sender}`}>
            <p>{conv.text}</p>
          </div>
        ))}
      </div>

      {!isFinished && (
        <div className="input-area">
          <input
            type="text"
            placeholder="Type your answer here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleUserInput()}
          />
          <button onClick={handleUserInput} className="send-button">
            Send
          </button>
        </div>
      )}

      <style jsx>{`
        .conversation-container {
          padding: 20px;
        }
        .conversation-box {
          background: #f9f9f9;
          padding: 15px;
          margin-bottom: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          max-height: 400px;
          overflow-y: auto;
        }
        .message {
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 5px;
        }
        .message.system {
          background-color: #d1e7dd;
          align-self: flex-start;
        }
        .message.user {
          background-color: #e2e3e5;
          align-self: flex-end;
        }
        .input-area {
          display: flex;
        }
        input[type="text"] {
          flex: 1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-right: 10px;
        }
        .send-button {
          background-color: #3d52a0;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .send-button:hover {
          background-color: #2c3e75;
        }
      `}</style>
    </div>
  );
};

export default StartPage;
