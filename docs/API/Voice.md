---
id: Voice
title: Voice
---

The Voice API provides access to registering callbacks when certain keywords are recognized.

```javascript
const voice = require('voice');
```

## Registration

A keyword can be registered with `register` or `registerProtected`. Protected keywords require the word "debug" to be spoken before being recognized.

```javascript
function enter() {
  voice.register('explode', function() {
    myExplosionAsset.visible = true;
  });

  voice.registerProtected('cleanup', function() {
    myExplosionAsset.visible = false;
  });
}

function exit() {
  voice.unregister('explode');
  voice.unregister('cleanup');
}
```

## Module Methods
### `register(command, callback, optional bool)`
- `command <string>` The voice command to register.
- `callback <function>` The function that will be invoked when the command is recognized. The command is passed as a parameter.
- `optional bool <bool>` 
  - Set `false` to disable audio feedback.
  - Set `true` to enable audio feedback. If no bool is supplied, defaults to `true`.

Registers a voice command.

### `registerProtected(command, callback)`
- `command <string>` The voice command to register.
- `callback <function>` The function that will be invoked when the command is recognized. The command is passed as a parameter.
- `optional bool <bool>` 
  - Set `false` to disable audio feedback.
  - Set `true` to enable audio feedback. If no bool is supplied, defaults to `true`.

Registers a protected voice command. Protected voice commands must be spoken after the word "debug".

### `unregister(command)`
- `command <string>` The command that should no longer be recognized.

Removes registration of a voice command.
