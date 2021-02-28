import * as next from "next";
import { Dispatch } from 'redux';
import { CallEffectDescriptor } from "redux-saga/effects";

export interface IApiRequest <P, R = null>{
    reject: CallEffectDescriptor<PromiseRejectedResult>;
    resolve: CallEffectDescriptor<R>;
    payload: P;
    ctx?: next.NextPageContext;
    dispatch?: Dispatch;
}

export interface IResponseData<R> {
    page: number;
    total_results: number;
    total_page: number;
    result?: R;
}

export type TMoviesTypes = "popularMovies";
