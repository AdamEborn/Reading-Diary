import axios from 'axios';

const SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const KEY = '&key=AIzaSyDMUjZgabzIAXnIjeuxiioGW8fINUJid1k';

module.exports = {
	search(searchTerm) {
		var requestURL = `${SEARCH_URL}${searchTerm}${KEY}`;
		return axios.get(requestURL).then((response) => {
			return response.data;
		}).catch((error) => {
			console.log(error);
		})
	}
};