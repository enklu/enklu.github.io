---
id: IntroductionToScripting
title: Introduction to Scripting
---

Scripting opens up limitless possibilities in Enklu Cloud. Our scripting interface offers 2 types of scripts: **Behavior** scripts and **Vine** scripts. [Behavior scripts](/docs/Scripting/BehaviorScriptBasics) utilize JavaScript. [Vine script](/docs/Scripting/VineScriptBasics) utilize VineML. VineML is a markup language which strongly correlates to HTML with added features specifically for creating UI elements in AR.


## Creating a Script

Select *Scripts* from the library drop down menu. Then click the **+** button next to Scripts. This will prompt for a **Name** to give the new script, a **Description** for the new script (this is optional), and a **Type** (Behavior or Vine) for the new script. Once these fields have been populated, click the **Create!** button at the bottom right of the library panel. This will create a new script in the script library with the selected name, description, and type.

![Name, type, and description fields to create a new script.](/img/product/IntroductionToScripting_CreateNewScript.gif)

## Attaching a Script

Create or select an asset element you wish to attach a script to. At the bottom of its inspector you will see a box that says *Drop script here.* From the script library, **click and drag** your script to the script section of the inspector and place it on the target box.

![Drag new script to script target box.](/img/product/IntroductionToScripting_AssignNewScript.gif)

## Editing Scripts

To edit a script, either select the edit icon (pencil icon) on the script thumbnail or select the script and click the edit icon in the inspector panel. This will open the script editor which can be directly type into while still viewing the canvas.

![Typing into script editor.](/img/product/IntroductionToScripting_EditScript.gif)

Once you have written or made changes to a script, you will have to save it to see its effects in the canvas. To save a script, click **File** > **Save**. Saving a script will cause the canvas to reload the script. 

There is an *Autosave* toggle in the **File** menu that can be turned on which will periodically save the script and update the canvas. However *Autosave* is **not recommended** for use with Behavior scripts as saving an incomplete Behavior script is likely to cause more errors and unexpected behavior than saving an incomplete Vine script.

You can use [**CTRL**] + [**Space**] to trigger autocomplete.

![Scrolling list of possible words to add to the current cursor position.](/img/product/IntroductionToScripting_Autocomplete.gif)

Please note this autocomplete is *not* like IntelliSense. It does *not* attempt to fully analyze your code to give only intelligent suggestions or give you detailed parameter information. It will try to identify local keywords in your code as well as offer completion for common keywords and functions.

For a complete JS API reference, see the <a style="color:#0000ee" href="/docs/API/ScriptingLanguages"><u>API documentation</u></a>.
