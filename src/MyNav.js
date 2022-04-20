import React from "react";
import {NavLink} from "react-router-dom";
import './MyNav.css'

const MyNav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link me-5" to="watch">Watch</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ms-lg-5" to="digital-clock">Digital Clock</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default MyNav