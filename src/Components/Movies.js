import React from 'react';
const ImageAPI ="https://image.tmdb.org/t/p/w1280";
const setColor = (vote) =>{
    if(vote >= 8 ){
        return "green";
    } else if(vote >= 6){
        return "orange";
    } else return "red";
    
}
const Movies = ({title, poster_path, overview, vote_average}) =>(
    <div className = 'movie'>
        <img src = {ImageAPI + poster_path} alt = {title}/>
        <div className = "movie-info">
            <h3>{title}</h3>
            <span className = {`tag ${setColor(vote_average)}`}> {vote_average}</span>
        </div>
        <div className='movie-over'>
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div> 
);
export default Movies;