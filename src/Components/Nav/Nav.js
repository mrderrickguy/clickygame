import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar navbar-default">
            <div className="Game-title">Click A Hero</div>
            <div className="navbar-text topScore">Your Score: {props.score} <br/>
           Top Score: {props.topScore} </div>
    </nav>
);
export default Nav;



