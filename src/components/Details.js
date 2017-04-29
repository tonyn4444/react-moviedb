import React from 'react';

const MovieDetail = (props) => {

	if (!props.movieData) {
		return <div>Loading...</div>
	}

	var imgUrl = 'http://image.tmdb.org/t/p/w500//' + props.movieData.poster_path
	// http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg
	return (
		<div id="detail-container">
			<div id="content"> {console.log(imgUrl)}
				<h1>{props.movieData.title}</h1>
				<h2>{props.movieData.tagline}</h2>
				<p>{props.movieData.overview}</p>
			</div>
			<div id="pic">
				<img id="poster" src={imgUrl} />
			</div>
		</div>
	)
}

export default MovieDetail;
