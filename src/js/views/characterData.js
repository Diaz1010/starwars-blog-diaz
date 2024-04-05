import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const CharacterData = () => {
    const [item, setItem] = useState("");

    const singleFetchData = async () => {
        const res = await fetch(`https://www.swapi.tech/api/people/${id}/`);
        const data = await res.json();
        setItem(data.result);
    };

    useEffect(() => {
        singleFetchData(); // Invocar la función singleFetchData
    }, []);

    const { id } = useParams();

    return (
        <div className="d-flex justify-content-center align-items-center mt-5 border-bottom border-warning">
            <div className="mx-5 mb-5" >
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="..." />
            </div>
            <div className="d-flex flex-column border border-warning p-2">
                <h1 className="text-warning">{item.properties && item.properties.name}</h1> {/* Verificar si item.properties está definido antes de acceder a sus propiedades */}
                <p className="text-warning"><strong>Height : </strong>{item.properties && item.properties.height}</p>
                <p className="text-warning"><strong>Mass : </strong>{item.properties && item.properties.mass}</p>
                <p className="text-warning"><strong>Hair color : </strong>{item.properties && item.properties.hair_color}</p>
                <p className="text-warning"><strong>Skin color : </strong>{item.properties && item.properties.skin_color}</p>
                <p className="text-warning"><strong>Gender : </strong>{item.properties && item.properties.gender}</p>
            </div>
           

        </div>
    );
};
