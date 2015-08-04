/* clone-event tests */
var clone = require('../index'),
    tape = require('tape');

tape('test cloning', function (t) {
//  t.plan(2);
  var e = new Event('foo'),
      e2 = clone(e),
      e3 = clone(e, {'bubbles': true});
  t.ok(e.type, 'foo');
/* deepEqual(e, e2) will sometimes pass and
   sometimes fail, because the timeStamp property
   may or may not be different! Can not set this property.
*/

  t.equal(e.type, e2.type);
  t.equal(e.bubbles, e2.bubbles);
  t.equal(e.cancelable, e2.cancelable);

  t.notEqual(e.bubbles, e3.bubbles);
  t.equal(e3.bubbles, true);

  var pe = new ProgressEvent('bar'),
      pe2 = clone(pe),
      pe3 = clone(pe, {'lengthComputable': true});

  t.ok(pe.type, 'bar');
  t.equal(pe.lengthComputable, pe2.lengthComputable);
  t.equal(pe3.lengthComputable, true);

  t.end();
});
