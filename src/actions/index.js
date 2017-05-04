import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_POPULAR = 'FETCH_POPULAR';

const API_KEY = "3d0f2b582ef98fc57bea7865717255e1"


export function fetchData(movieName) {
	const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`
	var request = axios.get(url)
	return {
		type: FETCH_DATA,
		payload: request
	}
}	

export function fetchPopular() {
		// https://api.themoviedb.org/3/discover/movie?api_key=3d0f2b582ef98fc57bea7865717255e1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
		const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
		var request = axios.get(url);

		return {
			type: FETCH_POPULAR,
			payload: request
		}
}