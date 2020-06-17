---
id: Drawing
title: Drawing
---

The drawing API is used to draw primitives. It can be used for debugging or as part of an experience.

```javascript
var drawing = require('drawing');
```
## Registration and Filtering

First, register a function with the drawing module with an identifier. You can apply a filter to limit which functions are rendered. The `filter` method will include every drawing method registered that *starts with* the specified string. Registered functions that have not been filtered out will be called every frame until unregistered.

```javascript
drawing.register('foo', function(ctx) {
  //
});

drawing.register('foo.bar', function(ctx) {
  //
});

// render everything
drawing.filter('');

// render all functions that start with "foo"
drawing.filter('foo');

// render all functions that start with "foo.bar"
drawing.filter('foo.bar');
```

## Context

Each registered function will be called with a drawing context. This context object has many useful properties for debugging or creative coding. Each function on the context returns the context so that calls may be chained together.

```javascript
drawing.register('ex', function(ctx) {
  ctx.stroke(0, 0, 1)
     .line(vec3(0, 0, 0), vec3(1, 0, 0));
});
```

## Matrices

Before drawing, it's important to understand the matrix stack. This stack is used to transform primitives that are drawn. The current matrix transformation with be applied to any subsequent drawing calls. Building a matrix sounds hard but it's been made quite simple by the translation, rotation, and scale methods. These methods immediately transform the current matrix.

Each time a registered callback is called, the stack will be cleared and the current matrix will be reset.

```javascript
ctx
	.rotate(Math.PI, 0, 0)
	.translate(0, 0, 1)
	.translate(0, 1, 0)
	.scale(1, 2, 2);
```

## 3D Primitives

Draw a wire box.

```javascript
var width = 10,
    height = 7,
    depth = 5,
    size = 20;

ctx.box(width, height, depth);
ctx.box(size);
```

Draw a unit sphere with configurable smoothness. Use matrices to scale. The smoothness parameter passed into `sphere` uses a subdivision method to construct the sphere geometry. In general a value higher than 2 or 3 will never be necessary as the number of vertices doubles each time.

```javascript
// default quality
ctx.sphere();

// higher quality
ctx.sphere(1);
ctx.sphere(2);
ctx.sphere(3);
```

## Module Methods

### `register(category, callback)`
- `category <string>` An identifier associated with this callback.
- `callback <function>` Called every frame. A `Context` object is passed as parameter.

Registers a callback for drawing.

### `unregister(callback)`
- `callback <function>` The function that should no longer be called.

Removes a callback for drawing.

## `Context` Class Methods

### `stroke(color)`
- `color <col4>`
### `stroke(r, g, b)`
- `r <number>`, `g <number>`, `b <number>`
### `stroke(r, g, b, a)`
- `r <number>`, `g <number>`, `b <number>`, `a <number>`

Sets the color that all primitives will be drawn with. Currently the only supported property is line color.

### `line(from, to)`
- `from <vec3>` Starting point for the line.
- `to <vec3>` End point for the line.
### `line(xFrom, yFrom, zFrom, xTo, yTo, zTo)`
- `xFrom <double>`, `yFrom <number>`, `zFrom <numner>` The x, y, z values of the starting point of the line.
- `xTo <double>`, `yTo <double>`, `zTo <double>` The x, y, z values of the end point of the line.

Draws a line.

### `lines(points)`
- `points <vec3[]>` The list of points to create line segments from.

Creates line segments form pairs of start and end points.

### `linestrip(points)`
- `points <vec3[]>` The list of points to connect.

Connects a series of points. Instead of each line segment needing two points, each point draws a line to the next.

### `triangles(vertices, indices)`
- `vertices <vec3>` A list of points that comprise the triangles.
- `indices <int>` A list if indices in `vertices` that describe individual triangles.

Draws a mesh of triangles. When drawing custom 3D shapes, it's best to use the `triangles` API rather than iterating and drawing triangles in JavaScript.

### `resetMatrix()`
Make the existing matrix an identity matrix.

### `pushMatrix()`
Push a new identity matrix onto the stack.

### `popMatrix()`
Get rid of the current matrix and pop the previous one off the stack.

### `translate(to)`
- `to <vec3>` Vector describing the new position.
### `translate(x, y, z)`
- `x <number>`, `y <number>`, `z <number>`

Applies translation to the matrix.

### `rotateX(x)`
- `x <number>`
### `rotateY(y)`
- `y <number>`
### `rotateZ(z)`
- `z <number>`
### `rotate(x, y, x)`
- `x <number>`, `y <number>`, `z <number>`

Applies rotation to the matrix.

### `scale(scalar)`
- `scalar <number>` The value to scale all axes by.
### `scale(scale)`
- `scale <vec3>` Vector describing scale for each axis.

Apply scale to the matrix.

### `box(size)`
- `size <number>` The value for width, height, and depth.
### `box(width, height, depth)`
- `width <number>`, `height <number>`, `depth <number>`

Draws a box.

### `sphere()`
### `sphere(smoothness)`
- `smoothness <number>` The number of subdivisions to use to construct the sphere geometry. In general a value higher than 2 or 3 will never be necessary as the number of vertices doubles each time.

Draws a unit sphere with configurable smoothness. Use matrices to scale.

### `octohedron()`

Draws an octohedron.

### `dodecahedron()`

Draws a dodecahedron.
