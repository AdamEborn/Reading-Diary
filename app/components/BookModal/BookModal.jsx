//work in progress
//may decide to do full page yet...

import React from 'react';

class BookModal extends React.Component {
	constructor(props) {
		super(props);

}

componentDidMount() {
  var modal = new Foundation.Reveal($('#book-modal'));
  modal.open();
}
//needs registering on webpack when ready
/*
<img src={book.thumbnailPic} />
<h3> {book.bookTitle} </h3>
<span> {book.author} </span>
<p> {book.bookDescription} </p>
*/
	render() {

		return(
      <div id="book-modal" className="reveal small text-center" data-reveal>
        <h3>Book Title</h3>
        <span>Author</span>
        <p>Blah </p>
<div className="row">
  <div className="columns medium-6 large-4 small-centered">
  <button className="button">Add To Wishlist</button> <button className="button">Add To Read List</button>
  </div>
  </div>
  <button className="button expanded" data-close> Close </button>
    </div>
			);
	}
};

export default BookModal;
