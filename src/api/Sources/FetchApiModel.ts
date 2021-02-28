class FetchApiModel implements FetachableInterface {
    protected routes = [];

    constructor(protected baseUrl: string) {
    }

    public setRoutes(route: string) :void {
        this.routes.push(route);
    }

    getData(): any {
    }

    postData(): any {
    }
}
