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
            <button type='button' class='btn' id='new-bookmark-btn'><label for="">new</label></button>
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
    let ratings = generateRating(bm.rating);
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
                      <button type='button' class='btn' id='btn-bookmark-delete'><label for='btn-bookmark-delete'>delete</label></button>
                    </div>

                    <div class='expanded-body'>
                      <div class='body-top'>
                        <textarea name="" id="description-edit" cols="30" rows="10">${bm.desc}</textarea>
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

const generateRating = function (rating) {
  let ratings = '';
  const c = {
    '1': 'one-star',
    '2': 'two-star',
    '3': 'three-star',
    '4': 'four-star',
    '5': 'five-star'
  };

  for(let i = 1; i <= 5; i++){
    let className = c[`${i}`];

    if(i <= rating) {
      ratings += `<div class='star full-star ${className}'><img src="/src/images/star-full.png" alt="full star"></div>`;
    }
    else {
      ratings += `<div class='star empty-star ${className}'><img src="/src/images/star-empty.png" alt="empty star"></div>`;
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
                        <div class='star empty-star one-star'><img src="/src/images/star-empty.png" alt="empty star"></div>
                        <div class='star empty-star two-star'><img src="/src/images/star-empty.png" alt="empty star"></div>
                        <div class='star empty-star three-star'><img src="/src/images/star-empty.png" alt="empty star"></div>
                        <div class='star empty-star four-star'><img src="/src/images/star-empty.png" alt="empty star"></div>
                        <div class='star empty-star five-star'><img src="/src/images/star-empty.png" alt="empty star"></div>
                      </div>
                      <div>
                        <textarea name="new-bookmark-desc" id="bookmark-desc-textarea" cols="30" rows="10">temp desc</textarea>
                      </div>
                    </div>

                    <div id='new-bookmark-foot'>
                      <button type='button' class='btn' id='cancel'><span>Cancel</span></button>
                      <button class='btn' type='submit'><span>Create</span>
                      </button>
                    </div>
                  </form>`;
  return template;
};
/*
<button type='button' class='star empty-star' val='1'><img src="/src/images/star-empty.png" alt="empty star"></button>
<button type='button' class='star empty-star' val='2'><img src="/src/images/star-empty.png" alt="empty star"></button>
<button type='button' class='star empty-star' val='3'><img src="/src/images/star-empty.png" alt="empty star"></button>
<button type='button' class='star empty-star' val='4'><img src="/src/images/star-empty.png" alt="empty star"></button>
<button type='button' class='star empty-star' val='5'><img src="/src/images/star-empty.png" alt="empty star"></button>
*/

const getStarValue = function (star) {
  if(star.hasClass('one-star')){
    return 1;
  }
  else if(star.hasClass('two-star')){
    return 2;
  }
  else if(star.hasClass('three-star')){
    return 3;
  }
  else if(star.hasClass('four-star')){
    return 4;
  }
  else if(star.hasClass('five-star')){
    return 5;
  }
}

const handleCreateNewClicked = function() {
  $('main').on('click', '#new-bookmark-btn', function (event) {
    console.log('createnNewClick is running');
    store.toggleAdding();
    render();
  });
};

const directUpdateRating = function (parent, starValue) {
  let ratings = generateRating(starValue);
  parent.html(ratings);
}

const handleSetRatingClicked = function() {
  $('main').on('click', '.star', function(e) {
    let starValue = getStarValue($(e.currentTarget));
    
    let parent = $(e.currentTarget).parent();
    console.log(parent);
    if(store.isAdding){
      directUpdateRating(parent, starValue);
    }
    else {
      let id = $(e.currentTarget).closest('.bookmark-item');
      console.log(id);
    }

    /*console.log(e.currentTarget);
    let ratingString = $(e.currentTarget).attr('value');
    console.log(`ratingString is ${ratingString}`);
    let rating = parseInt(ratingString, 10);
    console.log(`rating is ${rating} it is a ${typeof(rating)}`);
    */
  });
}

const getRating = function(ratingList) {
  let numFullStars = ratingList.children('.full-star').length;
  return numFullStars;
}

const handleSubmitNewClicked = function() {
  $('main').on('submit', 'form', function(e) {
    e.preventDefault();
    console.log("SUBMIT IS RUNNING");
    let title = $('#bookmark-title-input').val();
    let url = $('#bookmark-url-input').val();
    let desc = $('#bookmark-desc-textarea').val();
    console.log(`input title is ${title}`);
    console.log(`the description for new bookmark is ${desc}`);
    let rating = getRating($('.star-rating'));
    console.log(`the rating of new item is ${rating}`);

    store.addBookmark(title, rating, url, desc);
    store.toggleAdding();
    render();
  });
};

const handleCancelNewClicked = function() {
  $('main').on('click', '#cancel', function(e) {
    e.preventDefault();
    console.log('cancel was clicked!');
    store.toggleAdding();
    render();
  });
};

const handleExpandClicked = function() {
  $('main').on('click', '.bookmark-item', function(e) {
    let id = $(e.currentTarget).attr('id');
    store.toggleExpanded(id);
    render();
  });
}

let bindEventListeners = function() {
  handleCreateNewClicked();
  handleCancelNewClicked();
  handleSubmitNewClicked();
  handleSetRatingClicked();
  handleExpandClicked();
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