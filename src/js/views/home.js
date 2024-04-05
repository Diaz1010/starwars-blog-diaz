import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context); // Asegúrate de incluir 'actions' en la destructuración

    useEffect(() => {
        actions.loadSomeData();
        actions.loadSomePlanets();
    }, [actions]); // Añade 'actions' como dependencia del useEffect

    const Card = ({ uid, type, name }) => {
        const imgUrl = `https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`;
    
        return (
            <div key={uid} className="card col-2">
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    };
    
    // Generar tarjetas de personajes
    const characters = store.characters.map(char => (
        <Card key={char.uid} uid={char.uid} type="characters" name={char.name} />
    ));
    
    // Generar tarjetas de planetas
    const planets = store.planets.map(planet => (
        <Card key={planet.uid} uid={planet.uid} type="planets" name={planet.name} />
    ));


	return(
		
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className="d-flex overflow-scroll">
			{characters}
			</div>
			<div className="d-flex overflow-scroll">
			{planets}
			</div>
		</div>
	)
};
	

