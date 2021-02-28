import { combineReducers } from 'redux';
import { reducerMovies as movies } from 'src/store/movies/reducer';

export default combineReducers({
    movies,
});
