'use strict';
import $ from 'jquery';

import store from './bookmark-store';


const generateInitialView = function(bookmarks) {
  console.log('trying to generateInitialView');
  console.log('initial bookmarks are');
  console.log(bookmarks);


  let menu = generateInitialMenu();
  let bookmarkList = generateBookmarkList(bookmarks);
  return menu + bookmarkList;
}

const generateInitialMenu = function() {
  return `<div id='menu'>
            <button class='btn' id='new-bookmark-btn'><label for="">new</label></button>
            <select name="ratings" id="rating-select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>`;
}

const generateBookmarkList = function (bookmarks) {
  let list = '';
  list = bookmarks.map(function (bm) {
    let ratings = generateRating(bm);
    let template = `<div class='bookmark-item' id=${bm.id}>
                      <div class='title'><h3>${bm.title}</h3></div>
                      <div class='star-rating'>
                        ${ratings}
                      </div>
                    </div>`;
    if(bm.expanded) {
      template = `<div class='bookmark-item bookmark-expanded' id='${bm.id}'>
                    <div class='title'>
                      <h3>${bm.title}</h3> 
                      <button class='btn' id='btn-bookmark-delete'><label for='btn-bookmark-delete'>delete</label></button>
                    </div>

                    <div class='expanded-body'>
                      <div class='body-top'>
                        <textarea name="" id="description-edit" cols="30" rows="10">${bm.description}</textarea>
                        <div class='star-rating'>
                          ${ratings}
                        </div>
                        <a href=${bm.url} class="btn">Go to ${bm.title}</a>
                      </div>
                    </div>
                    
                  </div>`
    }
    return template;
  });
  console.log('list of bookmarks array is');
  console.log(list);
  list = list.join(" ");
  return `<div id='bookmark-list'>
            ${list}
          </div>`;

}
/*<div id='bookmark-list'>
      <div class='bookmark-item'>
        <div class='title'><h3>Bookmark name</h3></div>
        <div class='star-rating'>Rating visual</div>
      </div>
      <div class='bookmark-item'>
        <div class='title'><h3>Bookmark name</h3></div>
        <div class='star-rating'>Rating visual</div>
      </div>
      <div class='bookmark-item'>
        <div class='title'><h3>Bookmark name</h3></div>
        <div class='star-rating'>Rating visual</div>
      </div>
    </div>`;*/

const generateRating = function (bm) {
  let ratings = '';
  for(let i = 1; i <= 5; i++){
    if(i <= bm.rating) {
      ratings += `<button class='star full-star' val='${i}'><img src="/src/images/star-full.png" alt="full star"></button>`;
    }
    else {
      ratings += `<button class='star empty-star' val='${i}'><img src="/src/images/star-empty.png" alt="empty star"></button>`;
    }
  }
  return ratings;
};
/*          
            <div class='star-rating'>
              <button class='star empty-star' val='1'><img src="/src/images/star-empty.png" alt="empty star"></button>
              <button class='star empty-star' val='2'><img src="/src/images/star-empty.png" alt="empty star"></button>
              <button class='star empty-star' val='3'><img src="/src/images/star-empty.png" alt="empty star"></button>
              <button class='star empty-star' val='4'><img src="/src/images/star-empty.png" alt="empty star"></button>
              <button class='star empty-star' val='5'><img src="/src/images/star-empty.png" alt="empty star"></button>
            </div>
*/

const generateNewBookmarkView = function() {
  let template = `<form action="submit">
                    <div id='new-bookmark-top'>
                      <label for="bookmark-name-input">Add New Bookmark:</label>
                      <input type="text" id='bookmark-url-input' value='https://www.google.com/'>
                    </div>

                    <div id='new-bookmark-body'>
                      <div class='link-walkthrough'>
                        <input type="text" id='bookmark-title-input' value='Sample Title'>
                      </div>
                      <div class='star-rating'>
                        <button class='star empty-star' val='1'><img src="/src/images/star-empty.png" alt="empty star"></button>
                        <button class='star empty-star' val='2'><img src="/src/images/star-empty.png" alt="empty star"></button>
                        <button class='star empty-star' val='3'><img src="/src/images/star-empty.png" alt="empty star"></button>
                        <button class='star empty-star' val='4'><img src="/src/images/star-empty.png" alt="empty star"></button>
                        <button class='star empty-star' val='5'><img src="/src/images/star-empty.png" alt="empty star"></button>
                      </div>
                      <div>
                        <textarea name="new-bookmark-desc" id="" cols="30" rows="10">temp desc</textarea>
                      </div>
                    </div>

                    <div id='new-bookmark-foot'>
                      <button class='btn' id='cancel'><span>Cancel</span></button>
                      <button class='btn' type='submit'><span>Create</span>
                      </button>
                    </div>
                  </form>`;
  return template;
};

const handleCreateNewClicked = function() {
  $('main').on('click', '#new-bookmark-btn', function (event) {
    console.log('createnNewClick is running');
    store.toggleAdding();
    render();
  });
};

const handleSubmitNewClicked = function() {

};

const handleCancelNewClicked = function() {
  $('main').on('click', '#cancel', function(e) {
    console.log('cancel was clicked!');
    store.toggleAdding();
    render();
  });
};

let bindEventListeners = function() {
  handleCreateNewClicked();
  handleCancelNewClicked();
};

let render = function() {
  let template = '';
  if(store.isAdding()){
    template = generateNewBookmarkView();
  }
  else {
    template = generateInitialView(store.getBookmarks());;
  }
  $('main').html(template);
}


export default {
  render,
  bindEventListeners
};