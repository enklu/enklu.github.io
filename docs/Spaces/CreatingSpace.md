---
id: CreatingSpace
title: Creating a Space
---

A Space links your AR content to the physical world. Your entire experience will perfectly line up with what you see in the Enklu Cloud. 
A single Space can be used in multiple experiences to help build worlds of adventure in your environment as quickly as possible. An active internet connection is required to create a space.

## Getting Started

Creating a Space couldn't be easier. Using your HoloLens 1 or HoloLens 2 device, enter Edit Mode by saying "edit experience". 
Once in Edit Mode, activate the floating menu and select <b>Spaces</b>.

<br>
Select <b>Link New Space</b> to begin creating a space that automatically links to the current experience. Selecting <b>Manage Spaces</b> allows you to create a new space on its own. For more information, see our article on Space Management (TODO: Actually make this article).

<br>
[TODO: Gif/Still - Edit Mode Menu -> Spaces]

### Scanning your environment

[TODO: Gif showing scan process]

After creating a new space, the scanning process will begin automatically. Walk around your environment at a comfortable pace. As the device refines its understanding of the environment, the scan you see will update in real time.

<br>
The areas in red will show holes in the current scan. Be sure to capture major features in your environment, such as the corners of walls and large furniture that will not move. 
The captured scan is used in the cloud editor and for occlusion in play mode. More time spent making a better scan will result in easier development and increased immersion.
If you have the cloud editor open, you'll be able to see the scan update in real time.

[TODO: Gif of editor scan building out]

<br>
As the system receives less new data, a prompt will appear asking to finalize your scan. Dismiss the dialog if you'd like to further refine your scan.

[TODO: Still showing scan finalization prompt]

### Anchor Uploading

When the scan is complete, the system will automatically generate anchors for the environment. Anchors are required to lock AR content to your physical world. Wait until the anchors have finished processing. 
They will display a "Ready" message and change to green when their data has finished uploading to Enklu Cloud.

<br>
Anchors can be moved around, as well as manually created. More information can be found in our article about Adding Anchors (TODO: Link this!)

<br>
In the uncommon event of an error, the anchors will change to red. If you see this, try autogenerating the anchors again from the available menu. If the issue persists, please contact support@enklu.com (<-- IS THIS A REAL EMAIL WE USE?!)

## Unlinking a Space

Once an Experience has been linked to a Space, it can be unlinked in two different ways. With your HoloLens, you can enter Edit Mode and unlink the Space from the menu. 

[TODO: Still showing hololens unlinking]

In the cloud editor, selecting the scene root in the hierarchy will show a <b>Space Management</b> section of the inspector. This will let you unlink any currently linked Space.

[TODO: Still showing web unlinking]

## Linking an existing Space

An existing Space can be linked to Experiences in both the HoloLens and the cloud editor. The HoloLens can view available spaces and link to an existing one from the menu in Edit Mode.

[TODO: Still showing hololens linking]

Similarly, the cloud editor will display available spaces in its <b>Space Management</b> section. Selecting a space will preview it. Clicking link will confirm the change and update other devices actively using the space.

[TODO: Show experience previewing/selecting]
