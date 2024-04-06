const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters:[],
			favorites:[],
			planets: [],
			ships:[]

		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: async () => {
				const res = await fetch("https://www.swapi.tech/api/people/")
				const data= await res.json()
				setStore({characters: data.results})	
			},
			loadSomePlanets: async () => {
				const res = await fetch("https://www.swapi.tech/api/planets/")
				const data= await res.json()
				setStore({planets: data.results})	
			},
			loadSomeShips: async () => {
				const res = await fetch("https://www.swapi.tech/api/starships/")
				const data= await res.json()
				setStore({ships: data.results})	
			},

			addToFavorites: (index) => {
				const store = getStore();
				const newItem = store.characters.find(item => item.uid === index);
			
				// Solo agregamos el 'uid' del nuevo item a la lista de favoritos
				setStore({ favorites: [...store.favorites, newItem.name] });
				console.log(store.favorites);
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
