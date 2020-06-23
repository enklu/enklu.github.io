---
id: Timers
title: Timers
---

The Timers API allows functionality to be invoked after a specific amount of time has elapsed.

```javascript
const timers = require('timers');
```

## Module Methods

### setTimeout(callback, delayMs)
- `callback <function>` The function to be invoked.
- `delayMs <int>` The amount of time in milliseconds to wait before invoking the callback once.
- Returns: `<int>` A locally unique ID.

Schedules a function to be invoked after a specific amount of time has elapsed. Delays are measured in milliseconds. A unique id is returned from every `setTimeout` call.

```javascript
timers.setTimeout(function() {
  log.info('500ms has elapsed!');
}, 500);
```

### clearTimeout(id)
- `id <int>` The ID of the timeout to cancel.

Cancels an awaiting timeout using an ID returned from `setTimeout`.

```javascript
var id = timers.setTimeout(function(){
  log.info('500ms has elapsed!');
}, 500);

timers.clearTimeout(id);  // This cancels the waiting invocation.
```

### setInterval(callback, intervalMs)
- `callback <function>` The function to be invoked.
- `intervalMs <int>` The amount of time in milliseconds between invocations of the callback.
- Returns: `<int>` A locally unique ID.

Schedules a function to be invoked at a repeated interval. Delays are measured in milliseconds and will continue to keep invoking repeatedly with the same interval until canceled. A unique id is returned from every `setInterval` call, to be used with `clearInterval`.

```javascript
timers.setInterval(function() {
  log.info('The time is: ' + time.now());
}, 1000);
```

### clearInterval(id)
- `id <int>` The ID of the interval to cancel.

Cancels an awaiting interval using an ID returned from `setInterval`.

```javascript
var id = timers.setInterval(function() {
  log.info('The time is: ' + time.now());
}, 1000);

timers.clearInterval(id);
```

