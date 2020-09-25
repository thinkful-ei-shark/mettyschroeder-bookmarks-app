'use strict';
import $ from 'jquery';

import './index.css';

import app from './bookmark-app';




const main = function () {
  app.render();
  app.bindEventListeners();
  app.render();
};

$(main);