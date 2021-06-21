---
id: Elements
title: Elements
---

The Elements API is a powerful abstraction that allows users to manipulate any property on any element through a handful of simple methods. This is important because these few methods allow for easy networking or persistent state. 

To change these properties you will need to reference an object. The most common form to reference an object would be:

```js
var a = this; 
```
<br>

You can then use this reference to change other properties.
```js
var a = this; 
a.visible = true; // set object visible to on
```

### Common Properties

Many functions use IDs:

```js
var a = this.id;   // Read-only. Gets the element's ID
```
Any created asset will be a ContentWidget by default. Other possible types include: LightWidget, KinectWidget, ButtonWidget, and TextWidget. Some of these types are only created through scripts. 

```js
var a = this.type; //Read-only. Get's element type. 
```
<br>

<code>This</code> is a helpful keyword you can use to return most information you will need about your current object.

```js
function enter() {
    log.info(this.transform.scale);
    log.info(this.transform.rotation);
    log.info(this.transform.position);
}
```

## Hierarchy

Any element can have another element as a child. These child elements can also have other elements as children, forming a kind of directed graph. This is visualized by the tree component in the web editor.

An element's children are accessible via the readonly children field.

```js
var children = element.children; //Read-only.
for (var i = 0, len = children.length; i < len; i++) {
    var child = children[i];
}
```

<br>

Example of turning off a particular child:
```js
  var myChildren = this.children;
  
  for(var i =0; i< myChildren.length; i++){
    myChildren[2].visible = false; 
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
```
<br>

You can also grab parent elements.
 
```js
var myParent = this.parent; //This goes up the hierarchy by one parent
var grandParent = this.parent.parent; //This goes up the hierarchy two parents 
```

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

Here is an example using schema to get the object name and rename. (Will not last outside playmode and does not change in the inspector.)
```js
  var name = this.schema.getString('name'); //get current object name
  log.info("my name is " + name); //output current name 
  this.schema.setString('name','Bob'); //change name
  log.info("my name is " + this.schema.getString('name')); //output newly changed name
```

<br>

If an element doesn't already have a value, it returns a value up the graph. In this circumstance, the property of <i>b</i> is bound to the property of <i>a</i>.

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

Here is an example of  hardcoding a name search for a child element named <i>childObj1</i>. This is not a recommended method because it's not as flexible as using a variable.
It's important to note the search filter <code>@name==</code> when searching for objects.
```js
function enter() {
  var child1 =  this.findOne('..(@name==childObj1)');
  log.info(child1);
}
```

Here is an example of searching for a child with a name set in the inspector.

<code>'{[Inspector variable label : variable type]}'</code>allows this to show in the inspector. You can of course use a regular variable if you don't want to use the inspector. Using a variable is a recommended method for its flexibility.

```js
const child = '{[Find this child:string]}'; //type in child name in inspector

function enter() {
 child  = this.findOne('..(@name==' + child + ')'); 

 var anotherChild = '';

}
```

If you would also like to set a default name for the child in the inspector, for example <i>onObject</i> change the code:
 <code>const child = '{[Find this child:string = "onObject"]}';</code>
This is can be an easy way to autofill default settings in the inspector.

Here is an example of searching for an object type, it will return the first child object of that type. 

```js
const light = this.findOne('..(@type=LightWidget)');

function enter() {
    if (light) {
        light.schema.setNumber('intensity', 0.7);
    }
}
```

It's also important to note that when searching for Vines, IDs are defined in the Vine and you won't need to use a filter to search for them. 
```js
<?Vine>
        
<Container id='vineExample'>

</Container>
```
```js
const findVine = this.findOne('..vineExample'); //look for vine ID
function enter() {
      log.info("found "+ findVine);
}
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

