import React from "react"
import "../style/MainNavbar.css"
function MainNavbar() {
    return (
        <nav id="MainNavbar" className="navbar navbar-expand-md navbar-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#"> </a>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item">                                
                            <a className="nav-link" ></a>
                        </li>
                    </ul>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}
export default MainNavbar