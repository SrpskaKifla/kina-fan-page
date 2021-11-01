import React from "react";
import { Link } from "react-router-dom"

function Failed() {
    return (
        <div className="failed">
            <h1>Nisi uspeo!</h1>
            <h2>Nemas ono sto je potrebno da bi upao ovde</h2>
            <Link to="/quiz">
                <button>Pokusaj ponovo</button>
            </Link>
        </div>
    )
}

export default Failed
