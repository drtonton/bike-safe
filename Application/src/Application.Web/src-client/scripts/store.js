import Backbone from 'backbone';
import ReactDOM from 'react-dom';
import React from 'react';
import {ACTIONS} from './actions.js';

const STORE = {
  _data: {
    currentUser: '',
    currentRoute: '',
    mapHazards: [],
    savedRides: []
  },

  getStore: function(){
    return this._data;
  },

  setStore: function(prop, propVal){
    this._data[prop] = propVal;

		if(typeof _callbackFunction === 'function'){this._callbackFunction();};
  },

  storeChange: function(callback){
    this._callbackFunction = callback;
  }
};
