---
id: ControllingAnimations
title: Controlling Animations
---

Animations on Assets can be easily controlled through scripting. If you haven't read through the [Adding Animations](/docs/Assets/AddingAnimationsFromUnity) from Unity guide yet, it's a great starting point for learning how to prepare assets. A completed version of the wolf asset can be found [here](https://drive.google.com/open?id=1g45k0hf16caYwJoNwTqIu98SuaeZYez4).

## Checking an Animator Exists

First things first, an Asset needs to have been setup to support controlling animations. You can check if an Asset has the functionality by seeing if an Animator exists. Since Scripts can be added to multiple Elements which can contain different Assets, it's not a bad idea to always check for an Animator in your scripts for robustness.

```js
function enter() {
  if (this.animator) {
    log.info('Woop! Time to animate!');
  } else {
    log.info('No animator exists for this asset :(');
  }
}
```

## Controlling Animations

The Animator API is pretty simple and drives the underlying asset's animator parameters. A list of available parameter names can be queried:

```js
var parameterNames = this.animator.parameterNames;
for (var i in parameterNames) {
  log.info(parameterNames[i]);
}
```

Parameters can be queried and changed with API calls:

```js
// Bools & Triggers
var open = this.animator.getBool('Run');
this.animator.setBool('Run', !open);

// Floats
var speed = this.animator.getFloat('Speed');
this.animator.setFloat('Speed', speed * 2);

// Ints
var action = this.animator.getInt('Action');
this.animator.setInt(action + 1);
```

For more advanced usages, specific information about an animation clip can also be queried:

```js
var layer = 0;

var playing = this.animator.isClipPlaying('Eating', layer);
log.info(playing);

var currentClip = this.animator.getCurrentClipName(layer);
```

## Scripting the Wolf

Using the provided Wolf, the following script can be used to control it's various animations. For now, they are triggered on/off with time, but could be a result from anything via scripting.

```js
var timers = require('timers');

var animator;

function enter() {
    if (!this.animator) {
        log.error('Animator not found!');
        return;
    }
    
    animator = this.animator;
    
    startRun();
}

function startRun() {
    animator.setBool('Run', true);
    
    timers.setTimeout(endRun, 7000);
}

function endRun() {
    animator.setBool('Run', false);
    
    timers.setTimeout(eat, 3000);
}

function eat() {
    animator.setBool('Eat', true);
}
```

![Wolf Howling](/img/product/animation/control-anim.gif)
