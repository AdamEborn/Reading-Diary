import React from 'react';

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');


class Wishlist extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			dataForRender: ["sdrfhswryh"]
		}
	}
	componentWillMount() {
	   	    return firebase.database().ref().child('wishlist').once('value').then(function (snapshot) {
	    	var content = snapshot.val();
	    	var arr = []
	    	Object.keys(content).forEach(key => {
	    		if (content[key] && typeof content[key] === "object") {
	    			var book = {
	    				title: content[key].title,
	    				author: content[key].author,
	    				description: content[key].decription,
	    				link: content[key].link
	    			}
	    		}
	    		arr.push(book)
	    	})
	    	console.log(arr)
	    	return arr;
	    });
	}
	    	
	render() {
		return (
			<div>
			{this.state.dataForRender}
			</div>
			)
	}
}

export default Wishlist;
