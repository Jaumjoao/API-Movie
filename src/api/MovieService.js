import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '413086c387cd87ea8bb37b253c58a898';

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies(){
        return axios(withBaseUrl("movie/popular"));
    }

    static getMoviesDetails(){
        return axios(withBaseUrl(`movie/${id}`));
    }

    static searchMovies(movie){
        return axios(withBaseUrl("search/movie"+`&query=${movie}`))
    }
}