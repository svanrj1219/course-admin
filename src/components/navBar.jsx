import React from "react";
import "../style/navbar.scss"

function NavBar(props){
    return <div className="main">
        <span className="title">{props.children}</span>
    </div>
}

export default NavBar;