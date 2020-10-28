---
id: WebPlayMode
title: Web Play Mode
---

Don't always have access to a device? Waiting for a battery to recharge? No problem!

You can continue to build with Enklu Cloud's blazing fast iteration times by using Web Play Mode to test your experiences.

// TODO: Liam's awesome gif here.

## What is Web Play Mode?

Web Play Mode is where your experience comes to life, without the extra weight of the editor tools. 
On device, this is the default mode that experiences load into. From Enklu Cloud, you can switch to play mode at any time while developing an experience.

This can be useful for getting a first person view of the experience and testing any potential scripting that occurs at the start of a session.
While in Web Play Mode, edits made by you or other collaborators will update live, similar to being in HoloLens.

> Note: Interactions are limited to mouse clicks. There is currently no emulation for device specific input like hand tracking.

## Using Web Play Mode

To start viewing your experience in Play Mode, click on the Play icon above the canvas. 
A new window will open and begin loading the experience. The existing editor window can still be used to develop side by side with Play Mode.

![Play Button](/img/product/editor/ControlBar.png)

### Use Embedded Web Play Mode

For users who prefer to work in one window, the Editor settings has an option for using an embedded play mode.
With this setting active, the existing canvas will load into play mode when the Play button is used. 
Clicking the Play button again will return the canvas to edit mode.

![General Settings](/img/product/editor/GeneralSettings.png)

> Note: Depending on your computer specs, this setting may lead to increased performance compared to using the popup.

### Navigating the Scene

Camera controls are similar to edit mode, but slightly different to better support a first person view. 
Use the WASD keys to move through the scene. To rotate the camera, right click and drag with your mouse.
If you need to raise/lower the camera, use the Q and E keys. 

IUX Buttons can be activated by clicking on them with your mouse.

### Changing IUX Style

For any experience designed primarily for Web Play Mode, the visuals used by the IUX system can take on a more web-friendly appearance.
From the Scene settings, use the IUX Visual Style option to update the display type the experience will use. 
Changes to this setting will appear after reloading the editor.

![IUX Settings](/img/product/editor/IUXSettings.png)
