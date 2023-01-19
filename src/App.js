import './App.css';
import Header from './components/Header';
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/Watchlist';
import axios from 'axios';
import { useEffect, useState }  from 'react';

function App() {
  const [list, setList] = useState([]);
  const [movielist, setMovielist] = useState([]);
  const [page, setPage] = useState(1);
  const addMovie = (movie) => setList([...list, movie]);
  const removeMovie=(movie) => {
    const newState = list.filter((mov) => {
      return mov !== movie;
    });
    console.log(newState);
    setList(newState);
  };

  const getData = () => {
    axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      console.log(res.data.results);
      setMovielist(res.data.results);
    });
  };
  
  useEffect(() => {
    getData();
  }, [page]);

  
  return (
    <div className="App">
      <Header/>
      <main>
        <MovieScreen
        addMovie={addMovie}
        movielist ={movielist}
        page={page}
        setPage={setPage}
        list={list}
        
        />
        <Watchlist list={list} removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
