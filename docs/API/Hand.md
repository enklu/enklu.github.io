---
id: Hand
title: Hands
---

The Hand API preview provides hand tracking data for supported platforms.

```javascript
const hands = require('hands-preview');
```

## Data

Get the position and rotation of a specific joint on a specific hand. Use `hands.None` if the handedness doesn't matter.

```javascript
var pos = hands.getPosition(hands.hands.Right, hands.joints.Palm);
var rot = hands.getRotation(hands.hands.Right, hands.joints.Palm);

var pos = hands.getPosition(hands.hands.None);
```

## Events

Events are dispatched for hands entering and leaving detection. These can be useful for starting and stopping behaviors. Subscribe and unsubscribe to events with `on` and `off`.

```javascript
hands.on('handdetected', function(handedness) {
    //
});

hands.off('handupdated', onHandUpdated);
```

## Module Events

### `"handdetected"`
### `"handupdated"`
### `"handlost"`

## Module Properties

### All possible `hands` values [Read Only]
- ### `hands.None <int>`
- ### `hands.Left <int>`
- ### `hands.Right <int>`

### All tracked `joints` [Read Only]
- ### `joints.Wrist <int>`
- ### `joints.Palm <int>`
- ### `joints.ThumbMetacarpalJoint <int>`
- ### `joints.ThumbProximalJoint <int>`
- ### `joints.ThumbDistalJoint <int>`
- ### `joints.ThumbTip <int>`
- ### `joints.IndexMetacarpal <int>`
- ### `joints.IndexKnuckle <int>`
- ### `joints.IndexMiddleJoint <int>`
- ### `joints.IndexDistalJoint <int>`
- ### `joints.IndexTip <int>`
- ### `joints.MiddleMetacarpal <int>`
- ### `joints.MiddleKnuckle <int>`
- ### `joints.MiddleMiddleJoint <int>`
- ### `joints.MiddleDistalJoint <int>`
- ### `joints.MiddleTip <int>`
- ### `joints.RingMetacarpal <int>`
- ### `joints.RingKnuckle <int>`
- ### `joints.RingMiddleJoint <int>`
- ### `joints.RingDistalJoint <int>`
- ### `joints.RingTip <int>`
- ### `joints.PinkyMetacarpal <int>`
- ### `joints.PinkyKnuckle <int>`
- ### `joints.PinkyMiddleJoint <int>`
- ### `joints.PinkyDistalJoint <int>`
- ### `joints.PinkyTip <int>`

## Module Methods

### `on(event, callback)`
- `event <string>` The hand event to subscribe to.
- `callback <function>` The function to receive messages. A `Handedness` value is passed as a parameter. 
### `on(event, hand, callback)`
- `event <string>` The hand event to subscribe to.
- `hand <string>` A string representing handedness: `'Right'` or `'Left'`.
- `callback <function>` The function to receive messages. A `Handedness` value is passed as a parameter. 

Subscribes to a hand event.

### `off(event, callback)`
- `event <string>` The hand event previously subscribed to.
- `callback <function>` The function to receive messages. A `Handedness` value is passed as a parameter. 
### `off(event, hand, callback)`
- `event <string>` The hand event previously subscribed to.
- `hand <string>` A string representing handedness (`'Right'` or `'Left'`) that was previously subscribed to.
- `callback <function>` The previously subscribed callback function. 

Unsubscribes from a hand event.

### `getPosition(handedness, joint)`
- `handedness <int>` A `hands` property value.
- `joint <int>` A `joints` property value.

Gets the position of a specfic joint of a hand.

### `getRotation(handedness, joint)`
- `handedness <int>` A `hands` property value.
- `joint <int>` A `joints` property value.

Gets the rotation of a specfic joint of a hand.
