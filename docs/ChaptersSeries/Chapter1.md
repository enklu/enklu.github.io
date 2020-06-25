---
id: Chapter1
title: Chapter 1: Intro to Enklu Cloud
---

This is the first guide in our Chapters Series. If this is your first time using Enklu Cloud, check out our <a style="color:#0000ee" href="/documentation/live/latest/docs/WebEditorBasics/WebEditorInterface" target="\_blank"><u>Web Editor Interface</u></a> guide to become familiar with the pieces of the Web Editor. It is recommended to complete this **Chapter 1** guide prior to embarking on Chapter 2. 

In this guide, you will learn how to create, select, and position elements in Enklu Cloud—including how to navigate and manage the element hierarchy.


## 1) Locate and Launch Chapter 1
To get started, navigate to <a style="color:#0000ee" href="https://cloud.enklu.com/" target="\_blank"><u>cloud.enklu.com</u></a> in your web browser and log into your Enklu Cloud account.

![Enter email and password to login to Enklu Cloud.](/documentation/live/latest/img/product/Chapter1_Login.gif)

Select **Chapter 1** from the experience menu. Then press **Load!** to launch Enklu Cloud into the experience. (If you do not see **Chapter 1** in your experience menu, contact Enklu support to be granted access.)

![List of experiences with name, description, and load button.](/documentation/live/latest/img/product/Chapter1_MyExperiences.png)

The page will take several seconds to load everything. When the page has completely loaded, you should see the hierarchy panel on the left, properties on the right, and the canvas in the center with a grid, text, and some assets.

![Web Editor interface with Chapter 1 scene loaded on canvas.](/documentation/live/latest/img/product/Chapter1_Main.png)

## 2) Adjusting the Camera
Try adjusting the camera's position to better see all the pieces of the experience. You can zoom out using the **scroll wheel** on your mouse. You can pan the camera by pressing and holding the **scroll wheel** or **middle mouse button** while moving your cursor.

![Using mouse to move camera around](/documentation/live/latest/img/product/Chapter1_AdjustCamera.gif)

In addition to zooming and panning, you can also rotate the camera by pressing and holding the **right mouse button** while moving your cursor.

![Using mouse to rotate camera](/documentation/live/latest/img/product/Chapter1_CameraRotate.gif)

## 3) Getting Started
This tutorial is split up into 5 parts: Position, Rotation, Scale, Hierarchy Management, and Element Creation. You can complete each step in any order as they do not rely on each other. However, this guide will walk through these steps in the listed order.

First, expand the nodes in the hierarchy on the left by clicking the triangles. You can individually select each of the elements in the scene. Your selection will be shown in the canvas so you can see where everything is and how it all fits together.

![Expand scene hierarchy to see scene elements](/documentation/live/latest/img/product/Chapter1_Hierarchy.gif)

## 4) Position
Center your camera around the Position section in the canvas and expand the *Position Practice* element in the hierarchy. You will see 2 nested elements under *Position Practice*: *HOLO Target* and *Snail*. Click on the Snail element and you will see the snail selected in the canvas. On your selection, you will see 3 colored arrows. These arrows are part of the position transform gizmo:

- The <span style="text-decoration: underline #DD0000 !important;">**red arrow**</span> corresponds to moving along the **X axis**
- The <span style="text-decoration: underline #00DD00 !important;">**green arrow**</span> corresponds to moving along the **Y axis**
- The <span style="text-decoration: underline #0000DD !important;">**blue arrow**</span> corresponds to moving along the **Z axis**

At the center of the transform gizmo, there are 3 square planes:

- The <span style="text-decoration: underline #DD0000 !important;">**red square**</span> corresponds to moving along both the **Y** and **Z axis**
- The <span style="text-decoration: underline #00DD00 !important;">**green square**</span> corresponds to moving along both the **X** and **Z axis**
- The <span style="text-decoration: underline #0000DD !important;">**blue square**</span> corresponds to moving along both the **X** and **Y axis**

Hovering your cursor over any of the parts of the gizmo will cause that piece to turn <span style="text-decoration: underline #DDDD00 !important;">**yellow**</span>. When the part you want to select is <span style="text-decoration: underline #DDDD00 !important;">**yellow**</span>, click with the left mouse button and drag to move the gizmo, and in turn, the element you have selected. When you release the left mouse button, the element will stay at the position you leave it.

![Use position tool to move snail around canvas](/documentation/live/latest/img/product/Chapter1_Position.gif)

Try using these position transforms to line the *Snail* up with the *HOLO Target*. Remember you can also adjust your camera to help you align the two elements.

As you are repositioning your object, you may decide you would like to undo one of your actions. At the top of the Web Editor, the *Edit* drop down menu lets you undo or redo a previous action you've made in your experience. Alternatively, instead of using this drop down menu, there are hot keys available: [**CTRL**] +[**Z**] will undo an action, [**SHIFT**] + [**CTRL**] + [**Z**] will redo the most recently undone action.


## 5) Rotation
Center your camera around the Rotation section in the canvas and expand the *Rotation Practice* element in the hierarchy. You will see 2 nested elements under *Rotation Practice*: *HOLO Target* and *Tortoise*. Click on the *Tortoise* element and you will see the tortoise selected in the canvas. On your selection, you will see the position transform gizmo. To switch to the rotation gizmo, you can click on the rotation symbol at the top of the canvas, or you can press [**W**] which is the rotation hotkey.

![Switch from position tool to rotation tool.](/documentation/live/latest/img/product/Chapter1_RotationTool.gif)

On the rotation gizmo, you will see 3 colored lines and 1 white line around the entire gizmo:

- The <span style="text-decoration: underline #DD0000 !important;">**red line**</span> corresponds to rotation around the X axis
- The <span style="text-decoration: underline #00DD00 !important;">**green line**</span> corresponds to rotation around the Y axis
- The <span style="text-decoration: underline #0000DD !important;">**blue line**</span> corresponds to rotation around the Z axis
- The <span style="text-decoration: underline #CCCCCC !important;">**white line**</span> corresponds to rotation around the vector between the camera and the element

Clicking anywhere else on the gizmo that isn't one of these lines will let you rotate in any direction freely around its origin point.

![Rotate tortoise using rotation tool.](/documentation/live/latest/img/product/Chapter1_Rotation.gif)

Try using these rotation transforms to line up the *Tortoise* with its *HOLO Target*. Remember you can also adjust your camera to help you align the two elements.


## 6) Scale
Center your camera around the Scale section in the canvas and expand the *Scale Practice* element in the hierarchy. You will see 2 nested elements under Scale Practice: *HOLO Target* and *MedMushroom3*. Click on the *MedMushroom3* element and you will see the *MedMushroom3* selected in the canvas. On your selection, you will see the rotation transform gizmo. To switch to the scale gizmo, you can click on the scale symbol at the top of the canvas, or you can press [**E**] which is the scale hotkey.

![Switch from rotation tool to scale tool.](/documentation/live/latest/img/product/Chapter1_ScaleTool.gif)


On the Scale gizmo, you will see 3 colored cubes and 1 white cube in the center.

- The <span style="text-decoration: underline #DD0000 !important;">**red cube**</span> corresponds to scaling along the X axis
- The <span style="text-decoration: underline #00DD00 !important;">**green cube**</span> corresponds to scaling along the Y axis
- The <span style="text-decoration: underline #0000DD !important;">**blue cube**</span> corresponds to scaling along the Z axis
- The <span style="text-decoration: underline #CCCCCC !important;">**white cube**</span> corresponds to scaling evenly in every direction

![Change mushroom size using scale tool.](/documentation/live/latest/img/product/Chapter1_Scale.gif)

Try using these scale transforms to line up the *MedMushroom3* with its *HOLO Target*. Remember you can also adjust your camera to help you align the two elements.


## 7) Hierarchy Management
Center your camera around the Nesting section in the canvas and expand the *Nesting Practice* element in the hierarchy. You will see 4 nested elements under *Nesting Practice*: 1 *Toad Group (PARENT)* and 3 *PinkToad (CHILD)*. Clicking on each of these elements, you will see that *Toad Group (PARENT)* is empty, meaning it has no asset, while the *3 PinkToad (CHILD)* each have a toad asset.

![Nesting 3 toad elements into 1 group.](/documentation/live/latest/img/product/Chapter1_Nesting.gif)

To nest the 3 *PinkToad (CHILD)* elements under the *Toad Group (PARENT)* element, click and hold with the **left mouse** button on a *PinkToad (CHILD)* element. Then drag the element slightly to the right. You will see a <span style="text-decoration: underline #66CCDD !important;">**light blue box**</span> appear. Keep dragging the element to the right until you see the blue box indent itself to the right, then you can release the left mouse button.

If you nest all 3 *PinkToad (CHILD)* elements in this manner under *Toad Group (PARENT)*, you should now be able to select *Toad Group (PARENT)* and see that all 3 toad assets are selected in the canvas.

![Moving and scaling elements together as a group](/documentation/live/latest/img/product/Chapter1_TransformNestedElements.gif)

Try using the transform tools on the *Toad Group (PARENT)* to see how they affect a group of elements instead of just an individual element.


## 8) Element Creation
Center your camera around the Creation section in the canvas and select the *Creation Practice* element in the hierarchy. You will see this element selection appear in the canvas, but there is no asset because the element is empty (just like the *Toad Group (PARENT)* element was empty). To create an asset nested under this *Creation Practice* element, click the 3 dots on the right side of the element to open the element menu. Click **Create**, then click **Asset** to create a new empty asset element.

![Create new asset element within existing element.](/documentation/live/latest/img/product/Chapter1_CreateElement.gif)

In the Asset Library, you will see many asset categories in a list on the left. Click on the **Aquatic** category and search for an **Octopus** asset. When you find the **Octopus**, click on the asset using the left mouse button and drag it to the Asset section of the element in the inspector. Alternatively, you can also drag the asset directly to the element in the hierarchy.

![Drag asset from asset library onto an element](/documentation/live/latest/img/product/Chapter1_AssetLibrary.gif)

You will see a white bounding box while the asset loads into the scene. Once it has finished loading, you can use the transform tools to adjust the asset the same way you transformed all the assets earlier in this tutorial. Additionally, you can swap out the octopus asset for any asset you wish by dragging a new asset to the element.

![Drag other assets onto element to change its assigned asset.](/documentation/live/latest/img/product/Chapter1_ChangeAsset.gif)

Congrats! You have reached the end of Chapter 1! You are now equipped with the knowledge to use basic transform tools, select and nest elements in the hierarchy, and create asset elements.