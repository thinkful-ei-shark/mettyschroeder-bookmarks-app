'use strict';

const store = { bookmarks: [
                  {
                    id: 'x56w',
                    title: 'Title 1',
                    rating: 3,
                    url: 'http://www.title1.com',
                    desc: 'lorem ipsum dolor sit',
                    expanded: false
                  },
                  {
                    id: '6ffw',
                    title: 'Title 2',
                    rating: 5,
                    url: 'http://www.title2.com',
                    desc: 'dolorum tempore deserunt',
                    expanded: false
                  } 
                ],
                adding: false,
                error: null,
                filter: 5
              };

const toggleAdding = function () {
  store.adding = !store.adding;
};
const isAdding = function() {
  return store.adding;
};

const addBookmark = function (title, rating, url, description) {
  let bookmark = {
    id: id,
    title: title,
    rating: rating,
    url: url,
    desc: description,
    expanded: false
  }

  store.bookmarks.push(bookmark);
};

const getBookmarks = function () {
  console.log('the bookmarks are');
  console.log(store.bookmarks);
  let filteredBookmarks = store.bookmarks.filter(function (bookmark) {
    return bookmark.rating <= store.filter;
  });
  console.log('the filtered bookmarks are');
  console.log(filteredBookmarks);
  return filteredBookmarks;
};

const updateRating = function (id, rating) {
  for(let i = 0; i < store.bookmarks.length; i++){
    if(store.bookmarks[i].id === id){
      store.bookmarks[i].rating = rating;
    }
  }
};

const toggleExpanded = function (id) {
  for(let i = 0; i < store.bookmarks.length; i++){
    if(store.bookmarks[i].id === id){
      store.bookmarks[i].expanded = !store.bookmarks[i].expanded;
    }
  }
}

/*const store = {
  bookmarks: [
    {
      id: 'x56w',
      title: 'Title 1',
      rating: 3,
      url: 'http://www.title1.com',
      description: 'lorem ipsum dolor sit',
      expanded: false
    },
    {
      id: '6ffw',
      title: 'Title 2',
      rating: 5,
      url: 'http://www.title2.com',
      description: 'dolorum tempore deserunt',
      expanded: false
    } 
    ...
  ],
  adding: false,
  error: null,
  filter: 0
};*/

export default {
  toggleAdding,
  isAdding,
  addBookmark,
  getBookmarks,
  updateRating,
  toggleExpanded
};