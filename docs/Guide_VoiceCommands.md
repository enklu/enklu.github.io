---
id: Guide_VoiceCommands
title: Voice Commands
---

The Enklu app has several voice commands\* available to display additional menus and in-app information. These voice commands function the same for both HoloLens (1st Gen) and HoloLens 2.  

> \*If you are looking for voice commands for the HoloLens, not related to the Enklu app, see Microsoft's <a style="color:#0000ee" href="https://docs.microsoft.com/en-us/hololens/hololens-cortana" target="\_blank"><u>Use your voice to operate HoloLens</u></a> documentation. 


## App Permissions

During the app's first launch or after updates, you may be prompted to accept or deny app permissions. Granting permission for the app to use the device's microphone allows the app to process voice commands. If you do not grant the app permission to access the device's microphone, you will be unable to use the voice commands. These permissions can be updated at any time by using the **Windows Start menu** and navigating to **Settings** > **Privacy** > **Speech**.

## Voice Commands

These voice commands only work within the Enklu app.  If the app is in the background or closed, these voice commands will not work.

### Menu

Within an experience, using the voice command "*Menu*" will display the experience menu. This menu lets you exit the current experience, as well as enter **Edit Mode** on device. Activating the red back arrow will leave the current experience and let you browse the other experiences available to the logged in user. Activating the red back arrow once more will log the current user out and prompt a QR scan to log in a new user.

### Origin

Within an unanchored experience, using the voice command "*Debug, Origin*" will recenter the experience around the user's current view. When using this voice command in an experience with anchors, only unanchored elements will be recentered; anchored elements will not change their position.

### Experience

Within an experience, using the voice command "*Debug, Experience*" displays an experience dialog for testing. This dialog shows if live updating for the experience in the web editor is enabled. It can also display the number of assets and scripts that are still loading.

### Logging

Using the voice command "*Debug, Logging*" displays a logging dialog for testing. You can view system logs as well as any custom logs within your scripts in this logging window. This voice command will show app logs, both inside and outside of a loaded experience.

### Performance

Within an experience, using the voice command "*Debug, Performance*" displays a performance dialog for testing. It displays information such as app memory usage and frame rate.

### Network

Within an experience, using the voice command "*Debug, Network*" displays a network dialog for testing. It displays information such as ping and connection status.

### Anchors

Within an experience, using the voice command "*Debug, Anchors*" displays an anchor dialog for testing. It displays information about anchor status for anchors within an experience.

### Reset

Within an experience, using the voice command "*Debug, Reset*" displays a dialog confirming you would like to exit the app. The Enklu app can always be exited through the Windows Start menu. This voice command is meant as an alternative way to exit the app.