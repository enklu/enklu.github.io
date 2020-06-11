---
id: Logging
title: Logging
---

The built-in logging API is useful for debugging.  Output logs can be viewed both in the logging panel in the Web Editor or in the logging display within the Enklu HoloLens app.  

## Logging Levels
The logging API supports 4 levels of logging: debug, info, warning, and error.  Output logs are formatted starting with the log level, then the timestamp for the log, then the contents of the log.  System logs use these same log levels and formatting:
<div style="display: flex; align-items: center; font-size: 90%;"><div style="margin-right: 10px; width: 80px; background: rgb(91, 192, 222); border-radius: 0.25em; color: rgb(255, 255, 255); font-size: 75%; font-weight: 700; line-height: 1; white-space: nowrap; text-align: center; padding: 4px 5px;">Info</div><div style="margin-right: 10px; color: rgb(153, 153, 153);">2:04:54 PM</div><div style="margin-right: 10px; flex: 1 1 0%; word-break: break-word;">Updating pixel light count.</div><div style="color: rgb(153, 153, 153); font-size: 75%; font-style: italic;">System</div></div>
<div style="display: flex; align-items: center; font-size: 90%;"><div style="margin-right: 10px; width: 80px; background: rgb(240, 173, 78); border-radius: 0.25em; color: rgb(255, 255, 255); font-size: 75%; font-weight: 700; line-height: 1; white-space: nowrap; text-align: center; padding: 4px 5px;">Warning</div><div style="margin-right: 10px; color: rgb(153, 153, 153);">1:59:43 PM</div><div style="margin-right: 10px; flex: 1 1 0%; word-break: break-word;">JavaScript error : TypeError: Object has no method 'test'.</div><div style="color: rgb(153, 153, 153); font-size: 75%; font-style: italic;">System</div></div>
<br>

### Debug
A debug level log in a Behavior script:

```js
log.debug('A debug level log.');
````
This log would output to the logging panel in the Web Editor like this:
<div style="display: flex; align-items: center; font-size: 90%; margin: 15px 0px;"><div style="margin-right: 10px; width: 80px; background: rgb(119, 119, 119); border-radius: 0.25em; color: rgb(255, 255, 255); font-size: 75%; font-weight: 700; line-height: 1; white-space: nowrap; text-align: center; padding: 4px 5px;">Debug</div><div style="margin-right: 10px; color: rgb(153, 153, 153);">1:18:35 PM</div><div style="margin-right: 10px; flex: 1 1 0%; word-break: break-word;">A debug level log.</div></div>
<br>

### Info
An info level log in a Behavior script:

```js
log.info('Hello! I am an info level log.');
````
This log would output to the logging panel in the Web Editor like this:
<div style="display: flex; align-items: center; font-size: 90%; margin: 15px 0px;"><div style="margin-right: 10px; width: 80px; background: rgb(91, 192, 222); border-radius: 0.25em; color: rgb(255, 255, 255); font-size: 75%; font-weight: 700; line-height: 1; white-space: nowrap; text-align: center; padding: 4px 5px;">Info</div><div style="margin-right: 10px; color: rgb(153, 153, 153);">12:47:41 PM</div><div style="margin-right: 10px; flex: 1 1 0%; word-break: break-word;">Hello!  I am an info level log.</div></div>
<br>

### Warning
A warning level log in a Behavior script:

```js
log.warn('Warning, this is a warning level log.');
````
This log would output to the logging panel in the Web Editor like this:
<div style="display: flex; align-items: center; font-size: 90%; margin: 15px 0px;"><div style="margin-right: 10px; width: 80px; background: rgb(240, 173, 78); border-radius: 0.25em; color: rgb(255, 255, 255); font-size: 75%; font-weight: 700; line-height: 1; white-space: nowrap; text-align: center; padding: 4px 5px;">Warning</div><div style="margin-right: 10px; color: rgb(153, 153, 153);">1:26:51 PM</div><div style="margin-right: 10px; flex: 1 1 0%; word-break: break-word;">Warning, this is a warning level log.</div></div>
<br>

### Error
An error level log in a Behavior script:

```js
log.error('Error... this is a correctly output error log.');
````
This log would output to the logging panel in the Web Editor like this:
<div style="display: flex; align-items: center; font-size: 90%; margin: 15px 0px;"><div style="margin-right: 10px; width: 80px; background: rgb(217, 83, 79); border-radius: 0.25em; color: rgb(255, 255, 255); font-size: 75%; font-weight: 700; line-height: 1; white-space: nowrap; text-align: center; padding: 4px 5px;">Error</div><div style="margin-right: 10px; color: rgb(153, 153, 153);">1:49:19 PM</div><div style="margin-right: 10px; flex: 1 1 0%; word-break: break-word;">Error... this is a correctly output error log.</div></div>
<br>

### Variables and String Replacement

Variables can be logged directly.  Logging a variable could look like this:
```js
  const somethingCool = 'Turtles';
  log.info(somethingCool);
```
This script would output to the logging panel in the Web Editor like this:

<div style="display: flex; align-items: center; font-size: 90%; margin: 15px 0px;"><div style="margin-right: 10px; width: 80px; background: rgb(91, 192, 222); border-radius: 0.25em; color: rgb(255, 255, 255); font-size: 75%; font-weight: 700; line-height: 1; white-space: nowrap; text-align: center; padding: 4px 5px;">Info</div><div style="margin-right: 10px; color: rgb(153, 153, 153);">2:41:35 PM</div><div style="margin-right: 10px; flex: 1 1 0%; word-break: break-word;">Turtles</div></div>
<br>

Each logging method also supports C# style string replacement using curly braces <code>{}</code>.  Logging a variable using string replacement could look like this:
```js
  const somethingCool = 'Turtles';
  log.info('Wanna know something cool? {0} are cool.', somethingCool);
```
This script would output to the logging panel in the Web Editor like this:

<div style="display: flex; align-items: center; font-size: 90%; margin: 15px 0px;"><div style="margin-right: 10px; width: 80px; background: rgb(91, 192, 222); border-radius: 0.25em; color: rgb(255, 255, 255); font-size: 75%; font-weight: 700; line-height: 1; white-space: nowrap; text-align: center; padding: 4px 5px;">Info</div><div style="margin-right: 10px; color: rgb(153, 153, 153);">3:06:25 PM</div><div style="margin-right: 10px; flex: 1 1 0%; word-break: break-word;">Wanna know something cool? Turtles are cool.</div></div>
