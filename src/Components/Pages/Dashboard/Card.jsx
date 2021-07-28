import React from "react";

function Card({ title, count, state, color, icon }) {
  return (
    <div className="card">
      <div className="header_card">
        <h3 className="title_card"> {title} </h3>
        <i className={`icon_card ${icon} icon`} style={{color:`rgb(${color})` , background:`rgb(${color} / 20%)`}}></i>
      </div>
      <div className="count_card">{count}</div>
      <div className="state_card">{state}</div>
    </div>
  );
}

export default Card;
