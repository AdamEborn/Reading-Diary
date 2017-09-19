var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

module.exports = {
  saveBookToWishlist: function(bookToSave) {
		var reference = firebase.database().ref().child('wishlist');
		var savedBook = {
			id: 'tempstring',
			bookTitle: bookToSave.bookTitle,
			author: bookToSave.author,
			bookDescription: bookToSave.bookDescription,
			link: bookToSave.link,
			thumbnailPic: bookToSave.thumbnailPic
		}
		var newPushRef = reference.push(savedBook);
		reference.child(newPushRef.key).update({
			id: newPushRef.key
		});
	},
  removeBookFromWishlist: function(bookToRemove) {
    var ref = firebase.database().ref().child('wishlist');
    ref.on("value", function(snapshot) {
      var sv = snapshot.val();
      for (var key in sv) {
        if (!sv.hasOwnProperty(key)) continue;
        var obj = sv[key];
        if (obj.hasOwnProperty("id") && obj.id === bookToRemove.id) {
          ref.child(obj.id).remove();
        };
      };
    });
  }
}
