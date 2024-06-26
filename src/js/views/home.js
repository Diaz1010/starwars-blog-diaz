import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, actions } = useContext(Context); // Asegúrate de incluir 'actions' en la destructuración

    useEffect(() => {
        actions.loadSomeData();
        actions.loadSomePlanets();
        actions.loadSomeShips()
    }, []); // Añade 'actions' como dependencia del useEffect

    const Card = ({ uid, type, name, image }) => {
        const imgUrl = `https://starwars-visualguide.com/assets/img/${image}/${uid}.jpg`;
    
        return (
            <div key={uid} className="card col-2 bg-dark">
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title border-bottom border-warning">{name}</h5>
                    <p className="card-text"></p>
                    <Link to={`/${type}/${uid}`}  className="btn btn-primary mx-2">Learn more</Link>
                    <button onClick={() => actions.addToFavorites(uid)} className="btn btn-primary bg-danger border border-danger">Add favorite</button>


                </div>
            </div>
        );
    };
    
    // Generar tarjetas de personajes
    const characters = store.characters.map(char => (
        <Card key={char.uid} uid={char.uid} type="character" image="characters" name={char.name} />
    ));
    
    // Generar tarjetas de planetas
    const planets = store.planets.map(planet => (
        <Card key={planet.uid} uid={planet.uid} type="planets" image="planets" name={planet.name} />
    ));

    const ships = store.ships.map(ship => (
        <Card key={ship.uid} uid={ship.uid} type="starships" image="starships" name={ship.name} />
    ));


	return(
		
		<div className="text-center mt-5 text-warning">
			<h1>Characters</h1>
			<div className="d-flex overflow-scroll">
			{characters}
			</div>
            <h1>Planets</h1>
			<div className="d-flex overflow-scroll">
			{planets}
			</div>
            <h1>Planets</h1>
			<div className="d-flex overflow-scroll">
			{ships}
			</div>
		</div>
	)
};
	

