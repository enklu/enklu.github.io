---
id: Math
title: Math
---

The Math API extends the built-in <span><a style="color:#0000ee" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank"><u>JS Math API</u></a></span>, which is already fully supported. Enklu includes objects for working in three dimensions.

## Vec3
The <code>vec3</code> object is useful for working with element translation and scale, or any other 3D vector math.

This script creates a new vec3 using the function <code>vec3()</code>:
```js
var pos = vec3(0, 0, 0);  // { x:0, y:0, z:0 }
````
<br>
The v object is provided with several constants:
```js
v.zero;     // { x:0, y:0, z:0 }
v.one;      // { x:1, y:1, z:1 }
v.up;       // { x:0, y:1, z:0 }
v.right;    // { x:1, y:0, z:0 }
v.forward;  // { x:0, y:0, z:1 }
````
<br>
The vec3 is not immutable, but for vector math functions, vec3s are treated as immutable objects.
```js
var a = vec3.up;             // { x:0, y:1, z:0 }

// Scalar multiplication
v.scale(a, 5);               // { x:0, y:5, z:0 }

// Vector addition
v.add(a, vec3(1, 0, 0));     // { x:1, y:1, z:0 }

// Dot product
v.dot(a, vec3.forward);      // 0

// Cross product
v.cross(a, vec3.right);      // { x:0, y:0, z:1 }

// Vector length
v.len(a);                    // 1

// Normalize
v.normalize(vec3(8, 0, 0));  // { x:1, y:0, z:0 }

// Distance
v.distance(a, vec3(1, 0, 0));  // 1.4142

// Horizontal distance
v.distanceXZ(a, vec3(1, 5, 0));  // 1.4142

/*
The length & distance functions both have 
squared versions for performance optimizations
*/
v.lenSqr(vec3(0, 2, 0));            // 4
v.distanceSqr(a, vec3(1, 0, 0))     // 2
v.distanceXZSqr(a, vec3(1, 5, 0))   // 2
```

## Quat
The <code>quat</code> is provided for three dimensional rotation.

Not usually useful, but for completeness a quat constructor is provided which accepts hamiltonians.
```js
var rot = quat(1, 0, 0, 1);
```
<br>
What is more useful is the the q object which is provided for constants and basic operations.
```js
// Identity rotation
q.identity;

// Creates a quat from Euler rotations
q.eul(90, 0, 0);

// Identical to q.eul
q.euler(90, 0, 0);
```
<br>
Rotations can be managed using quats and direction Vec3s.
```js
// Create a rotation from two direction Vec3s
var rot = q.fromToRotation(v.forward, v.up);

// Rotate a Vec3 by a quat
var rot = q.rotate(q.eul(0, 90, 0), v.forward);
```
