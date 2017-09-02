import React from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';


class SearchForm extends React.Component {
	constructor(props) {
		super(props);

}
	onFormSubmit(e) {
		e.preventDefault();
		var searchTerm = this.refs.searchTerm.value;
		if (searchTerm.length > 0) {
			this.refs.searchTerm.value = '';
      		this.props.onSearch(searchTerm);
		}
	}

	render() {
		var style = {
			border: '1px solid black',
			width: '30%'
		}

		return(
			<div className="row">
			<div style={style} className="columns medium-6 large-4 small-centered">
				<br />
				<form onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" placeholder="Search..." ref="searchTerm"/>
					<input type="submit" className="expanded button" value="Search"/>
				</form>
			</div>
			<br/>
			</div>
			);
	}
};

SearchForm.propTypes = {
	onSearch: PropTypes.func
}

export default SearchForm;
