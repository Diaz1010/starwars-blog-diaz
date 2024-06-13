import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const PlanetsData = () => {
    const [item, setItem] = useState("");

    const singleFetchData = async () => {
        const res = await fetch(`https://www.swapi.tech/api/planets/${id}/`);
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
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="..." />
            </div>
            <div className="d-flex flex-column border border-warning p-2">
                <h1 className="text-warning">{item.properties && item.properties.name}</h1> {/* Verificar si item.properties está definido antes de acceder a sus propiedades */}
                <p className="text-warning"><strong>Diameter : </strong>{item.properties && item.properties.diameter}</p>
                <p className="text-warning"><strong>Gravity : </strong>{item.properties && item.properties.gravity}</p>
                <p className="text-warning"><strong>Population : </strong>{item.properties && item.properties.population}</p>
                <p className="text-warning"><strong>Climate : </strong>{item.properties && item.properties.climate}</p>
                
                
            </div>
           

        </div>
    );
};
