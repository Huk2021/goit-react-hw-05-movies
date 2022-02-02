import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from 'components/AppBar/AppBar';


const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage'));

export default function App() {
    return (
        <Container>
          <AppBar />
           <Suspense fallback={<h1>LOADING...</h1>}>
             <Switch>
               <Route path="/" exact>
                  <HomePage />
               </Route>
                    
               <Route path="/movies" exact>
                  <MoviesPage />
               </Route>
                    
            </Switch>
           </Suspense>
        </Container>
    );
}