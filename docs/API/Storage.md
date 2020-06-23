---
id: Storage
title: Storage (Preview)
---

The Storage API allows an experience to cache persistent data across users, per device. The interface behaves similarly to the current web standards. 

> Any data saved in the web editor will be removed when the session ends.

```javascript
const storage = require('storage-preview');
```

## Accessing Data

Data can be saved and retrieved through `setItem` and `getItem`. Complex objects can be used with `JSON.stringify` and `JSON.parse`. Data can be removed from storage via `removeItem` and `clear`. Clear will only remove data for the currently loaded experience.

```javascript
var data = {
  points: 26,
  currency: 42
}

// store data
storage.local.setItem('session', JSON.stringify(data));

// retrieve data.
var data = JSON.parse(storage.local.getItem('session'));

if (data) {
  log.info('Previous data found.');
  log.info('  Points: ' + data.points);
  log.info('  Currency: ' + data.currency);
}
```


## Keys

Information about keys can be accessed via `length` and `key`. This can be useful to iterate over storage data.

```javascript
const numKeys = storage.local.length;

for (var i = 0; i < numKeys; i++) {
  const key = storage.local.key(i);
  const data = JSON.parse(storage.local.getItem(key));
  log.info(key + ': ' + data);
}
```

## Module Properties
### `local <Storage>`

The storage object for the current device.

## `Storage` Class Properties

### `length <int>`

The number of entries stored.

## `Storage` Class Methods

### `key(index)`
- `index <int>` The index to retrieve.

Fetches a storage key based on an index.

### `getItem(key)`
- `key <string>` The key to retrieve data for.

Gets a value based on a key and returns `null` if not found.

### `setItem(key, value)`
- `key <string>` The key to set a value for.
- `value <string>` The new or updated serialized value.
- Returns: `true` if successful

Sets a value for a given key.

### `removeItem(key)`
- `key <string>` The key to remove.
- Returns: `true` if successful

Removes an entry from storage for a given key.

### `clear()`
- Returns: `true` if successful

Clears all data from storage.
