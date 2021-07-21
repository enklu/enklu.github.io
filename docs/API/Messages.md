---
id: Messages
title: Messages
---

The Messages API provides global message dispatching for your experience's scripting. Messages can be dispatched via `dispatch` and listened to with `on` and `off`.

```javascript
const messages = require('messages');
```
## Basic Usage

```javascript
// One element subscribes to a message.
var treasure = this.find('..(@name=Treasure)');

function showTreasure(visible) {
  treasure.visible = visible;
}

messages.on('show-treasure', showTreasure);

...

// And some other element sends a message. 
var messages = require('messages');

messages.dispatch('show-treasure', true);
```
## Module Methods

### `on(event, callback)`
- `event <string>` The event to listen for.
- `callback <function>` The callback to invoke when the message is received.

Subscribes to an event.

### `off(event, callback)`
- `event <string>` Then even previously subscribed to.
- `callback <function>` The previously registered callback.

### `dispatch(event, [payload])`
- `event <string>` The event to send.
- `payload <object>` [Optional] Event data.

Notifies all subscribers of an event.

**Make sure that you unsubscribe to messages or you could trigger a memory leak!** 

Example of subscribing and unsubscribing

```
function enter() {

  // If there is a trigger message
  if (TRIGGER_MSG) {
    // listen for the trigger message to start SAI.
    messages.on(TRIGGER_MSG, increaseMagic);
  }
  
  if (RESET_MSG) {
    // listen for the trigger message to start SAI.
    messages.on(RESET_MSG, reset);
  }
}

/**
 * Called before the script is removed or rebuilt.
 */
function exit() {
  
   if (TRIGGER_MSG) {
    // listen for the trigger message to start SAI.
    messages.off(TRIGGER_MSG, increaseMagic);
  }
  
    if (RESET_MSG) {
    // listen for the trigger message to start SAI.
    messages.off(RESET_MSG, reset);
  }
  
}

```
