---
id: Graphics
title: Graphics (Preview)
---

The Graphics API is currently in _preview_, meaning that the api may change significantly in the future.

```javascript
const graphics = require('graphics-preview');
```

## Texture registration

An asset's underlying texture(s) can be registered with the Graphics API to associate it with a unique id.
A texture's id can be used to dynamically modify other materials' actively used textures at runtime.

```javascript
const texId = graphics.registerTexture(this, '_MainTex');

otherElement.material.setTexture('_MainTex', texId);
```

It is best practice to unregister textures in a script's exit function when they are no longer needed. 
The texture isn't immediately removed if it is still in use on a material, but will no longer be available from this API. 

```javascript
graphics.unregisterTexture(texId);
```

An example of textures being swapped at runtime:

![Texture Swapping](/img/scripting/texture_remapping.gif)

## Compute buffers

A ComputeBuffer can be created at runtime, and used by referencing its id. 
These can be useful when interacting with advanced shaders that use concepts like bound `RWStructuredBuffer`s.
A buffer is created by passing in one side's dimension, as well as a pixel's stride.
The buffer can be assigned to a write target by id and index.

```javascript
// 1024x1024, 3 channel float (RGB)
bufferId = graphics.createBuffer(1024, 4 * 3);
graphics.setWriteTarget(bufferId, 1);
```

When a buffer is no longer used in scripting, the write targets should be cleared and the buffer destroyed to prevent memory being reserved for it.

```javascript
graphics.clearWriteTargets();
graphics.destroyBuffer(bufferId);
```
