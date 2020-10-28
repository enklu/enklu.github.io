---
id: ReleaseNotes
title: Release Notes
---

## 2020.10.0 - 10/27/2020

### New Features

#### Enklu Embedded

Does your current workflow make you bounce between Unity and the web editor? Have you dreamt of a world where editing an asset in Unity would also edit that asset in the web editor?

Introducing Enklu Embedded in 2020.10! Enklu Embedded allows for users to embed Enklu Cloud content into their Unity scenes. It also enables Unity developers the ability to sync 3D assets from Unity back to Enklu Cloud.

With Enklu Embedded, Unity developers can enjoy the freedom of Unity with the rapid iteration and real-time synchronization of Enklu Cloud (talk about having your cake and eating it too!).

For more information on Enklu Embedded, check out our official guide [here](Embedded/EmbeddedSetup).


![Enklu Embedded](/img/product/embedded/VolumeUpdates.gif)



#### Web Play Mode

New to Enklu Cloud is Web Play Mode! Web Play Mode allows you to test your experience directly from the web editor, without needing to don a headset. You can switch to Web Play Mode via the Play button at the top of the canvas.

Web Play Mode comes in two varieties: Pop-up and Embedded. You can toggle which one you prefer via the Editor Settings tab (Pop-up is enabled by default).


![Web Play Mode](/img/product/releases/webplay.gif)


### Improvements

#### Sharing Experiences

Adding collaborators to your project should be easier than ever with our new sharing experiences UX! We've added a new Share button next to your user portrait that will allow you to add, remove, and adjust the permissions for all collaborators on a project.

For more tips on editing collaborators and permissions, check out our [official guide](WebEditorBasics/SharingExperiences) on sharing your experiences!

![Sharing Experiences](/img/product/editor/sharing/share_button_and_modal.gif)


#### HoloLens Editor IUX Tweaks

Starting with 2020.10, we'll be rolling out improvements to our HoloLens editor IUX. In 2020.10, we've made selecting buttons via gaze in-lens more ergonomic than ever before! Your gaze should now "stick" to a button when your gaze reticle is close to it. Additionally, you will now experience less gaze "wobble" than before!

#### Loading Screen

Say goodbye to ambiguous black screens! We've added a loading screen to your project window when initializing a project.

![Loading Screen](/img/product/releases/loading_screen.gif)


### Fixes

#### Misc. Bug Fixes

- Fixed a bug where refreshing a script did not update it for all collaborators in the project.
    - Removed the refresh button entirely, scripts now refresh automatically.
- Fixed an issue where users could make internal schema properties throw exceptions.
- Users can no longer undo changes made in a previous experience after switching to a different project.


***


## 2020.9.0 - 9/29/2020

### New Features

#### Post-Processing: Bloom

Have you always wanted to add a satisfying glow to your experiences? Or make your scene look like something out of Tron or a video game? Well, you’re in luck! 

New to Enklu Cloud this release is our first in-editor, post-processing shader: **Bloom**! You can access Bloom settings in your project by navigating to the Scene Settings tab, on the left sidebar of the editor.  

For more information on Bloom, check out our official guide [here](WebEditorBasics/PostProcessing).

![Bloom](/img/product/releases/2020.9/bloom.gif)

### Improvements

#### Scripting UI/UX

Finding and editing a script in Enklu Cloud has never been easier with our improved Scripting UI! There’s now a dedicated tab for your Scripts right next to your Assets.

![Script Tab](/img/product/releases/2020.9/script_tab.gif)

We’ve also reduced the clicks it takes to edit your script, making it even easier to alter your asset’s scripts. Click the thumbnail of the script on an asset, and it will pull it up on the Script tab on the left sidebar of the editor!

![Script Preview](/img/product/releases/2020.9/script_edit.gif)

#### Scene Settings

Along with Bloom comes a UI revamp of the Scene Settings tab on the Hierarchy Window. We’ve placed each section in their own collapsable menu. This will allow you to find the scene settings you want to change without having to scroll too far.

![Scene Settings](/img/product/releases/2020.9/scene_settings.gif)

#### Rendering Performance

Experiences with a very large amount of assets should now see a performance boost! Before, rendering performance would degrade as scene density increased. Now, it will no longer add extra rendering complexity past the expected rendering cost of your asset (which is based on mesh or shader complexity).

### Fixes

#### Live Update

We've fixed a bug that would’ve disrupted live updating after a device reconnects to Enklu Cloud after getting disconnected from the internet. Users are now notified upon reconnection if any changes have been made while they were offline.

#### Misc. Bug Fixes

- **Logging**: Introduced the ability to log `null`, and raw json without exceptions.
- **TouchJs**: Adjusted hit.position and hit.normal so that they are now proper Vec3s.
- **Avatar icons**: Fixed an issue that caused leaked icons, missing device thumbnails, and empty abbreviations for the user.
- Fixed a bug that caused the Articulated Hand controller to fail at app start.
- Null scripts are no longer saved in the editor.
- New scripts from collaborators are now acknowledged in the project file.
- Fixed a bug that caused exceptions while using SAI after switching experiences.

***

## 2020.8.0 - 8/26/2020

### New Features

#### UI Refresh

Dark Mode has arrived! All the power of Enklu in a sleeker, more accessible interface 😎

<img src="https://cdn.enklu.com/web-assets/editor-refresh.png" width="100%" alt="Dark Mode"/>

#### Video Capture

We've made it much easier to [capture videos of your experiences](HoloLens/VideoRecording) -- no code required. You can now start a recording from the main menu (say "Menu" while an experience is playing) or by simply saying "record." Once you've finished, the video
will be delivered to your inbox.

<img src="https://cdn.enklu.com/web-assets/video-recording.gif" width="100%" alt="Video Capture"/>

#### Remote Logging

You can now [stream logs from your HoloLens](HoloLens/RemoteDebugging) to the Enklu Cloud web editor. This greatly improves your ability to debug experiences in real time.

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

***

## 0.50.0 - 8/13/2020

### Improvements

- Users can use ctrl-f in the script editor to search within the file.
- Users with permissions to update an asset can also update its thumbnail.

### Fixes

- If an email address has a special character like "+", it will now show up in collaborator searches.
- Updates to asset thumbnails are reflected immediately.
- Fixed an incorrect link to documentation.

***

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

***

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

***

## 0.47.0 - 4/30/2020

### Features

- Users can create a new element by dragging an asset from the library and dropping into the hierarchy.
- New users have access to Chapters 3 & 4.

### Improvements

- The menu item Help > Support links to a new feedback page.

### Fixes

- Fixed an error that occasionally appears when an Undo action removes an element.

***

## 0.46.0 - 4/16/2020

### New Features

- New Scripting API for player scores (preview). Docs are here
- SAI can display prompts with button responses (preview). Docs are here
- Unity users can convert a scan mesh to a .obj.

### Improvements

- Renamed the Unity menu "Tools" to "Enklu".

### Fixes

- Fixed error where calling undo resulted in an error

***

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
