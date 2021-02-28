import { Movies } from './Movies';

export const api = () => ({
    movies: new Movies(),
});

export default api();
