export var bookDisplayReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
    return [
        ...state,
        action.book
      ]
    case 'REMOVE_BOOK':
    return state.filter((book) => {
      return book.name !== action.name
    })
    default:
      return state;
  }
}
