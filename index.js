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
