---
id: Score
title: Score (Preview)
---

The score API allows users to define different score types, update scores, as well as define their visual characteristics.

```javascript
const score = require('score-preview');
```

## Creating a Score
 
Every score object is created with a descriptor. The user can choose to specify an `Element` that added scores wille spawn around. Creating a score without attaching it to an `Element` makes it appears direclty in front of the user. It also possible to specify the location of the score when configuring it.

```javascript
// attached to an element
var coinsScore = score.create(this, 'coins');

// directly in fron of the user
var points = score.create('points');
```

## Configuring a Score.

Each parameter of the score can be controlled through calling a method of the score. These functions can be chained. All of the parameters are optional.

```javascript
// declares a score object.
var coinsScore = score.create(this, 'coins');

// sets initial score to be 10. The default is 0.
coinsScore.score(10);

// sets the color of margin score display to be red. the default is col4(1,1,1,1).
coinsScore.color(col(1,0,0,1));

// sets margin score display font size to be 90. The default is 60.
coinsScore.fontSize(90);

// sets score display offset.
// When there is an element attached, this is the local offset.
// When there is none attached, this is the global offset.
coinsScore.offset(vec3(3,3,0));

// sets duration of margin score display to be 2 seconds. Default is 1 second.
coinsScore.duration(2);

// sets duration of margin score display's fade in/fade out to be 1 second. The default value is 0.5 second.
coinsScore.fadeDuration(1);

// spawns the marginal scores at a random location within the specified range. Default is 0.
coinsScore.randomPosRange(1);

// defines the string fromatting of the spawned visualization. [score] will be replaced with the marginal score
// if marginal score is 2, the visualization spawned is 'You received 2 points!'
coinsScore.scoreFormat('You received [score] points!');

// mutes sound fx.
coinsScore.mute(true);

// sets the vine that displays the updated total score
coinsScore.setDisplayVine(this.parent.findOne('..coins-score'));

```

## Adding Points 

Scores can be directly added to the Score object declared. They can also be added through the score manager.

```javascript
// create a score object that will display in front of the user.
var coinsScore = score.create('coins');

// add 2 points
coinsScore.award(2);

// add 2 more points, with an offset.
coinsScore.award(2, vec3(0, 1, 1));

// add 3 more from the module, using the category.
score.award('coins', 3);
```

## Access and Modify Score Parameters

The score manager has reference to all created scores. All score information can be accessed and modified through the manager.

```javascript
var coinsScore = score.getType('coins');
coinsScore.score(10)
	.fontSize(100)
	.color(col(0,0,0,1))
	.offset(vec3(1,2,3))
	.duration(3)
	.fadeDuration(0.7)
	.randomPosRange(1.5)
	.scoreFormat('+ {score} pts') 
	.mute(true)
	.setDisplayVine(this.findOne('..coins-score'));
```

## Messages on Score Change

A local message `score-increase` is dispatched whenever a score increases. A local message `score-decrease` is dispatched whenever a score decreases. Each of these messages include two payloads: the first one is the type name of the increased/decreased score, and the second one is the marginal score.

```javascript
const MSG_SCORE_INCREASE = 'score-increase';

function enter() {
  scoreManager.on(MSG_SCORE_INCREASE, onIncrease);
}

function onIncrease(type, margin) {
  if (type == 'coins') {
    log.info("Coins increased by " + margin);
  }
}

function exit() {
  scoreManager.off(MSG_SCORE_INCREASE, onIncrease);
}
```

## Module Events
- `"score-increase"`
- `"score-decrease"`

## Module Methods

### `create(name)`
- `name <string>` An id for the score.
### `create(element, name)`
- `element <Element>` An element to display the score near.
- Returns: A `ScoreElement` object.

Creates a score object with the specified name and optional `Element`. If a score object with the same name exists, it is replaced.

### `award(name, points, [offset])`
- `name <string>` The ID of the score.
- `points <number>` The points to award.
- `offset <vec3>` *[Optional]* The relative position where the score display should spawn.

Awards (or subtracts) points for a category and display to the user.

### `awardHidden(name, points)`
- `name <string>` The ID of the score.
- `number <number>` The points to award.

Awards (or subtracts) points for a category without displaying to the user.

### `getType(name)`
- `name <string>` The ID of an existing score category.
- Returns: The `ScoreElement` for the given ID or `null`

Fetches the `ScoreElement` for an exising score ID.

### `clearScore(name)`
- `name <string>` The ID of the score.

Sets the value for the given score ID to `0`.

### `clearAll()`

Resets all score values to `0`.

## `ScoreElement` Methods

### `award(value, [offset])`
- `value <number>` The value to award or subtract.
- `offset <vec3>` *[Optional]* The relative postion where the score display should spawn.
- Returns: The updated `ScoreElement`.

Awards or subtracts points and displays to the user.

### `awardWithoutVisualization(value)`
- `value <number>` The value to award or subtract.
- Returns: The updated `ScoreElement`.

Awards or subtracts point without displaying to the user.

### `clearScore()`

Resets the score to `0`.

### `getName()`
- Returns: A `string` describing the score element.

### `score(score)`
- `score <float>` The new score value.

Sets the score value.

### `getScore()`
- Returns: A `number` representing the score value.

Fetches the current score.

### `fontSize(size)`
- Returns: The updated `ScoreElement`.

Sets the font size for the score display.

### `getFontSize()`
- Returns: A `number` representing the font size.

Fetches the font size of the score display.

### `color(color)`
- `color <col4>` The new color.
- Returns: The updated `ScoreElement`.

Sets the font color of the score display.

### `getColor()`
- Returns: A `col4` representing the score display color.

Fetches the color of the score display.

### `offset(offset)`
- `offset <vec3>` The relative position where scores should be spawned.
- Returns: The updated `ScoreElement`.

Sets the relative position of where score displays should be spawned.

### `getOffset()`
- Returns: A `vec3` representing the score display offset.

Fetches the relative position of where score displays should be spawned.

### `setDisplayVine(vine)`
- `vine <Element>` A vine element.
- Returns: The updated `ScoreElement`.

Sets a custom Vine to use to display scores.

### `getDisplayVine()`
- Returns: The `Element` used to display scores.

Fetches the element with a Vine that is used to display scores.

### `duration(dur)`
- `dur <number>` The duration in seconds.
- Returns: The updated `ScoreElement`.

Sets the amount of time, in seconds, a score should display before fading.

### `getDuration()`
- Returns: A `number` representing the duration.

Fetches the amount of time, in seconds, a score should display before fading.

### `fadeDuration(fade)`
- `fade <number>` The duration in seconds.
- Returns: The updated `ScoreElement`.

Sets how long, in seconds, it should take for a score display to fade.

### `getFadeDuration()`
- Returns: A `number` representing fade duration.

Fetches the amount of time, in seconds, it should take for a score display to fade.

### `randomPosRange(range)`
- `range <numner>` A seed (greater than 0) for the random range.
- Returns: The updated `ScoreElement`.

Sets a radius relative to its offset within which scores will be spawned.

### `getRandomPosRange()`
- Returns: The `number` representing the spawn radius.

Fetches the radius within which scores are spawned.

### `scoreFormat(format)`
- `format <string>` The template to use for score display.
- Returns: The updated `ScoreElement`.

Sets a `string` interpolation template to use for displaying formatted strings to display scores. The `format` parameter should contain the substring `"[score]"`. This will be replaced with the score value. For example, the code below might display "You got 5 points!"

```javascript
element.format('You got [score] points!');
```

### `getScoreFormat()`
- Returns: The `string` interpolation template.

Fetches the current score display template.

### `mute(isMuted)`
- `isMuted <bool>` Whether audio should be muted.
- Returns: The updated `ScoreElement`.

Sets whether or not audio playback should be muted.

### `isMuted()`
- Returns: A <bool> representing whether sound effects related to score are currently muted.

Fetches whether score-related sounds are currently muted.
