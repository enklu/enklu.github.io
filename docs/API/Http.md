---
id: Http
title: HTTP (Preview)
---

The HTTP API is currently in _preview_, meaning that the api may change significantly in the future.

```javascript
const http = require('http-preview');
```

## Sending requests

Send requests using the `send` function. The HTTP method must be provided, but a body may be included. Pull the body from the response.

Enklu currently supports ES5 syntax, so the [async and await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) keywords are not available. However, the interface closely resembles the web technology specification by using the `then` and `fail` functions to chain handlers onto the request. These methods should be used to handle the response.

```javascript
http.send(
    'https://cloud.enklu.com:10001/v1/versions/web',
    { method: 'GET' })
  .then(function(res) {
    var json = JSON.parse(res.text());

    log.info('Current web version is ' + json.body.version);
  });
```

## Shortcut Methods

The HTTP API also includes shortcut methods for the common HTTP verbs: `get`, `post`, `put`, and `delete`. Other verbs may be available in the future.

```javascript
http.get('https://cloud.enklu.com:10001/v1/versions/web', {});

http.post(
  'https://cloud.enklu.com:10001/v1/email/signin',
  {
    body: {
      email: 'foo@bar.com',
      password: 'fizzbuzz'
    } 
  });

http.put(url,
  {
    body: {
      name: 'testing'
    } 
  });

http.delete(url, {});
```

## Module Methods

### `send(url, parameters)`
- `url <string>`
- `parameters <object>` Additional information for the request. `parameters.method` is required while a `parameters.body` object is optional. The body is encoded as JSON.

Sends a `GET`, `POST`, `PUT`, or `DELETE` request.

### `get(url, parameters)`
- `url <string>`
- `parameters <objects>` Currently should be an empty object (`{}`).
- Returns an `AsyncRequest` object.

Sends a `GET` request.

### `post(url, parameters)`
- `url <string>`
- `parameters <object>` Accepts a `parameters.body` object that will be encoded as JSON.
- Returns an `AsyncRequest` object.

Sends a `POST` request.

### `put(url, parameters)`
- `url <string>`
- `parameters <object>` Accepts a `parameters.body` object that will be encoded as JSON.
- Returns an `AsyncRequest` object.

Sends a `PUT` request.

### `delete(url, parameters)`
- `url <string>`
- `parameters <objects>` Currently should be an empty object (`{}`).
- Returns an `AsyncRequest` object.

Sends a `DELETE` request.

## `AsyncRequest` Methods

### `then(callback)`
- `callback <function>` Receives a `Response` object as a parameter.

Called when a request succeeds.

### `fail(callback)`
- `callback <function>` Receives an error as a parameter.

Called when a request fails.

## `Response` Class Parameters

### `ok <bool>`
Wether the request succeeded with a status code in the 200-299 range.

### `status <int>`
The Http status code.

## `Response` Class Methods

### `text()`
- Returns a the raw text `string` of the response body.

Accesses the response's body.
