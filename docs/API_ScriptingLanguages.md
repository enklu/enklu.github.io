---
id: API_ScriptingLanguages
title: Scripting Languages
---

Enklu Cloud's scripting interface offers 2 types of scripts: Behavior scripts and Vine scripts. Behavior scripts utilize JavaScript while Vine scripts utilize VineML.

## Vine Scripts

Vine scripts are written using VineML.  VineML is a markup language which strongly correlates to HTML. However unlike HTML, VineML has several built-in features specifically aimed at creating UI elements for AR. In Enklu Cloud, Vine scripts are used to describe element hierarchies, assign schema data, and display information.

VineML files are called *documents*. These documents are made up of a hierarchy of nested *tags* which start from a single root element. Each tag can have zero or more attributes. Let's look at an example Vine script:

```xml
/* A vine header is optional.*/
<?Vine>

/* Documents can have only a single root element. */
<Float>
    <Button label='Hello World!' />
</Float>
```
This example shows an opening and closing *Float* tags <code>\<Float>\</Float></code> which create the root element. Within the *Float* tags is a self closing *Button* tag <code>\<Button /></code>. Note that VineML supports C-style block comments.  It is best practice to avoid using comments between an opening and closing tag.

<br>

### Tags

Tags follow XHTML conventions, i.e. every tag must be closed. In HTML, we can write <code>\<br></code>, but in VineML this is invalid. Every tag must have a closing tag or it must be a self closing tag.

This is not valid VineML:
```xml
<Container>
/* Do not use this */
```
These are both valid options.
```xml
<Container></Container>

<Container />
```

<br>

In addition, tags may not have raw text inside of them. All values are passed to tags through attributes.

This is not valid VineML:
```xml
<Caption>Hello World</Caption>
/* Do not use this */
```
Instead we use attributes:
```xml
<Caption label='Hello World' />
```

<br>

### Attributes

While tags define the object structure, attributes define the object properties. VineML has support for string, boolean, number, and vector literals. Any property of an element may be passed through element attributes.
```xml
<Caption
    label = 'Hello'
    visible = false 
    font.size = 100
    width = 1000.5
    position = (0,0,10)
/>
```

<br>

## Behavior Scripts

The entry point into scripting with Enklu is the Behavior script which utilizes JavaScript. Many Behavior scripts may be attached to elements throughout the hierarchy. They can manipulate the object graph, work with central systems, or send messages to scripts on other elements.

<br>

### Lifecycle Functions

Before any Vine or Behavior scripts are executed, all scripts on an element are loaded. Once they are all loaded, they begin to execute in the order in which they are arranged on the element.

After initial execution of all Vine and Behavior scripts, each Behavior script will begin calling lifecycle methods.

If an enter function is defined, it will be called once and only once after all scripts have been initially executed. This is a safe place to manipulate elements created through vines, as the elements are guaranteed to be created by this point.
```js
var okBtn;

function enter() {
    okBtn = this.find('..btn-ok');
    okBtn.on('activated', onOkActivated);
}

function onOkActivated() {
    log.info('Ok button was activated!');
}
```

<br>

An update function may also be defined, which will be called every frame. This function is guaranteed to be called after enter is called, though an enter function is not required for update to be called.
```js
var acc = 0;
var radius = 1;
var speed = 1.3;

function update() {
    acc += speed * time.dt();

    // move the object in a circle
    this.transform.position = vec3(
        rad * Math.cos(acc),
        0,
        rad * Math.sin(acc));
}
```

<br>

Finally, an exit function may be defined which is called right before the object is destroyed.
```js
function exit() {
    okBtn.off('activated', onOkActivated);
}
```

<br>

## Scripts as Modules

All scripts are wrapped in functions to prevent name collision in the global scope. Because of this, all functions that should be exposed to other scripts and the lifecycle functions should be exported on a module object passed in by the runtime.

A simple script:
```js
log.debug('Hello World!');
````
This script would be treated by the runtime like the following:
```js
var module_1 = { };
(function(module) {
    log.debug('Hello World!');
})(module_1);
```

<br>

The runtime will use the specific module's exports to call any lifecycle functions as well any functions to expose to other scripts. Be sure to expose these methods via <code>module.exports</code>. For example:
```js
function enter() {
    log.debug('Enter Called!');
}

function exit() {
    log.debug('Exit Called!');
}

function sayHi() {
    log.debug('Hello!');
}

module.exports = {
    enter: enter,
    exit: exit,
    sayHi: sayHi
};
```

<br>

## Preprocessors
A powerful preprocessor is included as part of the Behavior and VineML execution pipeline. The preprocessor can process two types of blocks: schema and js blocks. The former allows injecting schema data, while the latter allows generating VineML or JavaScript via... JavaScript.

<br>

### Schema Preprocessor
It is very useful to insert schema data into a VineML document or a Behavior script. This allows for scripts to be reused with different data on different elements. While <code>{{ }}</code> allow you to include JS, <code>{[ ]}</code> blocks allow you to include Prop Definitions. These definitions define the type of data needed, which expose inspector fields in Enklu editors.

Values can be pulled from an element's schema:
```js
<Button label='{[label]}' />
````
This will expose a 'label' string field in the editors and store the 'label' data in a prop on the element. A type may be specified as well:
```js
<Button label='{[amount:float]}' />
```
This will inform the editor when building the editor field. Finally, you may also specify a default value. If a default value is specified, the type is required:
```js
<Button label='{[label:String = "Push Me!"]}' />
```

<br>

### JS Preprocessor
Sometimes it's useful to insert logic into a VineML document. In these cases, scripts can be embedded in a VineML document that will be executed by a JavaScript preprocessor before being handed off to the VineML parser.

The value returned from the JS block is inserted into the VineML document:
```js
<?Vine>

<Menu>
    {{
        var elements = [];
        for (var i = 0; i < 100; i++) {
            elements.push("<Button label='" + i + "' />");
        }

        return elements.join('');
    }}
</Menu>
```

<br>

### Advanced Usage
Both the schema and the JS preprocessors are applied to every VineML document and Behavior script. They are always executed schema first, then JS. Because of this, one may be used inside another.

We are generating VineML with JS by using the schema prop, numElements. The schema value is injected before the JS executes.
```js
<Menu>
    {{
        var result = [];
        for (var i = 0; i < {[numElements:int = 10]}; i++) {
            result.push("<Button label='" + i + "' />");
        }

        return result.join('');
    }}
</Menu>
```