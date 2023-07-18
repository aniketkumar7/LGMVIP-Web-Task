import React from "react";

export function Card({firstName,lastName,avatar}) {
    return (
        <div className="card">
        <img src={avatar} alt={firstName} />
        <div className="card-body">
            <h3>{firstName} {lastName}</h3>
        </div>
        </div>
    );
}

