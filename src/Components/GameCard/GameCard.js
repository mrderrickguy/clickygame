import React from "react";
import "./gameCard.css";

const GameCard = props => (
    <div className="herocard">
      <div className="img-container" gameid={props.id} onClick={() => props.randomDisplay(props.id)}>
          <img src={props.image} alt={props.name}/>
      </div>  
    </div>
);

export default GameCard;