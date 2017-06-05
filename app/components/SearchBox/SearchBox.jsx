import React from 'react';

import SearchForm from 'SearchForm';
import SearchDisplay from 'SearchDisplay';
import googleRequests from 'googleRequests';

class SearchBox extends React.Component {
	constructor() {
		super();
		this.state = {
			searchResults: []
		}
		
}
	handleSearch(searchTerm) {
		googleRequests.search(searchTerm).then((response) => {
			this.extrapolateResults(response.items);
		}), ((error) =>{
			console.log(error)
		});
	}

	extrapolateResults(arr) {
		function Book(objInArr) {
			this.link = objInArr.selfLink;
			this.bookTitle = <span>{objInArr.volumeInfo.title}</span>;
			this.author = <span>{objInArr.volumeInfo.authors}</span>;
			this.bookDescription = <span>{objInArr.volumeInfo.description}</span>;
			this.thumbnail = function() {
				if (objInArr.volumeInfo.hasOwnProperty('imageLinks')){
				return (<img src={objInArr.volumeInfo.imageLinks.smallThumbnail}/>)
			} 
			else {
				return "No Thumbnail Available";
			}
		};
			this.thumbnailPic = this.thumbnail();
	}

	var finalRes = [];
	var initRes = arr;
		initRes.forEach(function (objInArr) {
			var obj = new Book(objInArr);
			finalRes.push(obj);
		})
	this.setState({
		searchResults: finalRes
	})
	console.log(finalRes, this.state.searchResults)

	}


	render() {
		var res = this.state.searchResults;

		function renderResults() {
			if (res.length !== 0) {
				return (<SearchDisplay content={res} />)
			}
			else {
				return;
			}
		}

		var style = {
			border: '1px solid black',
			height: '80%',
			width: '83%'
		}
		return (
			<div style={style}>
				<SearchForm onSearch={this.handleSearch.bind(this)}></SearchForm>
				{renderResults()}
			</div>)
	}
};

export default SearchBox;
