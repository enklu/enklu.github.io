---
id: Audio
title: Audio
---

The Audio API is available on any Element whose Asset contains an audio clip. It's recommended to use a null check to ensure all instances of your script have their dependencies.

```javascript
if (!this.audio) {
	log.error('Asset missing audio support!');
	return;
}
```

## Controlling Playback

A visible Element containing audio can be started and stopped using `play` and `stop`.

```javascript
this.audio.play();
this.audio.stop();
```


## Modifying Properties

Each of the following properties can be retrieved and set:

```javascript
// Invert looping
this.audio.loop = !this.audio.loop;

// Mute
this.audio.mute = true;

// Volume
this.audio.volume = 0.5;
```

## Tween Integration

Tweening can be used to modify volume over time.

```javascript
const tween = require('tween');

var twnVolume = tween.number(this, 'audio.volume')
	.from(0)
	.to(1)
	.duration(10);
twnVolume.start();
```

## Instance Properties

### `volume <number>`
The volume of the audio source (0.0 to 1.0).

### `loop <bool>`
Whether or not the audio source should loop.

### `mute <bool>`
Mutes or unmnutes the audio source. Mute sets the volume to 0.0. Unmuting restores the previous volume.

### `playOnAwake <bool>`
Whether or not the audio source will automatically start playing on awake.

### `spatialBlend <float>`
How much the audio source is affected by 3D spatialization. 0.0 is full 2D; 1.0 is full 3D.

### `minDistance <float>`
Within the minimum distance, the sound will no longer grow louder.

### `maxDistance <float>`
The maximum distance to which the audio source will attenuate.

### `dopplerLevel <float>`
The doppler scale for the audio source.

### `hangTime <float>`
The amount of time processing should hold at a dB level.

## Instance Methods

### `play()`
Plays the audio source.

### `stop()`
Stops playback on the audio source.

### `mapLevelFloat(element, schemaKey, minDb, maxDb, minVal, maxVal)`
- `element <Elment>` Element to use.
- `schemaKey <string>` Schema key to use.
- `minDb <float>` Minimun dB value.
- `maxDb <float>` Maximum dB value.
- `minVal <float>` Minimum mapped float value.
- `maxVal <float>` Maximum mapped float value.

Maps output level to a schema float value of an element.

### `unmapLevelFloat(element, schemaKey)`
- `element <Elment>` Element to use.
- `schemaKey <string>` Schema key to use.

Removes output level to schema key mapping.

### `mapLevelVec3(element, schemaKey, minDb, maxDb, minVal, maxVal)`
- `element <Elment>` Element to use.
- `schemaKey <string>` Schema key to use.
- `minDb <float>` Minimun dB value.
- `maxDb <float>` Maximum dB value.
- `minVal <Vec3>` Minimum mapped float value.
- `maxVal <Vec3>` Maximum mapped float value.

Maps output level to a schema Vec3 value of an element.

### `unmapLevelVec3(element, schemaKey)`
- `element <Elment>` Element to use.
- `schemaKey <string>` Schema key to use.

Removes output level to schema key mapping.

### `mapLevelBool(element, schemaKey, db)`
- `element <Elment>` Element to use.
- `schemaKey <string>` Schema key to use.
- `db <float>` dB value above which maps to `true`.

Maps output level to a schema boolean value of an element.

### `unmapLevelBool(element, schemaKey)`
- `element <Elment>` Element to use.
- `schemaKey <string>` Schema key to use.

Removes output level to schema key mapping.
