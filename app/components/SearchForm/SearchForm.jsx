import React from 'react';
import PropTypes from 'prop-types';

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
			float: 'left',
			height: '100%',
			width: '30%'
		}

		return(
			<div style={style} className="container">
				<form onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" placeholder="search name here" ref="searchTerm"/>
					<input type="submit" className="button" value="Get Book"/>
				</form>
			</div>
			);
	}
};

SearchForm.propTypes = {
	onSearch: PropTypes.func
}

export default SearchForm;


