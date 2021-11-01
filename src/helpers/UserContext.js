import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const [haveAcc, setHaveAcc] = useLocalStorage("haveAccount", false);
  const [socialCredit, setSocialCredit] = useLocalStorage("socialCredit", 0);
  const [finishedQuiz, setFinishedQuiz] = useLocalStorage(
    "finishedQuiz",
    false
  );

  return (
    <UserContext.Provider
      value={{
        haveAcc,
        setHaveAcc,
        socialCredit,
        setSocialCredit,
        finishedQuiz,
        setFinishedQuiz,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
