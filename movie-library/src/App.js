import {useEffect, useState} from 'react';

import './App.css'
import MovieCard from './MovieCard';
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
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (tittle) => {
        const response = await fetch(`${API_URL}&s=${tittle}`);
        const data = await response.json();

        setMovies(data.Search);
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
                    value= {searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>
                {
                    movies?.length > 0
                    ? ( 
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))}
                        </div>
                    ) : (
                        <div className= "empty">
                            <h2>No movies found</h2>
                        </div>
                        )

                    }
           

        </div>

        
    );
}

export default App;