---
id: Chapter3
title: Chapter 3: Adding Lights & Effects
---

This is the third guide in our Chapters Series. It is recommended to complete the [Chapter 2](/docs/ChaptersSeries/Chapter2) guide prior to embarking on this **Chapter 3** guide.

Chapter 2 taught how to search within the hierarchy, fine-tune transformations, and toggle element visibility. In this guide, you will practice using these skills to implement lighting and effects into a scene.

## 1) Locate and Launch Chapter 3

To get started, navigate to <a style="color:#3AB29B" href="https://cloud.enklu.com/" target="\_blank"><u>cloud.enklu.com</u></a> in your web browser and log into your Enklu Cloud account. Select **Chapter 3** from the experience menu. Then press **Load!** to launch Enklu Cloud into the experience. (If you do not see **Chapter 3** in your experience menu, contact Enklu support to be granted access.)

![List of experiences with name, description, and load button.](/img/product/Chapter3_MyExperiences.png)

The page will take several seconds to load everything. When the page has completely loaded, you should see the hierarchy panel on the left, properties on the right, and the canvas in the center with a grid, text, and some assets.

![Web Editor interface with Chapter 3 scene loaded on canvas.](/img/product/Chapter3_Main.png)

## 2) Adjusting the Camera

Try adjusting the camera's position to better see all the pieces of the experience. You can zoom out using the **scroll wheel** on your mouse. You can pan the camera by pressing and holding the **scroll wheel** or **middle mouse button** while moving your cursor.

![Using mouse to move camera around](/img/product/Chapter3_AdjustCamera.gif)

In addition to zooming and panning, you can also rotate the camera by pressing and holding the **right mouse button** while moving your cursor.

![Using mouse to rotate camera](/img/product/Chapter3_CameraRotate.gif)

## 3) Getting Started

First, expand the nodes in the hierarchy on the left by clicking the triangles. There are 5 main hierarchy elements you will use: *Lighting*, *Vignette 1*, *Vignette 2*, *Interaction Point*, and *Effect Bank*. Expand the **Lighting** element to see the 3 light elements nested within. All 3 of these lights are *Directional Lights*. To learn more about Directional Lights, check out our [Lights](/docs/WebEditorBasics/Lights#directional-lights) doc. You will see *Key Light*, *Fill Light*, and *Back Light* elements. Each of these light elements has its visibility toggled off. You can turn these lights on by clicking on their visibility icons (eye icon), or by opening their element menu and selecting **Show**.

![Clicking on visibility icons to show and hide elements in canvas.](/img/product/Chapter3_HierarchyVisibility.gif)

You may notice all the elements in the hierarchy are grayed out. Selecting these grayed out elements shows their information in the inspector panel, but it does not reveal their location on the canvas. This is because the Scene Root element is locked. Locking an element prevents transforms being applied to it and its children. Click *Scene Root*'s lock icon to unlock it and all its nested elements. Alternatively you can open the *Scene Root*'s element menu and select **Unlock**. Once the Scene Root is unlocked, you will be able to see your hierarchy selections on the canvas.

![Clicking on lock icons to lock and unlock elements in canvas.](/img/product/Chapter3_HierarchyUnlock.gif)

## 4) Adjusting Scene Lighting

This scene is set up to emulate night lighting. This means the lights are fairly subtle and on the cooler side of the spectrum. However, the look and feel of the lighting is very easy to change. Simply select the light in the hierarchy you wish to adjust. Then in the inspector you will see the light's **Intensity** and **Color**. Type in a higher intensity value for a brighter light or a lower intensity value for a dimmer light. Clicking on the square color swatch will open a color picker window. In this window you can define a color using HSV, RGB, or hex code values. You can also choose a color by clicking and dragging on the hue slider and the color palette on the left side of the window.

![Choosing yellow color lights makes the scene lighting yellow.](/img/product/Chapter3_LightColor.gif)

Try out how different colors and intensities work together on each lighting element. Feel free to use whatever lighting set up you prefer. However, this tutorial will be using the default night lighting, as more lights will be added to the scene moving forward. If you would like to return to the default light settings, these are the default values you can use:

- **Key Light**: Color - <span style="text-decoration: underline #4F9DAD !important;">#4F9DAD</span>, Intensity - 0.7
- **Fill Light**: Color - <span style="text-decoration: underline #61FAFE !important;">#61FAFE</span>, Intensity - 0.6
- **Back Light**: Color - <span style="text-decoration: underline #FCC1FE !important;">#FCC1FE</span>, Intensity - 0.3

## 5) Detailed Lighting

Expand the *Vignette 1* and *Vignette 2* elements. Nested inside each you will see an element called *Mushroom Lamps*. Expand the *Mushroom Lamps* elements. Nested inside each you will see several mushroom elements. Expand one of these mushroom elements. Nested inside each of these you will see a *Light* and *EFFECT* element. Select the *EFFECT* element. You will see it is empty, meaning it has no asset assigned to it. In the asset library, select the **Effect** category and search **orb** to display several orb effects. Click and drag one of these orb effects to the asset section of the selected element's inspector. You will see the orb effect show up in the canvas. Try a couple different effects until you find one you like.

![Choosing effect from asset library.](/img/product/Chapter3_AssetEffect.gif)

Once you've chosen an effect, select the *Light* element that was nested with your *EFFECT* element. This *Light* element is a *Point Light*. To learn more about *Point Lights*, check out our [Lights](/docs/WebEditorBasics/Lights#point-lights) doc. This Light element will be used to make your chosen effect look as though it is emitting light. Change the color of the *Light* element to match your effect. Then choose an intensity that makes sense for your effect. Since this is a point light, it also has a **Range** you can adjust. Adjust the range so the light extends to your liking.

![Adding a green point light.](/img/product/Chapter3_LightEffect.gif)

Across the two vignettes, there are seven mushroom lamp *EFFECT* elements. Add effects and adjust the *Light* elements for each of these lamps.


## 6) Effects

Towards the bottom of the hierarchy, you will see an *Effects Bank* element. Expand this element to reveal 6 elements with larger scene effects. Practice using the transform tools on these effect elements to position as many of them as you like in the scene.

![Dragging effect from bank into the main scene.](/img/product/Chapter3_EffectBank.gif)

Once you have all the effects positioned to your liking, step back and take a look at the scene you created! Wouldn't it be nice to view your scene without all those light element icons? You can do that! At the top of the hierarchy you will see 4 tabs: *Hierarchy*, *Scene*, *Global*, and *Script*. Click on the *Global* tab. You will see **Element Gizmos** with a checkbox. Uncheck this box to hide the light element icons. You can also uncheck the **Grid** checkbox to hide the grid. Additionally you will see a square color swatch labeled **Background Color**. Clicking this swatch will open a color picker window where you can define a background color.

![Change gizmo, grid, and background color settings.](/img/product/Chapter3_FinalScene.gif)

Congrats! You have reached the end of Chapter 3 and made a pretty awesome scene! You are now equipped with the knowledge to lock and unlock hierarchy elements, change light properties, add effects to a scene, and adjust global settings.
