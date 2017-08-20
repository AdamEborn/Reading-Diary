import expect from 'expect';
import actions from 'actions';

//test book to save
var bookA = {
  name: 'a dance with dragons',
  author: 'george r. r. martin',
  category: 'fantasy'
};

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchTerm: 'test text'
    };
    var res = actions.setSearchText(action.searchTerm);
    expect(res).toEqual(action);
  });
  it('should generate add book action', () => {
    var action = {
      type: 'ADD_BOOK',
      bookToSave: bookA
    };
    var res = actions.addBook(action.bookToSave);
    expect(res).toEqual(action);
  });
  it('should generate remove book action', () => {
    var action = {
      type: 'REMOVE_BOOK',
      name
    };
    var res = actions.removeBook(action.name);
    expect(res).toEqual(action);
  });
});
