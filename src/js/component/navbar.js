import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark mb-3 border border-warning d-flex justify-content-center">
            <Link to="/">
                <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="Star Wars Logo" />
            </Link>
            <div className="ml-auto">
                <Link to="/demo">
                    <button className="btn btn-primary text-warning bg-dark border border-warning mx-2">Favorites</button>
                </Link>
            </div>
        </nav>
    );
};
