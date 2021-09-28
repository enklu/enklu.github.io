---
id: Tween
title: Tween
---

The Tween API provides element tweening operations. These are **highly recommended** over tweening objects "by hand" inside of your own update loops. Not only does the tween API provide excellent easing functions and a terse API, it is implemented as part of the player runtime so it is highly optimized.

```javascript
const tw = require('tween');
```

## Creating a Tween

Tweens are created specific to the `name` and `type` of prop they affect. To that end, we provide three types of tweens: `number`, `vec3`, and `col4`. The vector types are tweened component-wise.

> Neither the name nor the type of the prop may be changed after the tween has been created.

```javascript
// get the element
var el = this.findOne('..tweener');

// create a tween on the vec3 'scale' prop
var vectorTween = tw.vec3(el, 'scale');

// create a tween on the col4 'color' prop
var colorTween = tw.col4(el, 'color');

// create a tween on the number 'alpha' prop
var alphaTween = tw.number(el, 'alpha');
```

## Configuring a tween

Each parameter on a tween is configured through a corresponding function on the tween. These functions can be chained to configure tweens very quickly and easily.

> Most parameters are _optional_. The only required parameter is `to`, which provides the value to tween to.

```javascript
var a = tw
	.number(this.findOne('..covering'), 'alpha')

	// (required) The value to tween to.
	.to(1)

	// (optional) The starting value. If not specified, the starting value will be the current value.
	.from(0)

	// (optional) The duration, in seconds, of the tween. Defaults to 1.
	.duration(2.5)

	// (optional) The delay, in seconds, before the tween should start.
	.delay(1)

	// (optional) The easing equation to use. Defaults to tw.easing.Linear.
	.easing(tw.easing.CubicOut)

	// (optional) A function to call when the tween is first started.
	.onStart(function() { log.info('Started!'); })

	// (optional) A function to call after the tween has been completed
	.onComplete(function() { log.info('Complete!'); });
```

## Tween Playback

Once a tween is created, playback is controlled by functions on the tween itself. Note that once a tween has been started, the tween's configuration may not be changed. Note that none of these functions return the tween object. This is intentional as nothing may be configured after `start` has been called.

```javascript
var a = tw.number(el, 'foo').to(1);

// starts the tween
a.start();

// pauses the tween at the current time
a.pause();

// resumes the tween from the paused state
a.resume();

// stops the tween
a.stop();
```

## Module Methods
### `number(element, prop)`
### `vec3(element, prop)`
### `col4(element, prop)`
- `element <Element>` The element to apply the tween to.
- `prop <string>` The property to apply the tween to.
- Returns: `<Tween>` A new `Tween` object.

Creates a tween for a `number`, `vec3`, or `col4`.

## `Tween` Class Methods
### `to(target)`
- `target <object>` The target.
- Returns: `<Tween>` The updated `Tween`.

Sets the target value for the tween.

### `from(start)`
- `start <object>` The initial value.
- Returns: `<Tween>` The updated `Tween`.

Sets the start value for the tween.

### `easing(type)`
- `type <string>` The easing type.
- Returns: `<Tween>` The updated `Tween`.

Sets the easing type for the tween. Supported easing types:
- `"Linear"`
- `"BounceIn"`
- `"BounceOut"`
- `"BounceInOut"`
- `"CubicIn"`
- `"CubicOut"`
- `"CubicInOut"`
- `"ExpoIn"`
- `"ExpoOut"`
- `"ExpoInOut"`
- `"QuadraticIn"`
- `"QuadraticOut"`
- `"QuadraticInOut"`
- `"QuarticIn"`
- `"QuarticOut"`
- `"QuarticInOut"`
- `"QuinticIn"`
- `"QuinticOut"`
- `"QuinticInOut"`
- `"JellyfishWave"`

### `duration(seconds)`
- `seconds <number>` The duration of the tween in seconds.
- Returns: `<Tween>` The updated `Tween`.

Sets the duration of the tween in seconds.

### `delay(seconds)`
- `seconds` The delay duration in seconds.
- Returns: `<Tween>` The updated `Tween`.

Sets an amound of time, in seconds, to wait before the tween starts.

### `onComplete(callback)`
- `callback <function>` Called when the tween completes.
- Returns: `<Tween>` The updated `Tween`.

Registers a function that is called when the tween completes.

### `onStart(callback)`
- `callback <function>` Called when the tween starts.
- Returns: `<Tween>` The updated `Tween`

Registers a function that is called when the tween starts.

### `start()`

Starts the tween.

### `stop()`

Stops and completes the tween.

### `pause()`

Stops the tween while preserving state so it may be started again.

### `resume()`

Resumes a paused tween.

### `loop()`

Automatically starts a tween until `.pause()` or `.stop()` is called.
