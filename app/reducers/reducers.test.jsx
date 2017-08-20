import expect from 'expect';
import reducers from 'reducers';
import df = from 'deep-freeze-strict';


//dummy test database
var bookA = {
  name: 'a dance with dragons',
  author: 'george r. r. martin',
  category: 'fantasy'
};


describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchTerm', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchTerm: 'reducer test text'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchTerm);
    });
  });
  describe('bookDisplayReducer', () => {
    it('should add book', () => {
      var action = {
        type: 'ADD_BOOK',
        bookToSave: {
          bookTitle: 'a dance with dragons',
          author: 'george r. r. martin',
          bookDescription: 'fantasy',
          link: 'test link text',
          thumbnailPic: 'test pic text'
        },
      };
      var res = reducers.bookDisplayReducer(df([]), df(action));
      expect(res.length).toEqual(1)
      expect(res[0].bookTitle).toEqual(action.bookToSave.bookTitle);
    });
    it('should remove book', () => {
      var action = {
        type: 'REMOVE_BOOK',
        name: 'a dance with dragons'
      };
      var res = reducers.bookDisplayReducer(df([bookA]), df(action));
      expect(res.length).toEqual(0);
    });
  });
});
