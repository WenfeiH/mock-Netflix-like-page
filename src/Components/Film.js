import React from "react";
const Film = props => {
  return (
    <div className="film">
      <img src={props.img} alt={props.title} />
      <p>{props.title}</p>
      <button onClick={props.onClick}>{props.button}</button>
    </div>
  );
};
export default Film;
