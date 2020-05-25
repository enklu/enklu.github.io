---
id: API_Random
title: Random
---

The Random API provides several utilities for random value generation that aren't covered by the built-in <span><a style="color:#0000ee" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank"><u>JS Math API</u></a></span>.  Use the <code>random-preview</code> import to access extended random value utilities. 

Note that these values are not intended to be used in cryptography.  All documentation for this Random API uses proper interval notation. For example, <code>[0, 1)</code> means the value may equal 0 but excludes 1.


## Floats

```js
// Imports the Random API
const random = require('random-preview');

// Generates a random float in (0, 1)
var val = random.value();

// Generates a random float in [min, max]
var val = random.range(0, 10);
```

## Integers

```js
// Imports the Random API
const random = require('random-preview');

// Generates a random int in [min, max]
var val = random.rangeInt(0, 10);

/*
Generates a random index for an array
This will return an int value in [0, len)
*/
var val = random.index(myArray.length);
```

## 3D

```js
// Imports the Random API
const random = require('random-preview');

/*
Generates a random Quat. This method will produce a distribution 
that is uniform across the full rotation of each axis, rather than 
component wise, which produces an unequally weighted distribution.
*/
var a = random.quat();

// Generates a random distribution of two dimensional vectors.
var vecs = random.distribution(radius, count);
```