import React from 'react';

const MovieDetail = (props) => {

	if (!props.movieData) {
		return <div>Loading...</div>
	}

	var imgUrl = 'http://image.tmdb.org/t/p/w500//' + props.movieData.poster_path
	// http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg
	return (
		<div id="detail-container">
			<div id="content"> {console.log(imgUrl, props.movieData)}
				<h1 className="title-tagline">{props.movieData.title}</h1>
				<h2 className="tagline title-tagline">{props.movieData.tagline}</h2>
				<p>{props.movieData.overview}</p>
				<div id="stats">
					<div id="release-date-container" className="top-half">
						<h3 id="release-date-title">Release date:</h3>
							<span id="release-date">{props.movieData.release_date}</span>
					</div>
					<div id="release-date-container" className="top-half">
						<h3 id="release-date-title">Release date:</h3>
							<span id="release-date">{props.movieData.release_date}</span>
					</div>
					<div id="release-date-container">
						<h3 id="release-date-title">Release date:</h3>
							<span id="release-date">{props.movieData.release_date}</span>
					</div>
					<div id="release-date-container">
						<h3 id="release-date-title">Release date:</h3>
							<span id="release-date">{props.movieData.release_date}</span>
					</div>
				</div>
			</div>
			<div id="pic">
				<img id="poster" src={imgUrl} />
			</div>
		</div>
	)
}

export default MovieDetail;
