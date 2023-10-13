import { useState } from "react";

import questions from "./question";

function Quizz() {
  const [result, setResult] = useState(0);

  const [QuestionIndex, setQuestionIndex] = useState(0);

  function handleAnswerClick(answer) {
    // Vérifie si la réponse sélectionnée est la réponse correcte

    if (questions[QuestionIndex].answer === answer) {
      setResult(result + 1);
    }

    if (QuestionIndex < questions.length - 1) {
      setQuestionIndex(QuestionIndex + 1);
    }
  }

  return (
    <>
      <div>
        <h1>Mon Quiz!</h1>

        <p>
          {result} / {questions.length} points
        </p>
      </div>

      {QuestionIndex < questions.length ? (
        <div>
          <h3>{questions[QuestionIndex].question}</h3>

          <ul>
            {questions[QuestionIndex].options.map((option, index) => (
              <button onClick={() => handleAnswerClick(option)} key={index}>
                {option}
              </button>
            ))}
          </ul>
        </div>
      ) : (
        <p>Quiz terminé!</p>
      )}
    </>
  );
}

export default Quizz;
