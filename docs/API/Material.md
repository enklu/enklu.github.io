---
id: Material
title: Material
---

The Material API is available on Elements and is used to modify material variables. Material variables are passed into shaders, to allow for dynamic effects/visuals. It's a good idea to null check first to ensure the target Element has support.

```javascript
if (!this.material) {
	log.error('Asset missing material support!');
	return;
}
```

If you have multiple instances of the same asset in an Experience but want to control only the material of one instance, you can individually make materials unique. Note that this will incur some performance overhead but in most cases is negligible.

```javascript
this.material.makeUnique();
```


## Modifying Parameters

Supported parameter types are: Float/Integer/Vec3/Col. All parameter types can be both retrieved and set.

```javascript
// Float
function flipAlpha() {
	var alpha = this.material.getFloat('_FinalAlpha');
	this.material.setFloat('_FinalAlpha', 1 - alpha);
}

// Integer
function increaseTileCount() {
	var tiles = this.material.getInt('_TileCount');
	this.material.setInt('_TileCount', tiles + 1);
}

// Vec3
function inverseDirection() {
	var direction = this.material.getVector('_WindDir');
	this.material.setVector('_WindDir', v.scale(direction, -1));
}

// Col
function cycleColor() {
	var color = this.material.getColor('_Color');
	this.material.setColor('_Color', col(color.g, color.b, color.r, color.a));
}
```

## RenderQueue

It's possible to change the default RenderQueue of a material if needed. Changing between Opaque and Transparent queues can have unintended side effects depending on the Asset's shader.

```javascript
this.material.renderQueue = 3001;
```

## Tween Integration

Material parameters can be tweened via the Tweening API. Currnetly, parameters have to be set before used for the internal integration to link them.

```javascript
const tween = require('tween')

function fadeIn() {
	this.material.setFloat('_Alpha', 0);
	var twnAlpha = tween.number(this, 'material._Alpha')
		.to(1)
		.duration(2);
	twnAlpha.start();
}
```

## Instance Properties

### `renderQueue <int>`
The RenderQuest this material will use.

## Instance Methods

### `makeUnique()`
Breaks the underlying shared material link, causing this material to be unique.

### `getFloat(param)`
- `param <string>` The property's name.

Gets a float material property.

### `setFloat(param, value)`
- `param <string>` The property's name.
- `value <float>` The new value.

Sets a float material property.

### `getInt(param)`
- `param <string>` The property's name.

Gets a integer material property.

### `setInt(param, value)`
- `param <string>` The property's name.
- `value <int>` The new value.

Sets a integer material property.

### `getVector(param)`
- `param <string>` The property's name.

Gets a vector material property.

### `setVector(param, value)`
- `param <string>` The property's name.
- `value <vec3>` The new value.

Sets a vector material property.

### `getColor(param)`
- `param <string>` The property's name.

Gets a color material property.

### `setColor(param, value)`
- `param <string>` The property's name.
- `value <col4>` The new value.

Sets a color material property.

