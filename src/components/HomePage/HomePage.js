import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import MovieList from '../MoviesList/MoviesList';


export default function HomePage() {
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(res => {
      setMovieList(res.results);
    });
  }, []);

    return (
      <>
     {movieList && <MovieList list={movieList} />}
      </>  
    );
}