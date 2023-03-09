import {useEffect} from 'react';

import './App.css'
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=3dbbbfca';

const App = () => {

    const searchMovies = async (tittle) => {
        const response = await fetch(`${API_URL}&s=${tittle}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect (() => {
        searchMovies('Venom');

    }, []);
    return(
        <div className= "app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Venom"
                    onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                />
            </div>

        </div>

        
    );
}

export default App;