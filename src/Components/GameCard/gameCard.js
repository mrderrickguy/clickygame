import React from "react";
import "./gameCard.css";

const gameCard = props => (
    <div className="herocard">
      <div className="pic-holder" gameid={props.id} onClick={() => props.randomDisplay(props.id)}>
          <img src={props.image} alt={props.name}/>
      </div>  
    </div>
);

export default gameCard;