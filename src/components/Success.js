import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../helpers/UserContext";

function Success() {
    const { setFinishedQuiz } = useContext(UserContext);
    setFinishedQuiz(true);

    return (
        <div className="succes">
            <h1>Svaka cast!</h1>
            <h2>Izgleda da si dostojan da udjes u Kina fan pejdz</h2>
            <Link to="/register">
                <button>Pridruzi se</button>
            </Link>
        </div>
    )
}

export default Success
