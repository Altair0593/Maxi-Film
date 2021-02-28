class MoviesModel {
    protected fetchApi: FetachableInterface;

    constructor(fetchApi: FetachableInterface) {
        this.fetchApi = fetchApi;
    }

    public static getMoviesModelWithFetchApi(): MoviesModel {
        return new MoviesModel(new FetchApiModel());
    }

    public getMoviesForHome()
    {
        const args = [];
        return this.fetchApi.getData({parent_id});
    }
}
