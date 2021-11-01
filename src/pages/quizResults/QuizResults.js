import React, { useContext } from "react";
import "./QuizResults.css";
import { UserContext } from "../../helpers/UserContext";
import Failed from "../../components/Failed";
import Success from "../../components/Success";

function QuizResults() {
    const { socialCredit } = useContext(UserContext);

    return (
        <div className="quiz-results">
            {
                socialCredit < 100 ? <Failed /> : <Success />
            }
        </div>
    )
}

export default QuizResults;