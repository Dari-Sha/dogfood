import React from "react";
import "./index.css";

export default ({text, like, pictures}) => {
    // console.log(like)
    return <div className="card">
        {text}
        {pictures}
        <span className="card__heart">
            {
                like
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            } 
        </span>
    </div>
}