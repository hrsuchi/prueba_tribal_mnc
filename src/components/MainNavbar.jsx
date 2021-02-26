import React from "react"
import Routes from "../Routes"
import "../style/MainNavbar.css"
import {
    Link
} from "react-router-dom";
import { HashLink as Alink } from 'react-router-hash-link';
function MainNavbar() {
    return (
        <nav id="MainNavbar" className="navbar navbar-expand-md navbar-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#"> </a>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {
                            Routes.map((value, index)=>
                                value.component !== "" ? (
                                    <li className="nav-item">                                
                                        <Link className="nav-link" to={value.path}>{value.name}</Link>
                                    </li>                                
                                ):
                                (
                                    <li className="nav-item">                                
                                        <Alink className="nav-link" to={value.path}>{value.name}</Alink>
                                    </li>                                
                                )
                            )
                        }    
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