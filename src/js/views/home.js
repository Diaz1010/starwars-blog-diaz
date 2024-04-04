import React, { useContext } from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	useEffect(()=>{
		actions.loadSomeData()
		

	},[])

	const {store,actions}= useContext(Context)
	const characters = store.characters.map(char=> 
		<div key={char.uid}>
			
			<h1>{char.name}</h1>
		</div> 
	
	)


	return(
		
		<div className="text-center mt-5">
		<h1>Star Wars Blog</h1>
		{characters}

		</div>
	)
};
	

