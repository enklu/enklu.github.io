---
id: WebEditorInterface
title: Web Editor Interface
---

When designing experiences, you will spend most of your time in the Web Editor.
![Web Editor workspace overview](/img/product/editor/Workspace.gif)

The Web Editor is where the magic happens. There are a lot of pieces here, but they'll soon become familiar.


## Menu Bar
At the top of the page, you will see 3 drop down menus: Experience, Edit, and Help.
![Nav header showing drop down menus: "Experience", "Edit", and "Help"](/img/product/editor/MenuBar.gif)

### Experience
The Experience drop down menu lets you create a new experience, open the My Experiences window, or display a login QR code. 

The My Experiences window contains a list of all experiences currently available to your account. For more information about the My Experiences window, please see our [Managing Your Experiences](/docs/WebEditorBasics/ManagingYourExperiences) article.

The Hololens Login lets you access a generated QR code link to your experience. This QR code can be scanned by a HoloLens to log the device into your experience. 

### Edit
The Edit drop down menu lets you undo or redo a previous action you've made in your experience. Instead of using this drop down menu, there are also hot keys available: [**CTRL**] + [**Z**] will undo an action, [**SHIFT**] + [**CTRL**] + [**Z**] will redo the most recently undone action.

### Help
The Help drop down menu links to our Online Help documentation, our JS API Reference documentation, and a Support forum for suggesting new features or reporting issues.


## Hierarchy
The hierarchy is essentially a tree view of your experience. Everything in your experience is part of this tree in one way or another: assets, lights, and scripts all become nodes on this tree.
![List of elements nested under other elements](/img/product/editor/Hierarchy.gif)

Once an experience becomes a bit more complicated, this will be an easy way to make sense of the space.
![Clicking and dragging an element to nest it under another element](/img/product/editor/Hierarchy_Reparent.gif)

These nodes may also be re-positioned on the tree (also called re-parenting) by simple drag and drop. This is useful not just for organization, but also informs position, rotation, and scale changes, as these are composed down the graph. The lock and visibility icons are also informed by the hierarchy.

Finally, clicking on the ellipses will bring up the element menu from which you can perform several actions.
![Open element menu to create new element](/img/product/editor/Hierarchy_CreateAssetElement.gif)


## Library
The library section enables you to manipulate all resources of the app. At the top, you can choose between categories of assets and scripts. Several categories of Public Assets are available.
![Search "mushroom" within asset library displays only asset thumbnails that match "mushroom"](/img/product/editor/Library.gif)


The filter bar at the top of the library enables you to search through the assets.

To import your own assets, please see our [Import Your Own Assets](/docs/Assets/ImportYourOwnAssets) article.

To create and edit scripts, please see our [Introduction to Scripting](/docs/Scripting/IntroductionToScripting) article.


## Inspector
When you're ready to edit an element in the hierarchy, click on it. This will open up the inspector on the right hand side.
![Element properties: "Name", "Description", "Asset", "Transform", and "Scripts" ](/img/product/editor/Inspector.png)

The inspector allows you to edit the properties of an element, as well as manage the attached asset and scripts. You can easily edit the name, description, and transform values here.


## Canvas
The canvas is your 2D view into a 3D world. The canvas provides a preview of assets and scripts, basic asset manipulation controls, as well as controls to move a camera around the world.
![Bounding box of planets orbiting a sun changes as the planets' positions change](/img/product/editor/Canvas.gif)

You can select an object by using your mouse's **Left Click**. Selecting an object on the canvas will also highlight its location in the hierarchy and reveal its properties in the inspector. Position, rotation, and scale may be manipulated via the tools in the upper left corner of the canvas. There is also a fullscreen button in the upper right corner of the canvas.

### Camera Controls
You can zoom in and out using the **Scroll Wheel** on your mouse. You can pan the camera by pressing and holding the **Scroll Wheel** (middle mouse button) while moving your cursor. Holding **Right Click** and dragging will rotate the camera.

Alternatively there are some keyboard controls for moving the camera. While holding **Right Click** on the canvas, [**W**] will move the camera forward, and [**S**] will move the camera backwards. To pan the camera while **Right Click** is held down on the canvas: [**E**] will pan upwards, [**Q**] will pan downwards, [**A**] will pan left, and [**D**] will pan right.
