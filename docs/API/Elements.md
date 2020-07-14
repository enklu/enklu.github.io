---
id: Elements
title: Elements
---

The Elements API is a powerful abstraction that allows users to manipulate any property on any element through a handful of simple methods. This is important because these few methods allow for easy networking or persistent state. 

## Hierarchy

An element may have zero to many children, which are simply other Elements, themselves having children. This forms a sort of directed graph, visualized by the tree component in the web editor.

An element's children are accessible via the readonly children field.

```js
var children = element.children;
for (var i = 0, len = children.length; i < len; i++) {
    var child = children[i];
}
```

<br>

Child elements may be added and removed.

```js
a.children;        // []
a.addChild(b);     // [b]
a.removeChild(b);  // []
```

<br>

Adding an element as a child to one element will remove it from another.

```js
a.addChild(b);  // a.children = [b]
c.addChild(b);  // a.children = [], c.children = [b]
```

<br>

Adding an element to its parent will reorder the children.

```js
a.addChild(a);      // [a]
a.addChild(c);      // [a, c]
a.addChild(a);      // [c, a]
```

<br>

Relationships can be tested explicitly or with helpers.

```js
b.parent === a;   // True
b.isChildOf(a);   // True
````

<br>

## Destroy

Elements can easily be destroyed.

```js
// Destroys element and all children
element.destroy();
```

<br>

## Schema

Elements are designed to have a flexible method of managing, composing, and synchronizing state. To that end, each element has a schema object that stores all of the element's state. Schema are a grab bag of values, each of which may be watched for changes. Additionally, schema are composable up the graph—that is, if an element's schema does not contain a specific value, it will look up the graph until the value is found.

<br>

### Get & Set

Use get and set methods to retrieve properties for primitive types.

```js
// strings
element.schema.setString('foo', 'This is foo.');
element.schema.getString('foo');   // This is foo.

// numbers
element.schema.setNumber('bar', 12);
element.schema.getNumber('bar');   // 12

// bools
element.schema.setBool('fizz', true);
element.schema.getBool('fizz');    // true
```

<br>

If an element doesn't already have a value, it returns a value up the graph. In this circumstance, the property of b is bound to the property of a.

```js
a.addChild(b);

a.schema.setNumber('foo', 12);
b.schema.getNumber('foo');         // 12

a.schema.setNumber('foo', 17);
b.schema.getNumber('foo');         // 17
```

<br>

Once the child changes its value, the binding is broken.

```js
b.schema.setNumber('foo', -7);

a.schema.getNumber('foo');         // 17
b.schema.getNumber('foo');         // -7
```

<br>

Values can be taken from an element with explicitly avoiding searching up the graph. A default value for the data type will be set & returned if unprovided.

```js
b.schema.getOwnNumber('foo');         // 0
b.schema.getOwnNumber('foo', 12);     // 12

b.schema.getOwnString('bar');         // <empty string>
b.schema.getOwnString('bar', 'flip'); // flip

b.schema.getOwnBool('fizz');          // false
b.schema.getOwnBool('fizz', true);    // true
```

<br>

### Watch & Unwatch

Properties may also be watched for changes.

```js
element.schema.setNumber('foo', -1);
element.schema.watchNumber('foo', function (prev, next) {
    log.info(
        'Value changed from {0} -> {1}',
        prev,
        next);
});

element.schema.setNumber('foo', 5); // Value changed from -1 -> 5
```

<br>

Watched properties can be unwatched.

```js
function onChange(prev, next){
  log.info('Value changes from {0} -> {1}',
    prev,
    next);
}

element.schema.setNumber('foo', -1);
element.schema.watchNumber('foo', onChange);
element.schema.setNumber('foo', 2);  // Value changes from -1 -> 2

element.schema.unwatchNumber('foo', onChange);
element.schema.setNumber('foo', 2);  // <no output>
```

<br>

Properties can be watched explicitly for one change.

```js
element.schema.setNumber('foo', -1);
element.schema.watchNumber('foo', function (prev, next) {
    log.info(
        'Value changed from {0} -> {1}',
        prev,
        next);
});

element.schema.setNumber('foo', 5);  // Value changed from -1 -> 5
element.schema.setNumber('foo', 8);  // <no output>

```

<br>

Watchers are also called for bound properties.

```js
b.schema.watchNumber('foo', function(prev, next) {
    log.info('Changed!');
});
a.schema.setNumber('foo', 12);     // Changed!
```

## Queries 

It can become taxing to iterate the element graph to find the elements you need, particularly as it grows dynamically. For this reason, elements have a built-in query language that can be used to filter and find collections of elements that you need.

Using <code>findOne()</code> retrieves a child with matching id.

```js
// a    <-parent
//  -b  <- child
var b = a.findOne('b');
```

<br>

You can search for immediate children with the dot <code>(.)</code> operator.

```js
// a
//  -b
//    -c
//  -d
//    -e
//      -f
var f = a.findOne('d.e.f');
```

<br>

Sometimes you may not know intermediate children. For a recursive search, use the double dot <code>(..)</code> operator.

```js
var f = a.findOne('..f');
```

<br>

These operators can be used in combination with each other.

```js
// a
//  -b
//    ...
//       -z
var q = a.findOne('b..f..p.q');
```

<br>

Any element property can be used to filter by using the <code>@</code> operator.

```js
var big = a.findOne('..(@size==10)');
```

<br>

Finally, a collection of matching objects can be retrieved by using find.

```js
var allBig = a.find('b..q.(@size==10)');
```

<br>

## Transform

Several shortcuts are provided, not least of which is the <code>transform</code> object. While <code>localPosition</code>, <code>localRotation</code>, and <code>localScale</code> may all be set via the schema system, the <code>transform</code> object also provides these as raw fields.

```js
// These two are equivalent
element.schema.setVec3('position', vec3(1, 1, 1));
element.transform.position = vec3(1, 1, 1);

// These two are equivalent
element.schema.setVec3('scale', vec3(1, 1, 1));
element.transform.scale = vec3(1, 1, 1);

// These two are equivalent
element.schema.setVec3('rotation', vec3(0, 0, 0)); // Internally stored as Euler values.
element.transform.rotation = q.euler(0, 0, 0);
```

<br>

World space values exist, though they should be used with care. On HoloLens, world space values include any transform changes an Anchor uses to locate its place in a space.

```js
element.transform.worldPosition;
element.transform.worldRotation;
element.transform.worldScale;
```

<br>

Helper functions exist to manage conversions between world & local coordinate systems.

```js
// Transforms a Vec3 from local space to world space
element.transform.localToWorld(vec3(0, 0, 1));

// Transforms a Vec3 from world space to local space
element.transform.worldToLocal(vec3(10, 3, 5));
```

<br>

A transform's local forward direction can be used.

```js
element.transform.forward;
```

<br>

An element can be rotated to look towards a given direction.
```js
element.transform.lookAt(v.up);
```

## Events

Many elements dispatch events. These events can be listened for using <code>on</code> and <code>off</code> functions, which attach a callback to a specific event. It is good practice to attach events on <code>enter</code> and remove them in <code>exit</code>.

```js
a.on('activated', function(evt) {
    //
});

a.off('activated', onActivated);
```

<br>

## Message Passing

Messages may be passed to elements. The message consists of a function name and any number of parameters. The receiving element then calls the function by name on all attached scripts with the passed in parameters.

```js
var menu = this.find('..menu-new');

// sends 'open' message to all attached scripts
menu.send('open');  // open()
menu.send('register', 'foo', 'bar', 5); // register('foo', 'bar', 5);
```

<br>

If a Behavior script cannot handle a message the message is discarded. However, a special function may be defined which receives all discarded events.
```js
function msgMissing(type, args) {
    log.info(type + ' was called but I could not handle it.');
}
```

<br>

## Miscellaneous

The Elements API has a few other miscellaneous usages for scripting.
```js
a.id;             // Read-only. Gets the element's ID

a.type;           // Read-only. Gets the element's type

a.visible = true; // Gets or sets this element's visibility
```
