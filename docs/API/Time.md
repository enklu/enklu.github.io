---
id: Time
title: Time
---

A very simple Time API provides some useful tidbits not included in the <span><a style="color:#0000ee" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank"><u>JS Date API</u></a></span>.  

<br>

To get the amount of seconds since the application has been launched, use <code>now()</code>.
```js
var now = time.now();
```

<br>

Additionally, you may retrieve the amount of seconds since last frame.
```js
var dt = time.dt();
```