---
id:Particles
title: Particles
---

The Particles API is available on any element that contains an asset with an underlying Unity Partical System.

```javascript
if (!this.particles) {
	log.error('Asset does not contain a ParticleSystem!');
	return;
}
```

## Emission

Particle emission can be driven through the scripting API.

```javascript
// Emit 10 particles.
this.particles.emit(10);

// Configure particles to emit when a bool schema value changes.
this.particles.emitOn('active', 5);

// Cleanup when the subscription is no longer needed.
this.particles.emitOff('active');
```

> The underlying particle system's maximum particle count will still control the overall system and may not show all particles created through scripting.

## External Forces

External Forces allows emitted particles to be influenced by other particle fields nearby.

```javascript
// Limit the systems influences by another Element.
var field = this.findOne('..(@name=Field)');
this.particles.externalForces.addLimit(field);

//Remove an Element as a limit.
this.particles.externalForces.removeLimit(field);

// Clear all limits from a system's influence list.
this.particles.externalForces.clearLimits();
```

>  An Element must contain a Particle System Force Field component from Unity to be added as a limit.

## Module Properties

### `externalForces <ExternalForces>`
Wrapper for external forces parameters.

## Module Methods

### `emit(count)`
- `count <int>` The number of particles to emit.

Emits particles immediately.

### `emitOn(key, count)`
- `key <string>` Schema key to watch
- `count <int>` The number of particles to emit.

Emits particles when a boolen parameter is set to `true`.

### `emitOff(key)`
- `key <string>` Schema key to unwatch.

Stop listening to a schema key.

## `ExternalForces` Properties

### `enabled <bool>`
Whether the effect is active or not.

## `ExternalForces` Methods

### `addLimit(widget)`
- `widget <ContentElement>` The content element to add as an influencer.

Attempts to add another element as an influencer to the system.

### `removeLimit(widget)`
- `widget <ContentElement>` The content element to remove.

Removes an element acting as an influencer in the system.

### `clearLimits()`
Clears the list of influencer in the particle system.
