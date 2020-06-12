---
id: Animator
title: Animator
---

The Animator API is available on any Element that contains an Asset supporting animations. Since scripts can be added to multiple Elements, it's a good idea to null check to ensure your script has its dependencies.

```javascript
if (!this.animator) {
	log.error('Asset missing animator support!');
	return;
}
```

## Querying Available Parameters

Parameter names can be queried via the API. Names are required for driving animation changes and are case sensitive. Viewing the available parameters can be useful in debugging.

```javascript
var names = this.animator.parameterNames;
for (var i in names) {
	log.info('Parameter: ' + names[i]);
}
```


## Modifying Parameters

Each parameter is either a Boolean/Trigger, Integer, or Float. The API provides access for querying existing parameter values as well as setting new values.

```javascript
// Booleans & Triggers
function toggleOpen() {
	var isOpen = this.animator.getBool('Open');
	this.animator.setBool('Open', !isOpen);
}

// Integers
function changeIdle() {
	var current = this.animator.getInt('Idle');
	this.animator.setInt('Idle', (current + 1) % 4);
}

// Floats
function changeSpeed() {
	var curSpeed = this.animator.getFloat('Speed');
	this.animator.setFloat('Speed', curSpeed * 2);
}
```

## Querying Clips

The current playing clip name can be queried, as well as whether specific clips are playing. This can be useful to determine if a specific clip has finished playing.

```javascript
var layer = 0;
log.info('Current playing: ' + this.animator.getCurrentClipName(layer));

log.info('Is running: ' + this.animator.isClipPlaying('Run', layer));
```

## Tween Integration

Animator parameters can be tweened via the Tweening API. Currently, parameters have to be set first for the internal integration to link.

```javascript
const tween = require('tween');

function enter() {
	this.animator.setFloat('Speed', 0);

	var twnSpeed = tween.number(this, 'animator.Speed')
		.to(5)
		.duration(3);
	twnSpeed.start();
}
```

## Instance Properties

### `parameterNames <Array>`
- List of all available animation parameter names for the current element.

## Instance Methods

### `getBool(name)`
- `name <string>`

Returns the value of the given boolen parameter. 

### `setBool(name, value)`
- `name <string>`

Sets the value of the given boolen parameter. 

### `getInt(name)`
- `name <string>`

Returns the value of the given integer parameter. 

### `setInt(name, value)`
- `name <string>`

Sets the value of the given integer parameter. 

### `getFloat(name)`
- `name <string>`

Returns the value of the given float parameter. 

### `setFloat(name, value)`
- `name <string>`

Sets the value of the given float parameter. 

### `getCurrentClipName([layer])`
- `layer <int> [Optional]` The animation layer index check.

Returns the name of animation currently playging with the highest weight.
 
### `isClipPlaying(clipName, [layer])`
- `clipName <string>` The name of the animation clip to search for.
- `layer <int> [Optional]` The animation layer index check.
