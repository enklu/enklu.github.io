---
id: Chapter2
title: Chapter 2: Thinking in 3D
---

This is the second guide in our Chapters Series. It is recommended to complete the [Chapter 1](/docs/ChaptersSeries/Chapter1) guide prior to embarking on this **Chapter 2** guide.

Chapter 1 taught how to use basic transform tools such as position, rotation, and scale. In this guide, you will practice using these transform tools to place assets in target locations and complete the vignettes. You will use assets from the provided asset bank to achieve this goal.

## 1) Locate and Launch Chapter 2

To get started, navigate to <a style="color:#3AB29B" href="https://cloud.enklu.com/" target="\_blank"><u>cloud.enklu.com</u></a> in your web browser and log into your Enklu Cloud account.

![Enter email and password to login to Enklu Cloud.](/img/product/Chapter2_Login.gif)

Select **Chapter 2** from the experience menu. Then press **Load!** to launch Enklu Cloud into the experience. (If you do not see **Chapter 2** in your experience menu, contact Enklu support to be granted access.)

![List of experiences with name, description, and load button.](/img/product/Chapter2_MyExperiences.png)

The page will take several seconds to load everything. When the page has completely loaded, you should see the hierarchy panel on the left, properties on the right, and the canvas in the center with a grid, text, and some assets.

![Web Editor interface with Chapter 1 scene loaded on canvas.](/img/product/Chapter2_Main.png)

## 2) Adjusting the Camera

Try adjusting the camera's position to better see all the pieces of the experience. You can zoom out using the **scroll wheel** on your mouse. You can pan the camera by pressing and holding the **scroll wheel** or **middle mouse button** while moving your cursor.

![Using mouse to move camera around.](/img/product/Chapter1_AdjustCamera.gif)

In addition to zooming and panning, you can also tilt the camera by pressing and holding the **right mouse button** while moving your cursor.

![Using mouse to tilt camera downward.](/img/product/Chapter2_CameraTilt.gif)

## 3) Getting Started

First, expand the nodes in the hierarchy on the left by clicking the triangles. You can individually select each of the elements in the scene. Your selection will be shown in the canvas so you can see where everything is and how it all fits together.

![Expand scene hierarchy to see scene elements.](/img/product/Chapter2_Hierarchy.gif)

There are 4 main hierarchy elements you will use: *Vignette 1*, *Vignette 2*, *Interaction Point*, and *Asset Bank*. Expand the *Asset Bank* element to see the 12 asset elements nested within. You will see 2 toads, 3 snails, and 7 mushrooms. These are the assets you will be using the transform tools on.

![Expand asset bank to see prepped asset elements.](/img/product/Chapter2_AssetBank.gif)

Expand the *Vignette 1* element. You will see 4 nested elements within *Vignette 1*: *Plants*, *Mushrooms*, *Animals*, and *HOLO Targets*. Now expand the *HOLO Targets* element. You will see 4 nested elements within *HOLO Targets*: 2 *PinkToadHOLO*, *SmallMushroom2HOLO*, and *MedMushroom4HOLO*. These *HOLO Targets* are your target positions for assets from the *Asset Bank*.

![Expand vignette elements to see HoloTarget elements.](/img/product/Chapter2_HoloTargets.gif)

## 4) Searching Elements

Each asset in the Asset Bank element has a corresponding *HOLO Target* asset. The *HOLO Target* assets have the same name as the *Asset Bank* assets, but they have *HOLO* appended to the end of their names. You could manually search for matching elements by expanding and scrolling through all the elements. But there is a lot to look at in the hierarchy. To make searching for elements easier, the hierarchy has a filter function.

At the top of the hierarchy, there is a text field labeled *Filter* with a magnifying glass icon. Try typing "**Pink**" into the filter text field. You will see the hierarchy hides elements that don't contain "**Pink**". Instead it displays elements containing "**Pink**" in bold and will display any parent elements they are nested under so you know exactly where to find them.

![Type "pink" into search field to display only elements containing "pink".](/img/product/Chapter2_HierarchyFilter.gif)

## 5) Aligning Assets

Now that you know how to search for assets, you can align each asset from the *Asset Bank* to its *HOLO Target* match. You will need to use position, rotation, and scale transformation tools to match the *HOLO Targets*. You can access all 3 transformation tools by clicking the transformation icons at the top of the canvas or by using the hotkeys: [**Q**] for position, [**W**] for rotation, and [**E**] for scale.

![Move, rotate, and scale toad from asset bank to align to its HoloTarget.](/img/product/Chapter2_AlignAsset.gif)

The transform gizmos are a quick and easy way to get your assets in roughly the correct position. But sometimes you need a little more precision. You can achieve this by using the transform text fields in the inspector. With your element selected, locate the transform section of the inspector. You can input numbers with several decimal places meaning you can adjust your transforms with incredibly fine accuracy.

![Type numbers in the scale input fields to change mushroom size.](/img/product/Chapter2_ScaleInput.gif)

Try using your new hierarchy searching skills with your asset transform skills to find and align each asset from the *Asset Bank* to its *HOLO Target* match. Remember you can also adjust your camera to help you align each element.

Once you've positioned all the assets, it might be nice to see what the scene looks like without the faint glow of the *HOLO Targets*. This is actually very easy to do. On the end of every element is a visibility toggle. This toggle has an eye icon. When the icon is black, the element's visibility is toggled on. When it is grayed out, the element's visibility is toggled off.

![Click to eye icon to toggle visibility off and grey out.  Click again to toggle on and turn black.](/img/product/Chapter2_ToggleVisibility.gif)

Children elements will inherit the visibility of their parent elements. This means, if you toggle a parent's visibility off, all elements nested within it will also be hidden. Each *HOLO Target* group is nested under a parent element named *HOLO Targets*. You can toggle off the visibility for all 3 *HOLO Target* parent elements to also hide all of their *HOLO Target* children elements.

![Click HoloTargets' eye icon to hide them in canvas.](/img/product/Chapter2_HideHoloTargets.gif)

Congrats! You have reached the end of **Chapter 2** and have officially created your first scene! You are now equipped with the knowledge to search within the hierarchy, fine-tune transformations, and toggle element visibility.
