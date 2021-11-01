import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { questions } from "../../helpers/Questions";
import { UserContext } from "../../helpers/UserContext";

function useQuiz() {
    const [doingQuiz, setDoingQuiz] = useState(false);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [questionChosen, setQuestionChosen] = useState('');

    const { socialCredit, setSocialCredit } = useContext(UserContext);
    const history = useHistory();

    const handleStart = () => setDoingQuiz(true);
    
    useEffect(() => {
        setSocialCredit(0);
    }, [setSocialCredit])

    const handleNextBtn = () => {
        if (questionChosen === questions[currQuestion].answer) setSocialCredit(prevSocialCredit => prevSocialCredit + 20);

        else setSocialCredit(prevSocialCredit => prevSocialCredit - 20);

        setCurrQuestion(prevCurrQuestion => prevCurrQuestion + 1);
    }

    useEffect(() => {
        if (currQuestion >= 5) {
            setCurrQuestion(prevCurrQuestion => prevCurrQuestion - 1);
            history.push('/quiz-results');
        }
        console.log(currQuestion);
    }, [currQuestion, history, socialCredit]);

    return { doingQuiz, handleStart, currQuestion, setQuestionChosen, handleNextBtn, socialCredit }
}

export default useQuiz;