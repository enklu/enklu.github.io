---
id: HoloLens2Basics&Setup
title: Hololens 2 Basics & Setup
---

## HoloLens 2 Device Operation

### Hardware

![Diagram of HoloLens 2 hardware features.](/img/product/HoloLens2Basics&Setup_HL2Diagram.png)

1. **Adjustment wheel** - Turning the adjustment wheel counterclockwise extends the headband. Turning the adjustment wheel clockwise tightens the headband.
2. **Power button** - Pressing the power button turns the device on. Pressing the power button while the device is on causes it to sleep. To turn the device off, press and hold the power button for 5 seconds or until all 5 LED indicators fade out.
3. **LED indicators** - When the device is powered on, the LED indicators display the battery level. Each LED represents roughly 20% of the overall battery level. The battery is fully charged when all 5 LEDs are lit.
4. **USB Type-C charging port** - The HoloLens 2 comes with a USB-C cable and an 18W charger. This port may also be used to connect the device to a computer.
5. **Overhead strap** - The overhead strap is adjustable and may also be detached.
6. **Brightness buttons** - The front brightness button increases display brightness. The other brightness button decreases display brightness.
7. **Volume buttons** - The front volume button increases device volume. The other volume button decreases device volume.

### Care & Safe Handling

Use a microfiber cloth to clean the device. Do not use alcohol based wipes or solvents on the display or sensors. The brow pad and headband may be cleaned using a microfiber cloth with mild soap and water. Never submerge the device in water or apply water directly to the device.

When taking the device off, fully loosen the adjustment wheel. Attempting to remove the device without loosening may damage the internal ratchet mechanism and break the inner band.

> If you need to setup your HoloLens 2 for the first time, please refer to Microsoft's <a style="color:#3AB29B" href="https://docs.microsoft.com/en-us/hololens/hololens2-start" target="\_blank"><u>Set up your HoloLens 2</u></a> guide.

### Gestures

#### Windows Start Menu

![Hand pointing at wrist with Microsoft Logo hologram. A separate hand touching tips thumb and index finger together.](/img/product/HoloLens2Basics&Setup_Gestures.png)

There are 2 ways to open the Windows Start menu: a two-handed Start gesture and a one-handed Start gesture.

1. Holding out one hand with the palm facing the device will cause the Start icon to appear on the wrist. Tapping the Start icon with the other hand will open the Start menu.
2. Holding out hand with palm facing the device will display Start icon on wrist. Looking\* at the Start icon will cause dots to spin around the icon. While the dots are spinning, touching the index finger and thumb together will open the Start menu.

> \*Note that the device must be calibrated to the user's eyes for the one-handed Start gesture to function correctly. If looking at the Start icon does not cause dots to spin around the icon, this is an indication that the device should be re-calibrated. To calibrate the device, go to **Settings** > **System** > **Calibration**, then select **Run eye calibration**.

## Enklu App

### Installing the Enklu App

![Menu of square tiles with Microsoft App Store tile selected.](/img/product/HoloLens2Basics&Setup_StartMenu.png)

From the Start menu, locate and open the Microsoft Store app. Within the Microsoft Store app, use the search bar at the top to search "Enklu".
![Enklu App Store listing with Enklu logo and app description.](/img/product/HoloLens2Basics&Setup_MSStoreEnklu.png) 


Navigate to the Enklu app page and select **Get**. You may be prompted to sign in with your Microsoft account, then the Enklu app will begin installing. Once the Enklu app has finished installing, you may launch the app from either the Microsoft Store, or from the Windows Start menu.

### Launching the Enklu App

A white application window will open momentarily before the display switches to fullscreen mode. An Enklu "E" logo appears when the application is starting. If an existing instance of the Enklu app is already running, the app will load into where the user left off when the app was last in use.
![Hologram garden scene with a campfire.](/img/product/HoloLens2Basics&Setup_DefaultScene.gif) 

When launching the app for the first time\*, the default demo experience will be loaded. Feel free to walk around the environment learning about what different elements of an experience can be built. All buttons in Enklu can be activated with your gaze by moving the center of the device to match with the center of the button. If the scene content isn't positioned nicely in front of you or is otherwise inaccessible, say the phrase "*Debug*, *Origin*" (with a slight pause between the words) to re-position the experience at the center of your view.


> \*During the app's first launch or after updates, you may be prompted to accept permissions. Granting permission to use the device's microphone allows the app to process voice commands. Granting permission to use the device's camera allows the app to scan QR codes for login. These permissions can be updated at any time by going to **Settings** > **Privacy** > **Speech** and **Settings** > **Privacy** > **Camera**.

After exploring the default scene, activate the **Login**\* button with your gaze to start the QR code scanner.
![Hologram garden scene with a campfire.](/img/product/HoloLens2Basics&Setup_QR.png) 

> \*The **Login** button will change its location in an attempt to follow the user as they explore the scene. If you cannot find it, turn 90 degrees either left or right, then don't move for about one or two seconds. This will prompt the **Login** button to find the user and position itself in the center of the user's field of view.

In a web browser, navigate to <a style="color:#35947c" href="https://cloud.enklu.com/" target="\_blank"><u>cloud.enklu.com</u></a>. Log in to your Enklu account or create a new account if you do not already have one. New accounts are given their own copy of a few Chapters demo experiences.

On the top menu bar in the Web Editor, click the **Tools** drop down menu, then click **HoloLens Login**.
![Open Tools drop down menu to display HoloLens Login button.](/img/product/hololens/hololens_login.gif) 

This will generate a QR code that the HoloLens can scan\* to log the device into your account and load into the currently loaded experience in the web editor.
![Example QR code with text reading "Point the holographic device camera directly ar the QR code".](/img/product/hololens/hololens_QR_modal_closer.png) 


> \*If the device is unable to scan the QR code, first check that the device is connected to WiFi and has an internet connection. Next, the exterior of the device will illuminate a white LED when the camera is scanning for QR codes. If there is no illuminated LED, the camera permission could be denied. Check the camera's permission settings in **Settings** > **Privacy** > **Camera**. Restart the app and try scanning again.

### Navigating Experiences

Within an experience, using the voice command "*Menu*" will display the experience menu. This menu lets you exit the current experience, as well as enter **Edit Mode** on device. Activating the red back arrow will leave the current experience and let you browse the other experiences available to the logged in user.
![Floating hologram menu captured from a HoloLens.](/img/product/HoloLens2Basic&Setup_MenuPopup.gif) 

Activating the red back arrow once more will log the current user out and prompt a QR scan to log in a new user.
![Floating hologram menu triggering QR scan captured from a HoloLens.](/img/product/HoloLens2Basics&Setup_MenuLogout.gif) 
