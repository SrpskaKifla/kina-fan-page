import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
    return (
        <div className="page-not-found-wrapper">
            <div className="page-not-found">
                <h1>404</h1>
                <h2>Page not found</h2>
                <Link to="/">
                    <button>Vrni se</button>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound
