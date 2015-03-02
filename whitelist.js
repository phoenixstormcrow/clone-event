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
