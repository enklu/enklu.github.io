---
id: System
title: System
---

A global <code>system</code> object is provided to scripts. This object describes an API for working with objects outside of a specific experience—like devices or experience management.

## System Methods

A handful of methods are exposed for managing the system.

```js
// Places the origin of the experience at the current device position.
system.recenter();

// Terminates the application. This does nothing on non-HoloLens targets.
system.terminate();

// Restarts the application. This does nothing on non-HoloLens targets.
system.restart();
```

<br>

## Device

Device specific information is available through the <code>device</code> property.

The currently running version of Enklu. This value will vary between platforms, but is always in a semver form.

```js
var v = system.device.enkluVersion;
```

<br>

The version string of UWP. This function returns an empty string on non-UWP platforms.
```js
var v = system.device.uwpVersion;
```

<br>

The battery percentage given as a value between 0 and 1.
```js
var batt = system.device.battery;
```

<br>

A unique id for this hardware. This value is constant between sessions and even application updates. A new install will change the value.
```js
var id = system.device.hardwareId;
```

<br>

### Video Capture

Video Capture is available on devices that support it. Due to the asynchronous nature of underlying libraries, all scripting logic that depends on video capture status should occur in the callbacks provided. If you use video capture in your experience, it's best to call <code>system.device.video.teardown();</code> in an <code>exit()</code> function.

```js
// Whether the device is currently recording.
log.info('Recording: ' + system.device.video.isRecording);

// Gets the device ready to record videos.
system.device.video.setup(function(success) {
  log.info('Video ready: ' + success);
});

// Starts recording a video.
system.device.video.start(function(success) {
  log.info('Recording started: ' + success);
});

// Starts recording a video to a custom path.
system.device.video.startCustomPath(function(success) {
  log.info('Recording started:' + success);
});

// Stops recording a video.
system.device.video.stop(function(path) {
  log.info('Video saved to: ' + path);
});

// Cleans up video capture on the device.
system.device.video.teardown();
```

<br>

### Image Capture

Image capture is available on devices that support it. Note: This API is likely to change in the future to be more aligned with the video capture API

```js
// Optional - Potentially reduces capture() call time on some devices.
system.device.image.warm(function(success) {
  log.info(success);
});

// Captures an image.
system.device.image.capture(function(path) {
  log.info('Image taken: ' + path);
});

// Captures an image with a specific path.
system.device.image.captureCustomPath(function(path) {
  log.info('Image taken: ' + path)
}, 'myImage');

system.device.image.abort(function(success) {
  log.info('Image capture aborted: ' + success);
});
```

<br>

## Experiences

The <code>experience</code> object allows a user to query and load their experiences.

Before using, it's best to call first call <code>refresh()</code>. This will check the network for updates and download any new experience data. Without calling this first, the experience API will be of limited use. Once <code>refresh()</code> has been called, all of the other methods are synchronous.

```js
system.experiences.refresh(function(error) {
    if (error) {
        log.error('There was an error!');

        // handle error
    }
});
```

<br>

Experiences may be retrieved in a variety of ways.

```js
// get all of my experiences
var experiences = system.experiences.all();

// get only specific experiences
var a = system.experiences.byName('Zoo');
var b = system.experiences.byId(id);
```

<br>

Each experience data object that comes back will have the following properties:

```js
{
    id,          // string - unique id of this experience
    name,        // string
    description, // string
    isPublic,    // boolean - true iff experience is publicly shared
    createdAt,   // string - UTC timestamp
    updatedAt    // string - UTC timestamp
}
```

<br>

Finally experiences may be played. Note that these methods require the unique id of the experience.

```js
// enter play mode
system.experiences.play(a.id);

// enter edit mode
system.experiences.edit(a.id);
```

<br>

## Login

Scripts can check if a user is logged into an account or using a guest account to view a public or bundled experience. The user can be prompted to login, or logged out through this API as well.


Check if the user is logged in.
```js
log.info(system.isLoggedIn);
```

<br>

Prompt the user to login.
```js
system.login();
````

<br>

Logs out the current user.
```js
system.logout();
```

<br>

## Session

A session is a timespan (set by <code>start</code> and <code>stop</code> calls) that associates specific player actions with a user. Calling <code>start</code> on the session api will bring up a QR code scanner which will prompt a user to scan a QR code generated for a specific experience. Once the QR is scanned and the session is created, it is possible for any content generation or player action to incorporate session data. For example, snaps which are created and uploaded during an active session will generate an association between the session user and the specific snap taken.

Start a new session:
```js
system.session.start(function(error, sessionInfo) {
    if (error) {
        log.warn('Could not start session: ' + error);
        return;
    } 

    log.info('Started a new session for user: ' + sessionInfo.user.id);
});
```

<br>

Stop a current session:
```js
system.session.stop();
```

<br>

Access to the current session information:
```js
var sessionInfo = system.session.current;
var sessionId = sessionInfo.sessionId;
var user = sessionInfo.user;
var userId = user.id;
var inventory = user.items;
```

<br>

Listen for sessions to start and end from another script:
```js
system.session.on('created', function(sessionInfo) {
    log.info('Started a new session for user: ' + sessionInfo.user.id);
});

system.session.on('ended', function() {
    log.info('Session ended');
});
```

<br>

## User

A user is currently bound to each session. While a session represents a specific timeframe within an experience, a user provides a persistent collection of data. Currently, a user consists of <code>id</code> and <code>items</code>.

Check to see if a user has a specific item:
```js
system.session.on('created', function(sessionInfo) {
    var user = sessionInfo.user;
    var items = user.items;

    var foundItem = false;
    for (var i = 0; i < items.length; ++i) {
        if (items[i].name === 'Light Saber') {
            foundItem = true;
            break;
        }
    }

    log.info('Found Light Saber: ' + foundItem);
});
```

<br>

## Inventory

A user may own specific items which will populate on the <code>user</code> object within a <code>session</code>.

Item Properties:
```js
{
    // The inventory item's identifier.
    id: <guid>,

    // The name of the inventory item. 
    name: <string>,

    // A description of the item.
    description: <string>,

    // The name of the thumbnail as it appears 
    // in the environments inventory bucket.
    thumbnail: <uri>,

    // The total quantity of the item the user owns.
    quantity: <number>
}
```

<br>

## Cursor

By default, the cursor is only visible when it is near an IUX activator. Setting <code>forceShow</code> to be <code>true</code> enables the cursor to always be shown.
```js
// Forces the cursor to be shown.
system.cursor.forceShow = true;
```

<br>

## Camera

The camera's near and far planes can be modified through scripts to modify the default frustum culling ranges.
```js
// Changes the near & far planes, measured in meters.
system.camera.nearPlane = 0.75;
system.camera.farPlane = 20;
```


