import React from "react"
import logo from "../images/react-logo.png"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <div className="nav-left">
                <img src={logo} alt="react logo" className="nav-logo"/>
                <h3>ReactFacts</h3>
            </div>
            <div className="nav-right">
                <h4>React Course - Project 1</h4>
            </div>
        </nav>
    )
}