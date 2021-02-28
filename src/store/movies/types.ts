import { IApiRequest, IResponseData, TMoviesTypes } from '../commonTypes';

export type TMovie = {
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: Array<string>;
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
};

export type TMovieMovieResponse = IResponseData<Array<TMovie>>;

export interface TMovieStateItem extends TMovieMovieResponse {
    isLoading: boolean;
}

export interface IMoviesStore {
    popularMovies: TMovieStateItem,
}

export type TFilters = {
    language?: string;
    query: string;
    page: number;
    include_adult?: boolean;
    region?: string;
    year?: number;
    primary_release_year?: number;
};

export interface IGetMoviesPayload {
    type: TMoviesTypes;
}

export type TIApiGetMovies = IApiRequest<IGetMoviesPayload>;
export type TGetMoviesSuccessPayload = {
    type: TMoviesTypes;
    data: TMovieMovieResponse;
};
export type TMovieError = { type: TMoviesTypes };
