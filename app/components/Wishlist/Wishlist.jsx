import React from 'react';

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');


class Wishlist extends React.Component{
	constructor(props) {
		super(props);
		
	}

	componentDidMount() {
	    return firebase.database().ref().child('wishlist').once('value').then(function (snapshot) {
	    	var content = snapshot.val()
	    	console.log(content)
	    });
	    	

	    
	}

	render() {

		return (
			<div>
			<span>wishlist will go here</span>

			</div>
			)
	}



}

export default Wishlist;
