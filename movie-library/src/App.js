import {useEffect} from 'react';

import './App.css'
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=3dbbbfca';

const movie1 = {
        "Title": "Venom: Let There Be Carnage",
        "Year": "2021",
        "imdbID": "tt7097896",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTc3ZTAwYTgtMmM4ZS00MDRiLWI2Y2EtYmRiZmE0YjkzMGY1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"

}

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
                    onClick={()=>{}}
                />
            </div>

            <div className="container">
                <div className= "movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}></img>
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                  

                </div>
            </div>

        </div>

        
    );
}

export default App;