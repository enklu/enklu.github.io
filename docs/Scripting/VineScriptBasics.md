---
id: VineScriptBasics
title: Vine Script Basics
---

Enklu Cloud's scripting interface offers 2 types of scripts: **Behavior** scripts and **Vine** scripts. This article will focus on Vine scripts. For information on Behavior scripts, please check out our [Behavior Script Basics](/docs/Scripting/BehaviorScriptBasics) article.

Vine scripts utilize VineML. VineML is a markup language which strongly correlates to HTML. However unlike HTML, VineML has several built-in features specifically aimed at creating UI elements for AR. In Enklu Cloud, Vine scripts are used to describe element hierarchies, assign schema data, and display information.

## Creating a Vine Script

Select *Scripts* from the library drop down menu. Then click the **+** button next to *Scripts*. This will prompt for a **Name** to give the new script, a **Description** for the new script (this is optional), and a **Type** for the new script. Click the **Type** drop down menu and select **Vine**. Once these fields have been populated, click the **Create!** button at the bottom right of the library panel. This will create a new Vine script in the script library with the input name and description.

![Name, type, and description fields to create a new script.](/img/product/VineScriptBasics_CreateNewVine.gif)

## Attaching a Vine Script

Create or select an asset element you wish to attach a script to. At the bottom of its inspector you will see a box that says *Drop script here.* From the script library, click and drag your Vine script to the script section of the inspector and place it on the target box.

![Drag new script to script target box.](/img/product/VineScriptBasics_AttachNewVine.gif)

## Writing and Editing Vine Scripts

To edit a script, either select the edit icon (pencil icon) on the script thumbnail or select the script and click the edit icon in the inspector panel. This will open the script editor which can be directly type into while still viewing the canvas.

![Typing into script editor.](/img/product/VineScriptBasics_EditNewVine.gif)

## VineML Tags

All new Vine scripts will be created with a header tag: `<?Vine>`.

![Newly created vine script.](/img/product/VineScriptBasics_NewVineContents.png)

Similar to HTML, Vine scripts are made up of a hierarchy of nested tags, like this header tag. Tags can have an open and closing tag, or they may be self closing.

### Opening and Closing Tags

In HTML, you can write single tags like `<br>`. In VineML the only single tag you can write is the header tag: `<?Vine>`. Every other tag must have an opening and closing tag: `<Container></Container>`. Or it must use a self closing tag: `<Container />`. A single tag `<Container>` would be invalid.

### Case Sensitive

Another difference from HTML, Vine tags must begin with an uppercase letter: `<Button />`. A lowercase tag `<button />` would be invalid.

### Attributes

In addition, tags may not have raw text inside of them. `<Text>Hello!</Text>` would be invalid. All values are passed to tags through attributes: `<Text label = 'Hello!'></Text>`. While tags define the object structure, attributes define the object properties. VineML has support for string, boolean, number, and vector literals. Any property of an element may be passed through element attributes.  For a more complete list of attributes that can be used please see our <a style="color:#35947c" href="https://github.com/enklu/enkluplayer/blob/master/Documentation~/element.schema.properties.md" target="_blank" rel="noopener"><u>Element Schema Properties</u></a> document on our Github.


## Button Example Script

Let's take a look at an example Vine script that creates a button:

```
<?Vine>
  <Button
    label = 'Hello!'
    position = (0,1,0)
    scale = (4,4,4)
  />
```

It starts out with the header tag: `<?Vine>`. Nested underneath the header tag is a button tag: `<Button />`. Within the button tag are 3 attributes. 

### `<Button />`

The button tag is what creates the button. You don't have to add anything else; a button will automatically be displayed and can be activated. However, a button alone will not do anything when activated. You will need to add a Behavior script if you want something to happen when the button is activated.

![Button with "Hello!" text.  Cursor dragged onto button activates it.](/img/product/VineScriptBasics_VineButtonActivate.gif)

Within the button tag are 3 attributes: `label`, `position`, and `scale`. Each of the attributes is written on its own line for readability, but attributes can also be written in the same line as the button tag. So the same script could be written this way instead:

```
<?Vine>
  <Button label='Hello!' position=(0,1,0) scale=(4,4,4) />
```

Multi-line attributes compared to single-line attributes just come down to an individual's preference. But in general, the more attributes you include, the easier it will be to read using multiple lines rather than writing every attribute on a single line.

### `label = 'Hello!'`

The label attribute indicates what text to display next to the button. If no label attribute is defined, the button will have no text displayed.

### `position = (0,1,0)`
The position attribute indicates the button's position relative to the element the script is attached to. If the script is attached to an element at position `(1,1,0)` and the button's position attribute is `(0,1,0)`, the button's world position will end up being `(1,2,0)`. If no position attribute is defined, the button will be positioned at the origin of the element it is attached to.

### `scale = (4,4,4)`
The scale attribute indicates the button's size. Text has a separate `fontSize` attribute that can be defined which scales with the scale attribute. For example, text with `fontSize=60` and `scale=(2,2,2)` would be smaller than text with `fontSize=60` and `scale=(5,5,5)`.

![Button with "Hello!" text.  Type smaller scale and save.  Text gets smaller.](/img/product/VineScriptBasics_VineButtonScale.gif)

The gif above shows how changing the scale attribute affects the button. The scale is changed from `(4,4,4)` to `(2,2,2)`. You can see both the button and its text decrease in size.
