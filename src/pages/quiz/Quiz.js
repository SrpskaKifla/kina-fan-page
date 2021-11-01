import React from "react";
import "./Quiz.css";
import useQuiz from "./useQuiz";
import { questions } from "../../helpers/Questions";

function Quiz() {
  const {
    doingQuiz,
    handleStart,
    currQuestion,
    setQuestionChosen,
    handleNextBtn,
    socialCredit,
  } = useQuiz();

  return (
    <div className="quiz-wrapper">
      <div className="quiz">
        {!doingQuiz || currQuestion > 4 ? (
          <>
            <h1>Zapocni da vidis da li si dostojan</h1>
            <h2>Ako imas social credit veci od 100 mozes da prodjes</h2>
            <button onClick={handleStart}>Zapocni!</button>
          </>
        ) : (
          <div className="questions">
            <div className="social-credit-score">{socialCredit}|SC</div>
            <div className="zhong-xina" datatooltip="中国是最好的"></div>

            <p>{questions[currQuestion].question}</p>
            <div className="answers">
              <button onClick={() => setQuestionChosen("option1")}>
                {questions[currQuestion].option1}
              </button>{" "}
              <br />
              <button onClick={() => setQuestionChosen("option2")}>
                {questions[currQuestion].option2}
              </button>
            </div>
            <button className="next-question-btn" onClick={handleNextBtn}>
              Sledece pitanje
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
