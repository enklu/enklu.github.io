---
id: NodeSDK
title: Node SDK
---

# Enklu Multiplayer SDK for Node.Js

Every experience developed on [Enklu Cloud](https://cloud.enklu.com) is backed by a powerful mutliplayer service, Mycelium. 
The goal of this SDK is to provide external applications and devices with session-based access to experiences via Mycelium. 
With this SDK, you can send and receive messages to Enklu Cloud from your own servers, IoT devices, custom applications, and whatever else you can imagine.

## Should I use this SDK?

Enklu Cloud's behavior scripting can be used to create multiplayer experiences, as documented <a href='/docs/API/Multiplayer'>here</a>.

This SDK is designed for users who have specific use cases that requires multiplayer code to be running external from user devices. 

## Installing

In the future a NPM module will be available. Currently, it can be cloned directly from [GitHub](https://github.com/enklu/enklu-node-sdk).

## Getting Started

An [Enklu Cloud](https://cloud.enklu.com) account is required to use this SDK. Once you have an account set up, you can generate a token for the authoring API.

```bash
curl -X POST 'https://cloud.enklu.com:10001/v1/email/signin' \
     -H 'Content-Type: application/json' \
     -d '{"email":"roland@druidia.com","password":"12345"}'
```

The `token` value received in a successful response can then be used to generate a multiplayer token. Each token is associated with a specific experience, so an experience Id is required as well. You can find the app id for an experience on the "My Experiences" modal or in the Inspector panel when the root element of an experience is selected in the [Enklu Cloud](cloud.enklu.com) web editor.

```bash
curl -X POST 'https://cloud.enklu.com:10001/v1/app/${your-app-id}/token' \
     -H 'Authorization: Bearer ${your-jwt-token}' \
     -H 'Content-Type: application/json' \
     -d '{}'
```

A successful respnse will contain a Json Web Token that can be used in the SDK. Now you can start sending messages.

```javascript
const {Mycelium} = require('enklu-node-sdk');

const JWT = process.env.JWT;
const mycelium = new Mycelium();

let isLoggedIn = false;

mycelium.on('message', (msg) => {
  console.log(`received ${msg.event} event`);
  if (msg.event === 'LoginResponse') {
    isLoggedIn = true;
  }

  if (isLoggedIn) {
    mycelium.broadcast('ping', 'hello from the sdk');
  }
});

mycelium.on('connect', () => {
  console.log('connected to mycelium!');
  mycelium.login(JWT);
});

mycelium.connect();

```

## API Reference

A more comprehension API reference is available on [GitHub](https://github.com/enklu/enklu-node-sdk).
