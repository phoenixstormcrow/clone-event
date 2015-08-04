/* clone-event

   clone a DOM event
*/

'use strict';

/* polyfill for Array.prototype.find and Object.assign */

if (!Array.prototype.find) {
  require('core-js/fn/array/find');
}

if (!Object.assign) {
  require('core-js/fn/object/assign');
}

//require('babel/polyfill');

var whitelist = require('./whitelist');

function clone(e, overrides = {}) {

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

  var Constructor = e.constructor,
      initDict = Object.assign({}, e, overrides);

  return new Constructor(e.type, initDict);
}

module.exports = clone;
