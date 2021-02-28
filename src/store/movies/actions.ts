import { action } from 'typesafe-actions';
import { HYDRATE } from "next-redux-wrapper";
import { ActionTypes as AT } from './actionTypes';
import * as Types from './types';

export const getPopularMovies = (payload: Types.TIApiGetMovies) => action(AT.GET_POPULAR_MOVIES, payload);
export const getPopularMoviesSuccess = (payload: Types.TGetMoviesSuccessPayload) => action(AT.GET_POPULAR_MOVIES_SUCCESS, payload);
export const getPopularMoviesError = (payload: Types.TMovieError) => action(AT.GET_POPULAR_MOVIES_ERROR, payload);

export const gidrateFromServer = (payload: any) => action(HYDRATE, payload);
