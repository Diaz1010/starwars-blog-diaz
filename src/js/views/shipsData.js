import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const ShipsData = () => {
    const [item, setItem] = useState("");

    const singleFetchData = async () => {
        const res = await fetch(`https://www.swapi.tech/api/starships/${id}/`);
        const data = await res.json();
        setItem(data.result);
    };

    useEffect(() => {
        singleFetchData(); // Invocar la función singleFetchData
    }, []);

    const { id } = useParams();

    return (
        <div className="d-flex justify-content-center align-items-center mt-5 border-bottom border-warning">
            <Link to="/">
                <img id="logo2"  className="mx-3"   src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="Star Wars Logo" />
            </Link>
            <div className="mx-5 mb-5" >
                <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="..." />
            </div>
            <div className="d-flex flex-column border border-warning p-2">
                <h1 className="text-warning">{item.properties && item.properties.name}</h1> {/* Verificar si item.properties está definido antes de acceder a sus propiedades */}
                <p className="text-warning"><strong>Manufacturer : </strong>{item.properties && item.properties.manufacturer}</p>
                <p className="text-warning"><strong>Cost: </strong>{item.properties && item.properties.cost_in_credits}</p>
                <p className="text-warning"><strong>Length : </strong>{item.properties && item.properties.length}</p>
                <p className="text-warning"><strong>Consumables : </strong>{item.properties && item.properties.consumables}</p>
                
                
            </div>
           

        </div>
    );
};
