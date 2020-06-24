---
id: Chapter4
title: Chapter 4: Adding Interactions
---

This is the fourth guide in our Chapters Series. It is recommended to complete the <a style="color:#0000ee" href="/documentation/live/latest/docs/ChaptersSeries/Chapter3" target="\_blank"><u>Chapter 3</u></a> guide prior to embarking on this **Chapter 4** guide.

Chapter 3 taught how to lock and unlock hierarchy elements, change light properties, add effects to a scene, and adjust global settings. In this guide, you will practice using these skills to implement interactions into a scene.

## 1) Locate and Launch Chapter 4

To get started, navigate to <a style="color:#0000ee" href="https://cloud.enklu.com/" target="\_blank"><u>cloud.enklu.com</u></a> in your web browser and log into your Enklu Cloud account. Select **Chapter 4** from the experience menu. Then press **Load!** to launch Enklu Cloud into the experience. (If you do not see **Chapter 4** in your experience menu, contact Enklu support to be granted access.)

![List of experiences with name, description, and load button.](/documentation/live/latest/img/product/Chapter4_MyExperiences.png)

The page will take several seconds to load everything. When the page has completely loaded, you should see the hierarchy panel on the left, properties on the right, and the canvas in the center with a grid, text, and some assets.

![Web Editor interface with Chapter 4 scene loaded on canvas.](/documentation/live/latest/img/product/Chapter4_Main.png)

## 2) Adjusting the Camera

Try adjusting the camera's position to better see all the pieces of the experience. You can zoom out using the **scroll wheel** on your mouse. You can pan the camera by pressing and holding the **scroll wheel** or **middle mouse button** while moving your cursor.

![Using mouse to move camera around](/documentation/live/latest/img/product/Chapter4_AdjustCamera.gif)

In addition to zooming and panning, you can also tilt and rotate the camera by pressing and holding the **right mouse button** while moving your cursor.

![Using mouse to rotate camera](/documentation/live/latest/img/product/Chapter4_CameraRotate.gif)

## 3) Getting Started

First, expand the nodes in the hierarchy on the left by clicking the triangles. You will notice the *Scene Root* element is locked. Unlock it by clicking the lock icon or by selecting **Unlock** from its element menu. You will see 6 elements nested within the Scene Root element. The main element you will be working with is the *Interaction Point* element.

![Clicking on lock icons to lock and unlock elements in canvas.](/documentation/live/latest/img/product/Chapter4_HierarchyUnlock.gif)

Expanding the *Interaction Point* element, you will see 3 elements nested within: *MedMushroom6*, *TouchTrigger*, and *Proximity Trigger*. You will be using the *TouchTrigger* and *Proximity Trigger* elements to create interactions.

![List of elements to be used for interaction.](/documentation/live/latest/img/product/Chapter4_HierarchyInteractionPoint.gif)

## 4) Adding Visual Scripts

Expanding the *TouchTrigger* element, you will see 6 nested elements. *VISUAL 1* has the *RainbowOrb* asset assigned to it. *VISUAL 2* has the *RainbowThreads* asset assigned to it. Select *VISUAL 2* to see its properties in the inspector. Beneath the *Transform* section of the inspector is the *Scripts* section of the inspector. It is empty because there are no scripts attached to this element.

To attach a script, you will need to navigate to the *Script Library*. In the library panel, you will see the drop-down menu is set to **Assets**. Click the drop-down menu to change the selection from **Assets** to **Scripts**. Make sure the **Chapter 4** category tag is selected and you will see 7 available scripts to use. Find the script called **Pulsate**. **Click and drag** the **Pulsate** script from the script library onto the script section of the inspector for *VISUAL 2*. In the canvas, you will see how the *RainbowThreads* asset reacts to having the **Pulsate** script attached to it.

![Drag pulsate script to asset to make it grow and shrink.](/documentation/live/latest/img/product/Chapter4_AttachPulsate.gif)

Expand the *Proximity Trigger* element in the hierarchy. You will see 2 elements nested within: *On* and *Crystals*. Expanding the *Crystals* element, you will see 2 elements nested within: *Left Crystal* and *Right Crystal*. Practice attaching scripts by attaching the **Bob-n-Spin** script to both the *Left Crystal* and *Right Crystal* elements. After you attach **Bob-n-Spin** to both elements, look in the canvas to see how the crystals are reacting to the script.

![Drag Bob-n-Spin script to asset to make it rotate and float.](/documentation/live/latest/img/product/Chapter4_AttachBobnSpin.gif)

## 5) Setting Up the Hierarchy for Interaction

Adding the **Pulsate** script and the **Bob-n-Spin** scripts to elements shows immediate effects in the canvas. Now we want to create a way user input to affect the scene. First, we will reorganize a few elements in the hierarchy. Within the *Proximity Trigger* element, **click and drag** the *Crystals* element to nest it under the *On* element.

![Drag crystal elements to nest them under On element.](/documentation/live/latest/img/product/Chapter4_HierarchyCrystals.gif)

Within the *TouchTrigger* element, **click and drag** the *VISUAL 1* element to nest it under the *Off* element. Then nest the *FEEDBACK/TRANSITION* element under the *On* element. And finally, nest the *VISUAL 2* element under the *On2* element.

![Drag elements to nest them under Touch Trigger element.](/documentation/live/latest/img/product/Chapter4_HierarchyTouchTrigger.gif)

Once you have finished reorganizing the hierarchy, you will notice that the *RainbowThreads* and crystal assets are no longer visible in the canvas. This is because they have been nested within elements that have their visibility toggled off. This is intentional as we want these assets to be hidden, until they receive a user input.


## 6) Adding Interaction Scripts

Select the *Proximity Trigger* element. In the library panel, find the script called **Proximity Trigger** and drag it to the *Script* section of the inspector. This script will toggle the visibility for nested elements whenever the user is near.

Using a HoloLens, a user would walk over to the assets to make them appear. In the web editor, the camera represents the user. You can navigate your camera towards the crystal assets to make them appear.

![Drag proximity script to asset to make it hide when user is far away.](/documentation/live/latest/img/product/Chapter4_ProximityTriggerScript.gif)


Select the *TouchTrigger* element. In the library panel, find the script called **Orb Touch** and drag it to the *Script* section of the inspector. This script toggles the visibility of its nested elements in response to a user touch. When a user touches the rainbow orb, the script toggles the *VISUAL 1* element off, toggles the *FEEDBACK/TRANSITION* element on immediately, and toggles the *VISUAL 2* element on after a short delay. After several seconds, the script will reset itself and return the elements' visibilities to their state before the orb was touched.

Using a Hololens, a user would touch the rainbow orb to trigger this script. In the web editor, there is a **Test Touch** variable you can use to simulate a user's touch. After you drag the script to the inspector, click **Variables** right above the script. You will see a list of all the variables in the script. At the bottom is the **Test Touch** variable. Click the checkbox to turn the **Test Touch** on. Then click the refresh icon above the variables list to confirm the variable update in the script. You will see the rainbow orb disappear, a short transition effect, then the *RainbowThreads* will appear.

![Touching orb causes it to disappear.](/documentation/live/latest/img/product/Chapter4_OrbTouch.gif)


## 7) Finishing touches

Now that you have all these awesome visuals, let's try adding some audio for completeness. Audio assets are as easy to add as the visual assets you've learned how to add. At the bottom of the hierarchy you will see an element labeled *Global*. Expand the *Global* element to reveal an element labeled *Audio* nested within. Clicking on the *Audio* element, you will see that it is empty. Navigate to the asset library and select the **Sounds** category. **Click and drag** whichever sound asset you like onto the *Audio* element.

![Drag audio asset to element](/documentation/live/latest/img/product/Chapter4_Audio.gif)


If you have sound turned on in your web browser, you will hear the audio you have selected play. You can mute the audio by turning off the visibility of the *Audio* element.

Congrats! You have reached the end of Chapter 4! You are now equipped with the knowledge to navigate the script library, attach scripts to elements, simulate user interactions, update script variables, and add audio to your experience.