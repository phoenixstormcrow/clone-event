(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* clone-event

   clone a DOM event
*/

var whitelist = require('./whitelist');

console.log(whitelist);

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

     Not all events can be constructed,
     and not every device defines every event interface.
     therefore, we whitelist the supported events.
  */

  if (whitelist.find(function (el) {
        return (el === e.constructor.name);
      }) === undefined) {
        throw new TypeError("Unsupported event constructor: " +
          e.constructor.name);
  }
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

},{"./whitelist":2}],2:[function(require,module,exports){
/* whitelist.js

   exports a list of event constructors which
   are supported by clone-event.
*/

var events = [
  'Event',
  'AnimationEvent',
  'AudioProcessingEvent',
  'BeforeInputEvent',
  'BeforeUnloadEvent',
  'BlobEvent',
  'ClipboardEvent',
  'CloseEvent',
  'CompositionEvent',
  'CSSFontFaceLoadEvent',
  'CustomEvent',
  'DeviceLightEvent',
  'DeviceMotionEvent',
  'DeviceOrientationEvent',
  'DeviceProximityEvent',
  'DOMTransactionEvent',
  'DragEvent',
  'EditingBeforeInputEvent',
  'ErrorEvent',
  'FocusEvent',
  'GamepadEvent',
  'HashChangeEvent',
  'IDBVersionChangeEvent',
  'InputEvent',
  'KeyboardEvent',
  'MediaStreamEvent',
  'MessageEvent',
  'MouseEvent',
  'MutationEvent',
  'OfflineAudioCompletionEvent',
  'PageTransitionEvent',
  'PointerEvent',
  'PopStateEvent',
  'ProgressEvent',
  'RelatedEvent',
  'RTCDataChannelEvent',
  'RTCIdentityErrorEvent',
  'RTCIdentityEvent',
  'RTCPeerConnectionIceEvent',
  'SensorEvent',
  'StorageEvent',
  'SVGEvent',
  'SVGZoomEvent',
  'TimeEvent',
  'TouchEvent',
  'TrackEvent',
  'TransitionEvent',
  'UIEvent',
  'UserProximityEvent',
  'WheelEvent'
];

module.exports = events.filter(function (evt) {
  try {
    eval("new " + evt +"('foo')");
  } catch (e) {
    return false;
  }
  return true;
});

},{}]},{},[1]);
