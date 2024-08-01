import React from "react";
import "./Card.css";
export const Card=(
    {
        imgSrc,
        imgAlt,
        title,
        description,
        buttonText,
        link
    }
)=>{

  return (
  <div className="card-container">
   <img src={imgSrc}alt={imgAlt} className="card-image"></img>
   <h2 className="card-title">{title}</h2>
   <p className="card-desc">{description} </p>
   <a className="card-btn" href={link}>{buttonText}</a>
  </div>
  )
};