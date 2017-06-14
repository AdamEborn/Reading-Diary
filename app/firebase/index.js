import firebase from 'firebase';

try {
	var config = {
	  apiKey: "AIzaSyBUsA6JiWx4S6LXgoJA5CQOLcZ1efa8H64",
	  authDomain: "reading-diary-de6c0.firebaseapp.com",
	  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
	  storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);
}