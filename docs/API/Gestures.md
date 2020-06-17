---
id: Gestures
title: Gestures
---

The Gestures API allows callbacks to be invoked when gestures are detected and lost.

<b>Note:</b> Gestures are only supported on the Hololens currently. Callbacks will not be called in the web editor.

```javascript
var gestures = require('gestures');
```

## Events

Gesture events can be listened for via `on` and `off`.

- `pointerstarted` - Dispatched when a new pointer is detected.
- `pointerended` - Dispatched when a pointer has been lost.

<b>Note:</b> The underlying gesture tracking may detect new pointers before an existing pointer has ended. It is recommended to use the most recent gesture id provided.

```javascript
var pointerId;

function onPointerStarted(id) {
  log.info('New pointer detected: ', id);
  pointerId = id;
}

function onPointerEnded(id) {
  log.info('Pointer lost: ', id);
}

gestures.on('pointerstarted', onPointerStarted);
gestures.on('pointerended', onPointerEnded);
```

## Pose

Using a pointer id, the Gestures API can be queried for the latest pose data. Every field on each Pose will return either the current pointer data or a default value.

```javascript
function update() {
  if (pointerId) {
    var pose = gestures.pose(pointerId);

    log.info('Pointer position:', pose.origin);
  }
}
```

## Module Events

- `"pointerstarted"`
- `"pointerended"`
- `"pointerpressed"`
- `"pointerreleased"`

## Module Methods

### `pose(id)`
- `id <string>` The pointer to query.
- Returns: a `Pose` object for the provide ID or `null` if the pointer ID is invalid.

Retrieves pose data for a specific ID.

### `on(event, callback)`
- `event <string>`
- `callback <function>`

Subscribe to an event.

### `off(event, [callback])`
- `event <string>`
- `callback <function>` [Optional]

Unsubscribe from an event.

## `Pose Class Properties`

### `origin <vec3>`

The position of the pose in world space.

### `up <vec3>`

The pose's up direction.

### `right <vec3>`

The pose's right direction.

### `forward <vec3>`

The pose's forward vector.

### `rotation <vec3>`

The rotation of the pose.

### `velocity <vec3>`

The linear velocity of the pose.
