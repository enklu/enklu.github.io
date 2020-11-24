---
id: PublicScripts
title: Public Scripts
---


Enklu Cloud comes with an ever-expanding library of public scripts. These scripts are available to all Enklu Cloud accounts and may be used in any experience.

## Script Library

The script library is located in the panel below the canvas. On the left side of the script library is a list of all the experiences your account has access to, meaning you can access scripts across multiple expereinces. There is also a **Public** category near the top of this list.  It gives you access to of all of the currently available public scripts.
![Public script library](/img/product/editor/public_scripts/PublicScripts_ScriptLibrary.png) 

### Public Scripts

To use a public script, simply select the element you want to attach it to, then drag the script to the **Scripts** section at the bottom of the inspector.  Once you have attatched your script, you can click on the **Variables** tab to see any exposed variables the script may have.

![Drag public orbit script onto planet to make it orbit.](/img/product/editor/public_scripts/PublicScripts_OrbitScript.gif)

### Inspector Variables

Using the **Variables** tab in the inspector is a quick and easy way to change script parameters without needed to open the script or do any coding.  Not every script will have variables exposed to the inspector in this way.  Particularly for custome scripts you write yourself, you would have to intentionally include syntax to expose variables to the inspector.  But most public scripts will have variables that can be modified from the inspector.

Some examples of what kinds of variables public scripts may use:

#### Orbit

- **Start Orbit** - this is a checkbox that enables or disables the orbit movement.
- **X Orbit Radius** - this is a field you can type a number into which controls the X influence of the orbit.
- **Y Orbit Radius** - this is a field you can type a number into which controls the Y influence of the orbit.
- **Z Orbit Radius** - this is a field you can type a number into which controls the Z influence of the orbit.
- **Orbit Trigger Message** - this is a text field you can type a message for this script to listen for to trigger the orbit movement.

#### Spin

- **Start Spin** - this is a checkbox that enables or disables the spin movement.
- **Spin Speed around X Axis** - this is a field you can type a number into which influences how fast the element will spin around its X axis.
- **Spin Speed around Y Axis** - this is a field you can type a number into which influences how fast the element will spin around its Y axis.
- **Spin Speed around Z Axis** - this is a field you can type a number into which influences how fast the element will spin around its Z axis.

#### Scale_Basic

- **Test Scale** - this is a checkbox which can trigger the scale change.
- **X Scaling** - this is a field you can type a number into which influences scaling along the X axis.
- **Y Scaling** - this is a field you can type a number into which influences scaling along the Y axis.
- **Z Scaling** - this is a field you can type a number into which influences scaling along the Z axis.
- **Scale Duration in seconds** - this is a field you can type into which determines how long the scaling will take to complete.
- **Scale Trigger Message** - this is a text field you can type a message for this script to listen for to trigger the scaling to start.
- **Scale Completed Message** - this is a text field you can type a message for this script to dispatch when the scaling has completed.
