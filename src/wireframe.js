'use strict';

import './index.css';


const generateInitialView = function () {
  let template =
  `<div id='menu'>
      <button class='btn' id='new-bookmark-btn'><label for="">new</label></button>
      <select name="ratings" id="rating-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>

    <div id='bookmark-list'>
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
    </div>`;
};

const generateExpandedView = function () {
  let template = 
    `<div id='menu'>
      <button class='btn' id='btn-new-bookmark'><label for="btn-new-bookmark">new</label></button>
      <select name="ratings" id="rating-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>

    <div id='bookmark-list'>
      <div class='bookmark-item bookmark-expanded' id='unique-bookmar-id'>
        <div class='title'>
          <h3>Bookmark name</h3> 
          <button class='btn' id='btn-bookmark-delete'><label for='btn-bookmark-delete'>delete</label></button>
        </div>

        <div class='body'>
          <div class='top'>
            <textarea name="" id="" cols="30" rows="10">This is a test</textarea>
            <div class='star-rating'>Rating visual</div>
          </div>
          
        
        </div>
        
      </div>
      <div class='bookmark-item'>
        <div class='title'><h3>Bookmark name</h3></div>
        <div class='star-rating'>Rating visual</div>
      </div>
      <div class='bookmark-item'>
        <div class='title'><h3>Bookmark name</h3></div>
        <div class='star-rating'>Rating visual</div>
      </div>
    </div>`;
};

const generateNewBookmarkView = function() {
  let template =
      `<form action="submit">
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
};