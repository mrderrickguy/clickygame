import React from "react";
import "./GameCard.css";

const GameCard = props => (
    <div className="herocard">
      <div className="pic-holder" Gameid={props.id} onClick={() => props.randomDisplay(props.id)}>
          <img src={props.pixCard} alt={props.name}/>
      </div>  
    </div>
);

export default GameCard;