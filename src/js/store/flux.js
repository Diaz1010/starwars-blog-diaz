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
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            loadSomeData: async () => {
                const res = await fetch("https://www.swapi.tech/api/people/");
                const data = await res.json();
                setStore({ characters: data.results });
            },
            loadSomePlanets: async () => {
                const res = await fetch("https://www.swapi.tech/api/planets/");
                const data = await res.json();
                setStore({ planets: data.results });
            },
            loadSomeShips: async () => {
                const res = await fetch("https://www.swapi.tech/api/starships/");
                const data = await res.json();
                setStore({ ships: data.results });
            },

            addToFavorites: (index) => {
                const store = getStore();
                const newItem = store.characters.find(item => item.uid === index);
                if (newItem) {
                    setStore({ favorites: [...store.favorites, newItem.name] });
                }
            },

            removeFromFavorites: (favoriteName) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(favorite => favorite !== favoriteName) });
            },

            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;
