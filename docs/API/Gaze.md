---
id: Gaze
title: Gaze (Preview)
---

The Gaze API provides eye tracking details for supported platforms.

```javascript
const gaze = require('gaze-preview');
```

## Gaze Types

There are two types of gaze: glance and focus. Glance is used to describe an element currently being looked at by a user, while focus is when a user's eyes remain settled on an element. Both types can be refered to via the `gaze.types` object. **_[Currently, only `types.Glance` is supported]_**

## Registration

Before we can capture gaze events, we need to register elements for gaze tracking.

```javascript
var self = this;
gaze.register(self, gaze.types.Glance);
```

## Events

Gaze events are fired direcly from the `gaze` interface, just like any other event dispatcher. Events of this type will now be dispatched for this element. The event handlers receive no parameters. Instead, poll the gaze object's state. Handlers should be unregistered with the `off` method when no longer needed.

```javascript
gaze.on('focusupdated', onFocusUpdated);

function onFocusUpdated() {
    var dir = gaze.glanceDirection;
    //
}

gaze.off('focusstopped');
```

## Module Events

- `"glancestarted"`
- `"glanceupdated"`
- `"glancestopped"`
- `"focusstarted"` **_[Not yet supported]_**
- `"focusupdated"` **_[Not yet supported]_**
- `"focusstopped"` **_[Not yet supported]_**

## Module Properties

### `types.Focus <int>` [Read Only] [Not yet supported]
Constant representing the Focus gaze type. Its value is `0` 

### `types.Glance <int>` [Read Only]
Constant representing the Glance gaze type. Its value is `1`

### `glanceDirection <vec3>` [Read Only]
The direction the user is currently looking

## Module Methods

### `register(element, type)`
- `element <Element>` The element to be tracked.
- `type <int>` The type of gaze to register, corresponding to `types.Focus` or `types.Glance` above.

Notifies the eye gaze services to test wether the provided element is receiving the user's glance or focus.

### `unregister(element, type)`
- `element <Element>` The element that should no longer be tracked.
- `type <int>` The type of gaze previously registered, either `tpyes.Focus` or types.Glance`.

After removing registration, the gaze service will no longer test whether the element received the user's focus or glance.
