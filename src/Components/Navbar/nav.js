import React from "react";
import "./nav.css";

const Nav = props => (
    <nav className="navbar navbar-default">
            <div className="Game-title">Click Click</div>
            <div className="navbar-text scores">Your Score: {props.score} <br/>
           Top Score: {props.topScore} </div>
    </nav>
);
export default Nav;



