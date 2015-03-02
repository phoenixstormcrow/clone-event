(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* clone-event

   clone a DOM event
*/

function clone(e, overrides) {
  'use strict';
  /* clone an event by copying its properties
     and calling its constructor. The
     overrides parameter allows the caller
     to change properties on the new event.
     All of the properties of the Event object
     are read-only, so we may only affect those
     used to initialize the new event.
     Luckily, it seems that inappropriate
     fields in the initDict are ignored by the constructor.

     For example, e = new Event('foo', {'lengthComputable': true})
     does not cause an error, and e.lengthComputable
     will be undefined after the constructor returns.
  */
  var over = overrides || {},
      Constructor = e.constructor,
      initDict = {};

  for (var prop in e) {
    if (e.hasOwnProperty(prop)) {
      initDict[prop] = over[prop] || e[prop];
    }
  }

  return new Constructor(e.type, initDict);
}

module.exports = clone;

},{}]},{},[1]);
