import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import './App.css';
import SearchBar from './components/SearchBar';
import MovieDetail from './components/Details';
import { fetchData } from './actions';

// const rootURL = "https://api.themoviedb.org/3/movie/550?api_key="
const rootURL = `https://api.themoviedb.org/3/search/movie?api_key=3d0f2b582ef98fc57bea7865717255e1&language=en-US&query=inception&page=1&include_adult=false`
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { initialMovie: null }
	}

	fetchFirstMovie() {

			return axios.get(rootURL)
				.then(function(response) {
					return response.data.results[0]
			});
		}	

	componentWillMount() {
		this.fetchFirstMovie()
			.then(function(data) {
				// console.log(data);
				this.setState(function() {
					return {
						initialMovie: data
					}
				})
			}.bind(this));
		}

  render() {
  	console.log(this.props);

  	if(this.state.initialMovie || this.props.movie) {
			var imgUrl = 'http://image.tmdb.org/t/p/w1280//' + this.state.initialMovie.backdrop_path
		}

		var backdropStyle = {
  		background: `url(${imgUrl})`,
  		backgroundRepeat: 'no-repeat',
  		backgroundSize: 'cover',
  		backgroundPosition: 'center'
		}

  	// console.log(this.state.movie);
    return (
      <div className="container" style={backdropStyle}>
        <SearchBar className="searchbar" />
        <MovieDetail movieData={this.props.movie ? this.props.movie : this.state.initialMovie} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchData }, dispatch)
}

function mapStateToProps(state) {
	return {
		movie: state.movie
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
