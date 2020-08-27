---
id: ReleaseNotes
title: Release Notes
---

## 2020.8.0 - 8/26/2020

### New Features

#### UI Refresh

Dark Mode has arrived! All the power of Enklu in a sleeker, more accessible interface 😎

<img src="https://cdn.enklu.com/web-assets/editor-refresh.png" width="100%" alt="Dark Mode"/>

#### Video Capture

We've made it much easier to capture videos of your experiences -- no code required. You can now start a recording from the main menu (say "Menu" while an experience is playing) or by simply saying "record." Once you've finished, the video
will be delivered to your inbox.

<img src="https://cdn.enklu.com/web-assets/video-recording.gif" width="100%" alt="Video Capture"/>

#### Remote Logging

You can now stream logs from your HoloLens to the Enklu Cloud web editor. This greatly improves your ability to debug experiences in real time.

<img src="https://cdn.enklu.com/web-assets/remote-logging.gif" width="100%" alt="Remote Logging"/>

#### Hand Occlusion

On HoloLens 2, [hands can now occlude](HoloLens/Occlusion) holograms in an experience. This feature is opt-in and can be enabled in the Enklu Cloud web editor.

#### New Graphics API

The new [Graphics Scripting API](API/Graphics) allows power users to interact with your materials and shaders at runtime.

<img src="https://cdn.enklu.com/web-assets/holobeats.gif" width="100%" alt="Graphics API"/>

#### Enklu Node SDK

We have created a new [Open Source SDK](https://github.com/enklu/enklu-node-sdk) to help external devices communicate with your experiences.  Connect buttons, talk to your own servers, or even sync your stage lighting! [See our guide](Scripting/NodeSDK) to get started.

<img src="https://cdn.enklu.com/web-assets/dmxdemo.gif" width="100%" alt="Node SDK"/>

### Improvements

- Logging, both in the HoloLens and the Enklu Cloud web editor, now contains more detail and is more informative.
- When scripting in the web editor, you can more smoothly animate rotation with linear interpolation and spherical linear
interpolation.
- In behavior scripts, it is now possible to work directly with an element's world position, rotation, and scale.

### Fixes

- We have fixed several conditions that might lead to the user being stuck in the Loading screen.
- Voice commands will continue to work after the app has been in the background for awhile.

## 0.50.0 - 8/13/2020

### Improvements

- Users can use ctrl-f in the script editor to search within the file.
- Users with permissions to update an asset can also update its thumbnail.

### Fixes

- If an email address has a special character like "+", it will now show up in collaborator searches.
- Updates to asset thumbnails are reflected immediately.
- Fixed an incorrect link to documentation.

## 0.49.0 - 7/9/2020

### New features

- _Spaces_ provides effortless anchoring of content in your environment. For more information, refer to our docs. Includes better visualization of meshes in-lens, as well as scans that are less blown out by lighting in the web editor.
- With _Mesh Occlusion_, experiences can have much deeper immersion with the physical environment. Spaces come with mesh occlusion by default, with the ability to turn it off via the Enklu Cloud web editor.
- A new Notification system that enables messages to be queued and displayed in front of the user.

### Improvements

- HoloLens edit mode starts out more sleek. Fewer windows start infront of the user letting them view their scene better.
- Float widgets don't default to showing their focus point.
- Anchors are batched together, reducing file size dramatically.
- Vine text/buttons are occluded by default now in new experiences.

### Fixes

- Schema is properly chained/inherited during Element construction.
- Vines properly inherit their parent's schema.
- Button icons can now be occluded.
- Double cursor in experience list is removed.
- Hidden buttons no longer can activate with voice commands (an audible bloop is still heard currently however).
- Leaked GameObjects are cleaned up when exiting edit mode.

## 0.48.0 - 7/6/2020

### Improvements

- Better support for eye gaze.
- Float UI elements are more responsive.
- Cleaner color scheme and fonts.
- Expanded metrics support

### Bug fixes
- Experience loading screen might start behind user.
- Some menus couldn't be closed.
- Experiences sometimes didn't load if an asset failed to load.

## 0.47.0 - 4/30/2020

### Features

- Users can create a new element by dragging an asset from the library and dropping into the hierarchy.
- New users have access to Chapters 3 & 4.

### Improvements

- The menu item Help > Support links to a new feedback page.

### Fixes

- Fixed an error that occasionally appears when an Undo action removes an element.

## 0.46.0 - 4/16/2020

### New Features

- New Scripting API for player scores (preview). Docs are here
- SAI can display prompts with button responses (preview). Docs are here
- Unity users can convert a scan mesh to a .obj.

### Improvements

- Renamed the Unity menu "Tools" to "Enklu".

### Fixes

- Fixed error where calling undo resulted in an error

## 0.45.0 - 4/2/2020

### Features

- Undo/Redo via Edit menu or hotkeys (ctrl-z/ctr-shift-z on windows, cmd-z/cmd-shift-z on mac)
- New experiences start with 3-point lighting
- New users get Chapters 1 & 2

### Improvements

- Scenes to build are defined in Build Settings, not hard coded.
- Updated ace text editor
- Order of elements at the same depth of the hierarchy is now stored and respected

### Fixes

- Fixed issue where dragging elements in the hierarchy sometimes failed
