import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../helpers/UserContext";

function Home() {
    let { haveAcc, socialCredit } = useContext(UserContext);

    const history = useHistory();

    if (socialCredit < 100) history.push('/quiz');
    //else if (socialCredit >= 100 && !finishedQuiz) history.push('/quiz-results');
    else if (!haveAcc) history.push('/register');

    return (
        <div>
            <h1>Yo</h1>
        </div>
    )
}

export default Home;