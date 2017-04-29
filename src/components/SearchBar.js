import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { searchTerm: '' }
	}

	onInputChange(term) {
		this.setState({
			searchTerm: term
		})
		this.props.onSearch(term)
	}

	render() {
		// console.log(this.props)
		return (
			<div className="searchbar">
				<input 
				value={this.state.searchTerm}
				onChange={(event) => this.onInputChange(event.target.value)}
				className="search" />
			</div>
		)
	}
}

export default SearchBar;