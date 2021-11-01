import { useState, useEffect, useRef, useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../helpers/UserContext";

const useForm = (validate) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { finishedQuiz, setHaveAcc } = useContext(UserContext);

  const [errors, setErrors] = useState({});
  const [count, setCount] = useState(0);
  const focusName = useRef();

  const history = useHistory();

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const showPassword = () => setShow(!show);
  const showPassword2 = () => setShow2(!show2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(inputValue));
    setCount((currCount) => currCount + 1);
  };

  const handleLogOut = () => {
    setHaveAcc(false);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && count > 0) {
      setHaveAcc(true);
      history.push("/");
    }
  }, [errors, count, setHaveAcc, history]);

  useEffect(() => {
    focusName.current.focus();
    setHaveAcc(false);
  }, [setHaveAcc, finishedQuiz, history]);

  return {
    handleChange,
    inputValue,
    handleSubmit,
    errors,
    handleLogOut,
    focusName,
    show,
    show2,
    showPassword,
    showPassword2,
  };
};

export default useForm;
