const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getGroqChatCompletion(messages) {
  try {
    return await groq.chat.completions.create({
      messages: messages,
      model: 'llama3-8b-8192',
    });
  } catch (error) {
    console.error('Error fetching Groq chat completion:', error.message);
    throw error;
  }
}

async function generateGroqResponse() {
  try {
    const chatCompletion = await getGroqChatCompletion([
      {
        role: 'user',
        content: 'Explain the importance of fast language models',
      },
    ]);
    return chatCompletion.choices[0]?.message?.content || 'No content available';
  } catch (error) {
    console.error('Error generating Groq response:', error.message);
    throw error;
  }
}

const parseResponse = (response) => {
  if (!response || typeof response !== 'string') {
    throw new Error('Invalid response format');
  }

  try {
    const [resultPart, feedbackPart] = response.split('Feedback:').map(part => part.trim());
    
    // Ensure feedbackPart contains 'Score:'
    if (!feedbackPart.includes('Score:')) {
      throw new Error('Response does not contain expected "Score:" part');
    }

    const feedback = feedbackPart.split('Score:')[0].trim();
    const score = parseFloat(feedbackPart.split('Score:')[1].trim(), 10);
    
    if (isNaN(score)) {
      throw new Error('Score is not a valid number');
    }

    return {
      result: resultPart.trim(),
      feedback,
      score
    };
  } catch (error) {
    console.error('Error parsing response:', error.message);
    throw error;
  }
};

async function evaluateAnswerWithGroq(question, userAnswer) {
  try {
    const chatCompletion = await getGroqChatCompletion([
      {
        role: 'system',
        content: 'You are an expert interviewer evaluating answers for technical questions.',
      },
      {
        role: 'user',
        content: `Question: ${question}\nAnswer: ${userAnswer}`,
      },
      {
        role: 'user',
        content: 'Provide feedback and a score between 0 and 1 based on the correctness of the answer. Use this format: Feedback:<YourFeedback> \n Score:<Score>',
      },
    ]);

    const feedback = chatCompletion.choices[0]?.message?.content || 'No feedback available';
    return parseResponse(feedback);
  } catch (error) {
    console.error('Error evaluating answer with Groq:', error.message);
    throw error;
  }
}

module.exports = { generateGroqResponse, evaluateAnswerWithGroq };
