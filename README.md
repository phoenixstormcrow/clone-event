# clone-event

clone a DOM event

## install

`npm install clone-event`

## build

`browserify index.js -o clone-event.bundle.js`

## use
```
<script src='clone-event.bundle.js'></script>
```

or


```
> var clone = require('clone-event');
> var e = new Event('foo');
> var e2 = clone(e);
> var e3 = clone(e, {'bubbles': true, 'cancelable': true})
> e.constructor === e2.constructor
true
> e.type === e2.type
true
> e.bubbles
false
> e3.bubbles
true
```

## methods

### clone(evt, [overrides])

Returns a new event, of the same type as `evt` (that is, constructed with the same constructor, and with the 'type' properties equal).
Pass an `overrides` object to override properties of the event you wish to clone. This object will be passed to the event constructor.
Note that few properties can be set this way; consult [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Event) for the
applicable constructor to determine which properties can be initialized.

## known issues

Not all events can be created. For example, `new TouchEvent()` throws `TypeError: Illegal Constructor`, and `document.createEvent('TouchEvent')` throws `NotSupportedError: Failed to execute 'createEvent' on 'Document': The provided event type ('TouchEvent') is invalid.`, at least in Chrome v37 on my own system. Not all systems will support all events; more testing is needed to discover all the limitations of this module.

To circumvent this limitation, a whitelist of constructable events is calculated, and calls to clone passing anything not in this list will throw `TypeError: Unsupported event constructor: <name>`.
