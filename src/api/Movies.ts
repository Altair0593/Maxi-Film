import * as urls from "src/api/routs/urls.json";
import { api } from './requestFunc';

export class Movies {
    host: string;
    
    constructor() {
        this.host = urls.host_api;
    }

    getPopularMovies<R>(): Promise<R> {
        return api<R, any, any>(`${this.host}${urls.popularMovies}`, "GET");
    }
}
