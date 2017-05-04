import React, { Component } from 'react';
import Navbar from './NavBar';
import axios from 'axios';
import ''

class Explore extends Component {
	constructor(props) {
		super(props);

		this.state = { popularMovies: null }
		this.fetchPopular = this.fetchPopular.bind(this);
	}

	fetchPopular() {
		return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3d0f2b582ef98fc57bea7865717255e1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
			.then(function(response) {
				// console.log(response.data.results);
				return response.data.results
			});
	}

	componentWillMount() {
		this.fetchPopular()
			.then(function(data) {
				this.setState(function() {
					return {
						popularMovies: data
				}
			})
		}.bind(this));
	}


	render() {
		console.log(this.state);
		return ( 
			<div>
				<Navbar />
				<div className="container">

				<h1>Explore</h1>
			</div>
		)
	}
}

export default Explore;
