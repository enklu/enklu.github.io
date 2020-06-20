---
id: BehaviorScriptBasics
title: Behavior Script Basics
---

Enklu Cloud's scripting interface offers 2 types of scripts: **Behavior** scripts and **Vine** scripts. This article will focus on Behavior scripts. For more information on Vine scripts, please check out our <a style="color:#0000ee" href="/documentation/live/latest/docs/Scripting/VineScriptBasics"><u>Vine Script Basics</u></a> article.

Behavior scripts utilize JavaScript to make things happen. They can manipulate the object graph, work with central systems, as well as send and receive messages between other scripts.

## Creating a Behavior Script

Select *Scripts* from the library drop down menu. Then click the **+** button next to *Scripts*. This will prompt for a **Name** to give the new script, a **Description** for the new script (this is optional), and a **Type** for the new script. Make sure **Behavior** is selected from the type drop down menu. Once these fields have been populated, click the **Create!** button at the bottom right of the library panel. This will create a new Behavior script in the script library with the input name and description.

![Name, type, and description fields to create a new script.](/documentation/live/latest/img/product/IntroductionToScripting_CreateNewScript.gif)

## Attaching a Behavior Script

Create or select an asset element you wish to attach a script to. At the bottom of its inspector, you will see a box that says *Drop script here.* From the script library, **click and drag** your script to the script section of the inspector and place it on the target box.

![Drag new script to script target box.](/documentation/live/latest/img/product/IntroductionToScripting_AssignNewScript.gif)

## Writing and Editing Behavior Scripts

To edit a script, either select the edit icon (pencil icon) on the script thumbnail or select the script and click the edit icon in the inspector panel. This will open the script editor which can be directly type into while still viewing the canvas.

![Typing into script editor.](/documentation/live/latest/img/product/IntroductionToScripting_EditScript.gif)

Once you have written or made changes to a script, you will have to save it to see its effects in the canvas. To save a script, click **File** > **Save**. Saving a script will cause the canvas to reload the script. 

There is an *Autosave* toggle in the **File** menu that can be turned on which will periodically save the script and update the canvas. However *Autosave* is **not recommended** for use with Behavior scripts as saving an incomplete Behavior script is likely to cause more errors and unexpected behavior than saving an incomplete Vine script.

## Lifecycle Functions

Behavior scripts have 3 main phases: **enter**, **update**, and **exit**. These are known as the *Lifecycle Functions*. You may use all or none of these functions in your script.

### Enter

If an enter function is defined, it will be called once and only once after all scripts have been initially executed. This is generally a safe place to manipulate elements created through other scripts, as all scripts are guaranteed to be loaded by this point.

### Update

If an update function is defined, it will be called every frame. This function is guaranteed to be called after enter is called, though an enter function is not required for update to be called.  

### Exit

If an exit function is defined, it will be called right before the object is destroyed. This is often used to turn off systems enabled within the script or to return elements modified by the script back to their original states.

All new Behavior scripts will be created with an enter function and an exit function.

![New script file showing empty enter and exit functions.](/documentation/live/latest/img/product/BehaviorScriptBasics_NewScriptContents.png)

## Scripts as Modules

All scripts are wrapped in functions to prevent name collision in the global scope. Because of this, all functions that should be exposed to other scripts, including any used *Lifecycle Functions*, should be exported on a module object passed in by the runtime.  

All new Behavior scripts are created with a **module** object exporting its enter and exit functions.

![New script file showing empty enter and exit functions.](/documentation/live/latest/img/product/BehaviorScriptBasics_NewScriptExportContents.png)