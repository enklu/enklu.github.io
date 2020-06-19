---
id: Multiplayer
title: Multiplayer
---

Enklu comes with a specialized interface for realtime multiplayer. Currently, the player will automatically join a multiplayer server instance for the specific experience they are loading into. The multiplayer JavaScript api is transparent to the client whether or not it is connected. This means that scripts do not have to contain their own complicated logic for multiplayer fallbacks.

At a high level, the multiplayer system can synchronize elements and their schema properties across clients. This means that when a client changes the position of an element, for instance, the change will be propagated to all clients so that the position prop stays in sync.

```javascript
const mp = require('mp');
```

To control synchronization between clients, first obtain a context for the element in question. All synchronization for a specific element is directed through this context object.

```javascript
var ctx = mp.context(el);
```

## Auto-Toggle Example

The most basic networking primitive provided is the auto-toggle. This construct sets a boolean prop to a specific value, and when a provided number of milliseconds elapses, resets the prop. The prop changes are propagated to all clients currently in the experience.

This construct is connection transparent-- meaning that a connection to the multiplayer server is not required. The prop will be set to a value and flipped back regardless of whether or not the client is connected. If the client is connected, the prop change will propagate to all other clients. A key point here is that the client is not responsible for setting the prop back to the original value when the time has elapsed: the multiplayer server will do this. This is important because if a client is disconnected or leaves the server, the timer will still elapse and updates will still be sent out to other clients.

```javascript
var self = this;
var el;

function enter() {
    // find a specific child element
    el = self.findOne('..bar');
    
    // Watch for the 'onPlay' prop to change-- this will be called if we change the prop
    // OR if anyone else changes the prop using the autoToggle function (see onTouched()).
    el.schema.watchBool('onPlay', function(prev, next) {
        if (next) {
            // play animation
        }
    });
} 
function onTouched() {
    // retrieve the multiplayer context for the element
    var ctx = mp.context(el);

    // set the 'onPlay' bool to true, and in 30 seconds, set it back to false
    ctx.autoToggle('onPlay', true, 30000);

    // There is no need to set the prop value: autoToggle will take control of this
    // prop, setting it to true and false.
}
```


## Sync Example

Properties of a multiplayer context can be synchronized across the network easily. Any changes to a property after `sync` has been called will automatically transmit to other clients. `unsync` should be called in an exit function or when no longer needed.

```javascript
function enter() {
    var ctx = mp.context(el);

    // Enable position and rotation to be shared across clients.
    ctx.sync('position');
    ctx.sync('rotation');

    el.transform.position = vec3(10, 0, 0);
    el.transform.lookAt(vec3(-1, 0, 0));
}

// Cleanup when needed.
function exit() {
    ctx.unsync('position');
    ctx.unsync('rotation');
}
```

## Builder

An Element builder is available as part of the `mp` interface. This allows for creating elements for all clients in an experience.

```javascript
var builder = mp.builder(parentEl)
    .name('NetworkedChild') // Sets the name of the child to be created.
    .asset(parentEl.findOne('..(@name=Prefab)')); // Sets the asset of the new child to an existing Element's asset.

// Schema values can be set on a builder, which will be defined on the Element it creates
builder.setString('label', 'Look at me');
builder.setBool('visible', false);
builder.setNumber('intensity', 0.4);
builder.setVec('position', vec3(0, 3, 0));
builder.setCol('color', col(0, 0, 1, 1));

// The builder will only build one Element, once the 'build' function is called.
builder.build(function(err, elm) {
  if (err) {
    log.error('Error building Element: ' + err);
  } else {
    log.info('Element built successfully: ' + elm);
  }
});
```

## Notifications

For sending and receiving arbitrary events, we have provided the `notifications` api on the `mp` interface. This is useful for sending a string payload and a string event type. These events are then broadcast to every client in the experience.

```javascript
// Broadcast a notification to all players in the experience.
var notifs = require('mp').notifications;
notifs.broadcast('ping', 'this is a ping!');

...

// Listen for notifications from other clients.
notifs.on('ping', function(payload) {
	log.info(payload); // 'this is a ping'
});
```

## Module Properties

### `expiration.SESSION <string>` [Read Only]
### `expiration.PERSISTENT <string>` [Read Only]
Expiration types.

### `ownership.SELF <sring>` [Read Only]
Ownership types.

### `notifications <Notifications>` [Read Only]
Notification interface.

### `isConnected <bool>` [Read Only]
True if the client is connected to the multiplayer server.

## Module Methods

### `context(element)`
- `context <Multiplayer Context>` The element to create the context from.
- Returns: A new `MultiplayerContext` object.

Creates a multiplayer context for the provided element.

### `onConnectionChange(callback)`
- `callback <function>` Called when connection status changes. A boolean representing connection status is passed as a parameter.

Registers a callback that is invoked when connection status changes.

### `builder(parent)`
- `parent <Element>` The element to which new elements will be added as children.
- Returns: A new `ElementBuilder`

Creates a builder for adding elements synced to all clients in the multiplayer session.

## `Notifications` Class Methods

### `on(event, callback)`
- `event <string>` The event to subscribe to.
- `callback <function>` The callback to be invoked. A string payload is passed as a parameter.

Subscribes to a multiplayer event.

### `off(event)`
- `event <string>` The event previously subscribed to.

Unsubscribes from a multiplayer event.

### `broadcast(event, payload)`

- `event <string>` Name of the event.
- `payload <string>` Data to send to subscribers.

Sends a multiplayer event to all subscribers in the session.

## MultiplayerContext Methods

### `autoToggle(property, startingValue, milliseconds)`
- `property <string>` The name of the property to synchronize.
- `startingValue <bool>` Initial boolean value.
- `milliseconds <int>` Number of milliseconds before the `startingValue` flips.

Synchronizes a boolean property across clients in a multiplayer session.

### `own(callback)`
- `callback <function>` The function invoked when the request completes. If there is an error, it is passed as a parameter.

Attempts to take ownership of an element, blocking other clients from making changes.

### `sync(name)`
- `name <sting>` The name of the property to synchronize.

Registers a property to synchronize across all clients in the multiplayer session.

### `unsync(name)`
- `name <string>` The name of the property that was synchronized.

Stops synchronization of a property.
