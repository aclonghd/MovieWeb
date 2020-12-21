import React, {useEffect, useState} from 'react';
import Movies from './Components/Movies';
const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3bbbf163001f7713f89506146bad9dc3&page=1";

const SearchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=3bbbf163001f7713f89506146bad9dc3&query=";
function App(){
  const [movies, setMovies ] = useState([]);
  const [searchTemp, setSearchTemp] = useState("");
  useEffect(() =>{
      getMovie(API);
  }, []);
  const getMovie = (FAPI) => {
      fetch(FAPI).then((res) => res.json()).then((data) => {
      console.log(data);
      setMovies(data.results);
      });
  };
  const handleOnSubmit = (e) =>{
    e.preventDefault();
    if(searchTemp){
      getMovie(SearchAPI + searchTemp);
      setSearchTemp("");
      
    }
  };
  const handleOnChange = (e) =>{
    setSearchTemp(e.target.value);
  };
   
  return (
    <>
    <header>
      <button className = "login">Login</button>
      <form onSubmit = {handleOnSubmit}>
      <input className = "search"
        type ="search"
        placeholder = "Tim kiem..."
        value = {searchTemp}
        onChange = {handleOnChange}
      />
      <button className ="sign-up"> Sign up</button>
      </form>

    </header>
    <div className= "movie-container">
      {movies.length > 0 && movies.map((movie) =>
      <Movies key = {movie.id} {...movie}/>
      )}
    </div>
    </>
  );
}
export default App;


