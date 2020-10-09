'use strict';
import $ from 'jquery';

import './index.css';
import api from './bookmark-api';
import app from './bookmark-app';
import store from './bookmark-store';




const main = function () {
  app.render();
  app.bindEventListeners();
  api.getBookmarks().then( bookmarks => {
    bookmarks.forEach(bookmark => {
      store.addBookmark(bookmark);
    })
    app.render();
  })

};

$(main);