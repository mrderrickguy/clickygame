import React from "react";
import "./wrapper.css";


const   wrapper = props => 
    <div className="row">
        <div className="Wrapper">{props.children}</div>
    </div>


export default wrapper;