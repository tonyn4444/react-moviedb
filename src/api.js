import axios from 'axios';

const API_KEY = "3d0f2b582ef98fc57bea7865717255e1"
const rootURL = "https://api.themoviedb.org/3/movie/550?api_key="

export function fetchData() {
	var url = rootURL + API_KEY

	return axios.get(url)
		.then(function(response) {
			return response.data
		});
}
