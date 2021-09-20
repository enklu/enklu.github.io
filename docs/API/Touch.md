---
id: Touch
title: Touch
---

The `touch` system is a higher-level system that combines elements and gestures. It is useful for registering for determining if a user touches an element with their finger.

```javascript
var touch = require('touch');
```

> This API is available only on HoloLens.

## Registration

Registering an element for touch events is very simple. Simply require the touch system and call register. Touch events are only supported on asset elements.

```javascript
var touch = require('touch');
touch.register(this);

// some time later

touch.unregister(this);
```

The underlying API will reject registrations from non-asset Elements.

```javascript
var success = touch.register(this.findOne('..(@type=LightWidget)'));
if (!success) {
  log.warn('Unable to register Element for touch!');
}
```

Registering an element with the `touch` system will cause that element to dispatch events when touched. These can be listened to just like any other event dispatched from an element: with `on`. The payload passed into touch callback will contain the `position` and `normal` of the hit.

```javascript
touch.register(this);

// dispatched when a touch has started
this.on('touchstarted', function(hit) {
  log.info('Touch detected!');
  log.info('  Position: ' + hit.position);
  log.info('  Normal: ' + hit.normal);
});
```

Another example of using touch

```javascript
const touch = require('touch');
const self = this;
function enter() {
    //check that we can interact with collider
    var myCollider = touch.register(self);
    
    //if no collider found on object warn us, else check for touch event
    if(!myCollider) 
    {
       log.warn("Warning element has no collider.");
    }
    else
    {
      // dispatched when a touch has started
     self.on('touchstarted', function(hit)
      {
        onTouch();
      });
    }
}
 
function onTouch() {
    
    log.info("touched object");
    
}
function exit() {    
    //make sure to remove subscription to the touch event
    self.off('touchstarted');
 }
```

## Module Events
- `"touchstarted"`
- `"touchdragged"`
- `"touchstopped"`

## Module Properties
### `fingerOffset <vec2>`

The offset from the pointer position.

## Module Methods
### `register(element)`
- `element <Element>` The element to detect touches on.
- Returns: `<bool>` Whether registration succeeded.

Registers an `Element` for touch detection.

### `unregister(element)`
- `element <Element>` The element that should no longer be tracked.
- Returns: `<bool>` Whether registration was succeeded.

Removes touch detection for an element.

### `on(event, callback)`
- `event <string>` The event to subscribe to.
- `callback <function>` The callback to invoke. A `HitInfo` object is passed as a parameter

Subscribes to an event.

### `off(event, [callback])`
- `event <string>` The event to unsubscribe from.
- `callback <function>`*[Optional]* The callback that should no longer be invoked.

Unsubscribes from an event. If a callback is not passed as a parameter, all handlers will be cancelled.

## `HitInfo` Class Parameters
### `position <vec3>`

The coordinates where the touch was detected.

### `normal<vec3>`

A vector normal to the surface where the touch was detected.
