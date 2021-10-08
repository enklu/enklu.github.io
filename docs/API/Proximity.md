---
id: Proximity
title: Proximity
---

The Proximity API allows functions in `Behavior` scripts to be executed as a response to proximity events on Elements. This API is available via `require` statements.

```javascript
const proximity = require('proximity');
```

## Subscriptions

Proximity events are dispatched when a Trigger enters a subscribed Element's radius. By default the user is a Trigger, and other Elements can be set as Triggers through their schema. Additionally, a trigger or subscribed Element's radius can be configured through schema editing.

```javascript
function enter(){
	proximity.subscribe(this, 'enter', onTriggerEnter);
	proximity.subscribe(this, 'exit', onTriggerExit);
}

function onTriggerEnter(){
	this.transform.scale = vec3(0.5, 0.5, 0.5);
}

function onTriggerExit(){
	this.transform.scale = vec3(1, 1, 1);
}

function exit(){
	proximity.unsubscribe(this, 'enter', onTriggerEnter);
	proximity.unsubscribe(this, 'exit', onTriggerExit);
}
```

Any Element can be subscribed for a proximity event. Callbacks are invoked with a reference to the Trigger that entered its `innerRadius`. Any Trigger that is above or below a subscribed Element in the hierarchy won't invoke events. It is good practice to call subscribe in a script's `enter` and unsubscribe in `exit`.

The proximity callbacks have optional arguments, which contain information on which listener & trigger were responsible for the event.

```javascript
function onTriggerEnter(listener, trigger) {
  log.info('Proximity Event!');
  log.info('Listener: ' + listener);
  log.info('Trigger: ' + trigger);
}
```

## Schema

All schema configuration is done under the `proximity` namespace.

```javascript
// marks an element as a trigger.
this.schema.setNumber('proximity.trigger', true);

// The distance where an element or trigger will dispatch 'enter' events.
this.schema.setNumber('proximity.innerRadius', 0.25);

// The distance where an element or trigger will dispatch 'exit' events.
this.schema.setNumber('proximity.outerRadius', 2);
```

## Module Events

- `enter` - Dispatched when a Trigger first enters a subscribed Element's `innerRadius`..
- `stay` - Dispatched every frame after a Trigger enters a subscribed Element's `innerRadius`, but hasn't exited its `outerRadius`.
- `exit` - Dispatched when a Trigger exits a subscribed Element's `outerRadius`.

## Module Methods

### `subscribe(element, event, callback)`
- `element <Element>` The element to listen for events applied to it.
- `event <string>` The event to subscribe to.
- `callback <function>` The function invoked when the event occurs.

Subscribes to a proximity event.

### `unsubscribe(element, event, callback)`
- `element <Element>` The element that will be unsubscribed.
- `event <string>` The event to unsubscribe from.
- `callback <function>` The callback to unsubscribe.

Unsubscribes from a proximity event.

### `forceProximityCheck()`

Forces an event check regardless of any previous collisions.
