import React, {useEffect, useState} from "react";
import Movie from "./movie"

const APIUrl ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const searchUrl = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

function MoviesList() {
    const [movies, setMovies] = useState([])
    const [inputSearch, setInputSearch] = useState('')  
    
    useEffect(()=>{
        fetch(APIUrl)
          .then(response=> response.json())
          .then(data=>setMovies(data.results));
    }, [])
    
    function handleSubmit (e) {
        e.preventDefault();
        fetch(searchUrl + inputSearch )
            .then(response=> response.json())
            .then(data=>setMovies(data.results));
        setInputSearch("")
    }
    
    return (
        <>
            <div className="grid">
                <h1 className="header">MyMovies</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={inputSearch} placeholder="Find Movies" onChange={e=>setInputSearch(e.target.value)}/>
                </form>
            </div>
            <div className="container">
                <div className="row">
                    {movies.length > 0 && movies.map(movie=><Movie key={movie.id} {...movie}/>)}
                </div>
            </div>
        </>
    );
}

export default MoviesList;