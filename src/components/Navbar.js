import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark p-3" style={{backgroundColor: "#6C6C6C"}}>
            <Link className="navbar-brand" to="/">KeyLion</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse p-0 justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/games">games</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/software">software</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/giftcards">gift cards</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
