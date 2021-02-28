import { call, takeEvery } from "@redux-saga/core/effects";
import { put } from "redux-saga/effects";
import api from 'src/api';
import * as actions from './actions';
import { ActionTypes as AT } from './actionTypes';

export function* getPopularMovies({ 
    payload: { payload: { type } }, 
}: ReturnType<typeof actions.getPopularMovies>) {
    try {
        const data = yield call([api.movies, api.movies.getPopularMovies]);
        yield put(actions.getPopularMoviesSuccess({ type, data }));
    } catch (e) {
        yield put(actions.getPopularMoviesError({ type }));
    }
}

export default function* actionWatcher() {
    yield takeEvery(AT.GET_POPULAR_MOVIES, getPopularMovies);
}
