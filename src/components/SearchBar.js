import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { searchTerm: '' }

		this.onInputChange = this.onInputChange.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({
			searchTerm: event.target.value
		});
	}

	onSearchSubmit(event) {
		event.preventDefault();

		this.props.fetchData(this.state.searchTerm);
		this.setState({
			searchTerm: ''
		});
	}

	render() {
		// console.log(this.props)
		return (
			<form onSubmit={this.onSearchSubmit} className="searchbar">
				<input 
				placeholder="Enter a title"
				value={this.state.searchTerm}
				onChange={this.onInputChange}
				className="search" />
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchData }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
