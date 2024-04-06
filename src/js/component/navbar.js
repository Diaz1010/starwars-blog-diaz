import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-dark mb-3 border border-warning d-flex justify-content-center">
            <Link to="/">
                <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="Star Wars Logo" />
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle text-warning bg-dark border border-warning mx-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Favorites
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {store.favorites.length > 0 ? (
                            store.favorites.map((favorite, index) => (
                                <Link key={index} className="dropdown-item" to={`/favorite/${favorite}`}>{favorite}</Link>
                            ))
                        ) : (
                            <span className="dropdown-item text-muted">No favorites yet</span>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};