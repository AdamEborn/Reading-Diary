var firebase = require('firebase/app');

try {
	var config = {
		apiKey: "AIzaSyBUsA6JiWx4S6LXgoJA5CQOLcZ1efa8H64",
	    authDomain: "reading-diary-de6c0.firebaseapp.com",
	    databaseURL: "https://reading-diary-de6c0.firebaseio.com",
	    projectId: "reading-diary-de6c0",
	    storageBucket: "reading-diary-de6c0.appspot.com",
	    messagingSenderId: "829476060920"
};
firebase.initializeApp(config);
} catch (error) {
	console.log(error)
}
export default firebase;
