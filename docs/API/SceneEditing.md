---
id: SceneEditing
title: Scene Editing
---

Enklu comes with a simple scene editing API. This allows scripts running in the scene to make changes to the scene. This should _not_ be used for multiplayer, but is a handy way to automate scene editing.

```javascript
const editp = require('edit');
```

## Connection

First, make sure the edit api is connected to the Enklu platform. This is generally done after checking the `isConnected` flag. The `edit` object also fires events when the `isConnected` value changes, i.e. as the device connects and disconnects from the authoring server.

```javascript
if (edit.isConnected) {
	start();
} else {
	edit.connect(function(err) {
		if (err) {
			log.error("Oh no! I couldn't connect : " + err);
		} else {
			start();
		}
	});
}
```

Then, add a listener for connection changes.


```javascript
edit.on('connectionchange', function (isConnected) {
	if (!isConnected) {
		log.warn('We were just disconnected!');
	}
});
```


## Transactions

The scene can be edited through the use of transactions (txns). A transaction is a list of actions on a scene that are applied atomically. This means that if any of the actions fail, all of the actions are rolled back.


First, create a transaction.

```javascript
var txn = edit.txns.create();
```

Next, add actions to the transaction.

```javascript
txn
	.update(element.id, "bool", "visible", true)
	.update(element.id, "vec3", "position", vec3(0, 1, 0));
```

Finally, make a request to apply the transaction.

```javascript
// fire and forget (useful for frequent updates)
edit.txns.request(txn);

// callback
edit.txns.requestCallback(txn, function(err) {
	if (err) {
		log.error('There was an error : ' + err);
	}
});
```

You may also duplicate an element. This requires creating a unique id for the element ahead of time. This is so that the created element may be referenced with other actions within the same transaction.

```javascript
var id = edit.txns.generateId(); // generates a unique id for the new element
var txn = edit.txns
	.create()
	// include the element this new element should be a child of, the element to duplicate, and the id of the new element
	.duplicate(parentElement.id, templateElement.id, id)

	// now we can reference the created element before it's even created
	.update(id, "bool", "visible", false);
```

Finally, delete elements with `delete`.

```javascript
var txn = edit.txns
	.create()
	.delete(id);
```

## Module Properties

### `isConnected <bool>`
- True if the scene is connected to the authoring server.

## Module Methods

### `connect(callback)`
- `callback <function>` Called on success or failure. If connection fails, an `object` describing the error is passed as
a parameter.

Coonect to the authoring server.

### `txns.create()`
- Returns: a new `ElementTxn` object

Creates a transaction.

### `txns.generateId()`
- Returns: a guid `string`

Generates a new guid.

### `txns.request(txn)`
- `txn <ElementTxn>` The transaction to send.

Sends a transation to the authoring server.

### `txns.requestCallback(txn, callback)`
- `txn <ElementTcn>` The transaction to send.
- `callback <function>` Called when the request completes. If there was an error, it is passed as a paramter.

Sends a transation to the authoring server, with callback.

# `ElementTxn` Class

## Instance Methods

### `update(elementId, schemaType, key, value)`
- `elementId <string>` Id of the element to apply transaction to.
- `schemaType <string>` Describes the value's type. Acceptable values are `string`, `int`, `float`, `bool`, `col4`, and
`vec3`.
- `key <string>` The key in the element's schema to update.
- `value <object>` The new value.

Applies a new value to a key in an element's schema.

### `duplicate(parentId, templateId, newId)`
- `parentId <string>` Id of the new element's parent.
- `templateId <string>` Id of the element to be duplicated.
- `newId <string>` ID of the new element.

Copies an element.

### `create(parentId, elementType, elementId)`
- `parentId <string>` Id of the new element's parent.
- `elementType <int>` An `integer` representing the new element's type (see below).
- `elementId <string>` The ID if the new element.

Creates a new element that is the child of the provided parent element.

### `delete(elementId)`
- `elementId <string>` The ID of the element to be deleted.

Deletes an element

# Element Types
- Container Widget: `0`
- Image Widget: `10`
- Button Widget: `20`
- SAI Widget: `21`
- Menu Widget: `100`
- Submenu Widget: `101`
- Text Crawl Widget: `120`
- Float Widget: `130`
- Screen Widget: `131`
- Toggle Widget: `140`
- Slider Widget: `150`
- Select Widget: `200`
- Grid Wiget: `201`
- Option Element: `210`
- Option Group Element: `211`
- Prompt Widget: `270`
- Content Widget: `1000`
- Light Widget: `1100`
- Scan Widget: `1200`
- Kinect Widget: `1300`
- Camera Widget: `1400`
- Trail Widget: `1500`
- Scale Transition: `10000`
- Transition: `10001`
- World Anchor: `1000000`
- QR Anchor: `10000001`
