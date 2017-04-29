import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieDetail from './components/Details';
import axios from 'axios';
import { fetchData } from './api';

const API_KEY = "3d0f2b582ef98fc57bea7865717255e1"
const rootURL = "https://api.themoviedb.org/3/movie/550?api_key="


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {movie: null}
	}

	componentWillMount() {
		fetchData()
			.then(function(data) {
				// console.log(data);
				this.setState(function() {
					return {
						movie: data
					}
				})
			}.bind(this));
	}


  render() {
  	if(this.state.movie) {
			var imgUrl = 'http://image.tmdb.org/t/p/w1280//' + this.state.movie.backdrop_path
		}

		var divStyle = {
  		background: `url(${imgUrl})`,
  		backgroundRepeat: 'no-repeat',
  		backgroundSize: 'cover',
  		backgroundPosition: 'center'
		}

  	console.log(this.state.movie);
    return (
      <div style={divStyle} className="container">
        <SearchBar className="searchbar" />
        <MovieDetail movieData={this.state.movie} />
      </div>
    );
  }
}

export default App;
