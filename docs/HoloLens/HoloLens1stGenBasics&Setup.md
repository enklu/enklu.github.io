---
id: HoloLens1stGenBasics&Setup
title: Hololens (1st gen) Basics & Setup
---

## Device Operation

### Hardware

The HoloLens has five buttons: **Audio +**/**-**, **Brightness +**/**-**, and a **Power** button.

![Diagram of HoloLens (1st gen) hardware buttons.](/documentation/live/latest/img/product/HoloLens1stGenBasics&Setup_VolumeBrightness.jpg)

Nearby the power button is the charging port\* and battery indicator. When turned on, each LED in the battery indicator represents roughly 20% of battery life remaining.

![Diagram of HoloLens (1st gen) charging port.](/documentation/live/latest/img/product/HoloLens1stGenBasics&Setup_Charging.png)

> \*When plugging in the device to charge, rotate the inner band of the HoloLens so that the device props itself up and the charging cable is able to connect easily.

The HoloLens can be adjusted in a variety of ways. Before putting on the HoloLens, rotate the headband to its extent and loosen the adjustment wheel on the back.

![Diagram of HoloLens (1st gen) headband rotation.](/documentation/live/latest/img/product/HoloLens1stGenBasics&Setup_RotateHeadband.png)

![Diagram of HoloLens (1st gen) headband adjustment wheel.](/documentation/live/latest/img/product/HoloLens1stGenBasics&Setup_AdjustmentWheel.gif)

The inner band can also slide forwards and backwards to move the device closer or farther from the user's eyes. We recommend sliding the band backwards before putting the device on a user with glasses.

![Diagram of HoloLens (1st gen) headband sliding.](/documentation/live/latest/img/product/HoloLens1stGenBasics&Setup_SlideHeadband.png)


### Care & Safe Handling

Use a microfiber cloth to clean the device. Do not use alcohol based wipes or solvents on the display or sensors. The brow pad and headband may be cleaned using a microfiber cloth with mild soap and water. Never submerge the device in water or apply water directly to the device.

When taking the device off, fully loosen the adjustment wheel. Attempting to remove the device without loosening may damage the internal ratchet mechanism and break the inner band.

> If you need to setup your HoloLens (1st gen) for the first time, please refer to Microsoft's <a style="color:#0000ee" href="https://docs.microsoft.com/en-us/hololens/hololens1-start" target="\_blank"><u>Set up your HoloLens (1st gen)</u></a> guide.

### Gestures

The HoloLens supports two basic gestures. **Bloom** and **Air Tap**. **Bloom** is used to open and close the **Windows Start menu**, as well as exiting a running fullscreen application. 

![All fingers touching then spreading to open hand palm upward.](/documentation/live/latest/img/product/HoloLens1stGenBasics&Setup_Bloom.gif)

**Air Tap** is used to select items in the **Windows Start menu** and other various Windows menus.

![Index finger and thumb touching.](/documentation/live/latest/img/product/HoloLens1stGenBasics&Setup_AirTap.gif)

## Enklu App

### Installing the Enklu App

![Menu of square tiles with Microsoft App Store tile selected.](/documentation/live/latest/img/product/HoloLens1stGenBasics&Setup_StartMenu.png)

From the Start menu, locate and open the Microsoft Store app. Within the Microsoft Store app, use the search bar at the top to search "Enklu".
![Enklu App Store listing with Enklu logo and app description.](/documentation/live/latest/img/product/HoloLens2Basics&Setup_MSStoreEnklu.png) 


Navigate to the Enklu app page and select **Get**. You may be prompted to sign in with your Microsoft account, then the Enklu app will begin installing. Once the Enklu app has finished installing, you may launch the app from either the Microsoft Store, or from the Windows Start menu.

### Launching the Enklu App

A white application window will open momentarily before the display switches to fullscreen mode. An Enklu "E" logo appears when the application is starting. If an existing instance of the Enklu app is already running, the app will load into where the user left off when the app was last in use.
![Hologram garden scene with a campfire.](/documentation/live/latest/img/product/HoloLens2Basics&Setup_DefaultScene.gif) 

When launching the app for the first time\*, the default demo experience will be loaded. Feel free to walk around the environment learning about what different elements of an experience can be built. All buttons in Enklu can be activated with your gaze by moving the center of the device to match with the center of the button. If the scene content isn't positioned nicely in front of you or is otherwise inaccessible, say the phrase "*Debug*, *Origin*" (with a slight pause between the words) to re-position the experience at the center of your view.


> \*During the app's first launch or after updates, you may be prompted to accept permissions. Granting permission to use the device's microphone allows the app to process voice commands. Granting permission to use the device's camera allows the app to scan QR codes for login. These permissions can be updated at any time by going to **Settings** > **Privacy** > **Speech** and **Settings** > **Privacy** > **Camera**.

After exploring the default scene, activate the **Login**\* button with your gaze to start the QR code scanner.
![Hologram garden scene with a campfire.](/documentation/live/latest/img/product/HoloLens2Basics&Setup_QR.png) 

> \*The **Login** button will change its location in an attempt to follow the user as they explore the scene. If you cannot find it, turn 90 degrees either left or right, then don't move for about one or two seconds. This will prompt the **Login** button to find the user and position itself in the center of the user's field of view.

In a web browser, navigate to <a style="color:#0000ee" href="https://cloud.enklu.com/" target="\_blank"><u>cloud.enklu.com</u></a>. Log in to your Enklu account or create a new account if you do not already have one. New accounts are given their own copy of a few Chapters demo experiences.

On the top menu bar in the Web Editor, click the **Tools** drop down menu, then click **HoloLens Login**.
![Open Tools drop down menu to display HoloLens Login button.](/documentation/live/latest/img/product/HoloLens2Basics&Setup_HoloLensLoginEditor.gif) 

This will generate a QR code that the HoloLens can scan\* to log the device into your account and load into the currently loaded experience in the web editor.
![Example QR code with text reading "Point the holographic device camera directly ar the QR code".](/documentation/live/latest/img/product/HoloLens2Basics&Setup_HoloLensLoginQR.png) 


> \*If the device is unable to scan the QR code, first check that the device is connected to WiFi and has an internet connection. Next, the exterior of the device will illuminate a white LED when the camera is scanning for QR codes. If there is no illuminated LED, the camera permission could be denied. Check the camera's permission settings in **Settings** > **Privacy** > **Camera**. Restart the app and try scanning again.

### Navigating Experiences

Within an experience, using the voice command "*Menu*" will display the experience menu. This menu lets you exit the current experience, as well as enter **Edit Mode** on device. Activating the red back arrow will leave the current experience and let you browse the other experiences available to the logged in user.
![Floating hologram menu captured from a HoloLens.](/documentation/live/latest/img/product/HoloLens2Basic&Setup_MenuPopup.gif) 

Activating the red back arrow once more will log the current user out and prompt a QR scan to log in a new user.
![Floating hologram menu triggering QR scan captured from a HoloLens.](/documentation/live/latest/img/product/HoloLens2Basics&Setup_MenuLogout.gif) 