import { Reducer } from "redux";
import { HYDRATE } from 'next-redux-wrapper';
import { ActionType } from "typesafe-actions";
import { ActionTypes as AT } from './actionTypes';
import * as Actions from './actions';
import { IMoviesStore } from './types';

type TActionsMovies = typeof Actions;
type TMoviesActions = ActionType<TActionsMovies>;

const initialState: IMoviesStore = {
    popularMovies: {
        isLoading: false,
        page: 0,
        total_page: 0,
        total_results: 0,
        result: [],
    },
};

export const reducerMovies: Reducer<IMoviesStore, TMoviesActions> = (state = initialState, action) => {
    switch (action.type) {
    case HYDRATE: {
        return {
            ...state,
            ...action.payload.movies,
        };
    }
    case AT.GET_POPULAR_MOVIES: {
        const { type } = action.payload.payload;
        return { ...state, [type]: { ...state[type], isLoading: true } };
    }  
    case AT.GET_POPULAR_MOVIES_SUCCESS: {
        const { data, type } = action.payload;
        return {
            ...state,
            [type]: {
                ...state[type],
                ...data,
                isLoading: false,
            }, 
        };
    }    
    case AT.GET_POPULAR_MOVIES_ERROR: {
        return { ...state, popularMovies: { ...state.popularMovies, isLoading: false } };
    }
    default:
        return { ...state };
    }
};
