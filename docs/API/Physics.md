---
id: Physics
title: Physics
---

The Physics API provides access to simple raycasting. In time, they'll be more functionality available.

```javascript
const physics = require('physics');
```

## Raycasting

A raycast can be used to see if a ray intersects with a specific Element.

```javascript
var element = this.findOne('..(@name=Cube)');

var hit = physics.raycast(v.zero, v.forward, element);

if (hit) {
	log.info('Hit! ' + hit);
} else {
	log.info('Miss :(');
}
```

## Module Methods

### `raycast(start, direction, element)`
- `start <vec3>` Start point.
- `direction <vec3>` Direction the ray is cast.
- `element <Element>` The target element.
- Returns: A `vec3` representing where the ray touched the element or null if the element is not hit.

Casts ray and tests for collision with an Element.
