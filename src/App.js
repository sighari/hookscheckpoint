import React, {useState, useEffect} from 'react';
import './App.css';
import movies from './movieData'
import MovieList from './MovieList';
import AddMovie from './AddMovie'
import Filter from './Filter';

function App() {
  const [movieList, setMovieList] = useState(movies);
  const [searchInput, setSearchInput] = useState({searchInput:'',searchRate:0});
  const getInputData = (data) => {
    setMovieList([...movieList,data]);
  };
  const getSearchData = (searchData) => {
    setSearchInput(searchData)
  }

  
  return (
    <div className="App">
      <header>
        <Filter getSearchData={getSearchData} />
        <AddMovie getInputData={getInputData} />
        <MovieList searchInput={searchInput} movies={movieList}/>
      </header>
    </div>
  );
}

export default App;
