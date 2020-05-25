---
id: API_App
title: App
---

In all scripts, there is a global <code>app</code> object. This object is useful for manipulating application-wide settings, scenes inside an experience, creating new elements via scripts, and networking.

## Scene Object

The <code>scenes</code> object has functions for manipulating multi-scene experiences.

Retrieves ids of all scenes:
```js
var all = app.scenes.all;
```

Returns root element of a specific scene:
```js
var root = app.scenes.root('myScene');
```

<br>

## Elements Object

The <code>elements</code> object can be used to query all scenes for an element, create elements, or destroy them.

Retrieves element:
```js
button = app.elements.byId('specific-id');
```

<br>

Creates element as a child of another:
```js
var a = app.elements.create(root, 'Button');
var b = app.elements.create(a, 'Button', 'specific-id');
```

<br>

Creates elements from a vine, as a child of <code>a</code>:
```js
var c = app.elements.createFromVine(a, '<Menu><Button /></Menu>');
```

<br>

Destroys an element:
```js
app.elements.destroy(button);
```

<br>