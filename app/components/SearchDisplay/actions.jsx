export var addBook = (book) => {
  return {
    type: 'ADD_BOOK',
    book: book
  }
}
export var removeBook = (name) => {
  return {
    type: 'REMOVE_BOOK',
    name: name
  }
}
