import {lazy, useEffect, useState,  Suspense } from "react";
import { useParams, useRouteMatch, Route, NavLink, useLocation, useHistory } from "react-router-dom";
import {fetchMovieDetails} from '../../services/api';


const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast" */),);
const Reviews = lazy(() => import('../Reviews/Reviews' /* webpackChunkName: "Reviews" */),);

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const { path } = useRouteMatch();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        fetchMovieDetails(movieId).then(setMovie)
    }, [movieId])

    const onGoBack = () => {
        history.push(location?.state?.from ?? '/movies');
    }
    
    return (
        <>
            {movie && <>                
                <button type="button" onClick={onGoBack} >Go back</button>
                <div>
                 <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} width="300" />
                
                <div>
                    <h2>{movie.title} </h2>
                    <p><span >Release date: </span>{movie.release_date}</p>
                    <p><span >Popularity: </span>{movie.popularity}</p>
                    <p><span >Overview: </span>{movie.overview}</p>
                    <p><span >Genres: </span></p>
                    <ul >
                        {movie.genres.map(genre =>
                            <li key={genre.id} >{genre.name}</li>)}
                    </ul>  
                </div>
             </div>   
            </>
            }
            <div >
                <nav>
                    <NavLink
              
              to={`/movies/${movieId}/cast`}
              state={{
                from: location.from?.location,
              }}
            >
              Cast
            </NavLink>
            <NavLink
                  
              to={`/movies/${movieId}/reviews`}
              state={{
                from: location.from,
              }}
            >
              Reviews
            </NavLink>
                </nav>
            </div>

            <Suspense fallback={<h1>LOADING...</h1>}>
             <Route path={`${path}/cast`}>
                <Cast /> 
            </Route>
            <Route path={`${path}/reviews`}>
                <Reviews /> 
            </Route>   
            </Suspense>
        </>
    )
}