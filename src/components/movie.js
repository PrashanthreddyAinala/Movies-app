import React from "react";
const imgUrl = "https://image.tmdb.org/t/p/w1280";

function Movie ({title, original_title , overview, poster_path, vote_average}) {
    
    return (
        <div className="col-6 col-md-4 col-lg-3">
            <div className="card mb-2" >
                <img className="card-img-top" src={imgUrl + poster_path} alt="poster" />
                <div className="card-body">
                    <p className="title">{title}</p>
                    <p className="vote">{vote_average}</p>
                </div>
                <div className="overview">
                    <h5>Overview</h5>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    )
}
export default Movie;