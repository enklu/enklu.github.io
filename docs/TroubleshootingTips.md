---
id: TroubleshootingTips
title: Troubleshooting Tips
---

## Troubleshooting help

If you run across some errors while using Enklu, here are a few simple troubleshooting tips you can try. 

First, it's recommended to work with [Google Chrome](https://www.google.com/chrome/) or a variant like [Sidekick](https://www.meetsidekick.com/). 



### Log-in help

To prevent login issues, use password managers like [Lastpass](https://www.lastpass.com/) or [Bitwarden](https://bitwarden.com/ ). 

If you still run into a login issue, reach out to us via [email](contact@enklu.com) or check out our [contact page](https://docs.enklu.com/contact).


### General tips

If you are running into issues with your scene, here are few common solutions.

### Check for code issues

To check your console, go to the bottom window and click on the Log tab

Click on the System checkbox and look for noticeable red text. If you are running into a lot of red text you could have a code issue. You can contact us for support or try to work through the issue yourself. You can see an example error message below.

![Example of a debug message on the console window](img/product/consoleCheck.png)

### I'm getting a blue/blank screen?

This is a silent editor crash. If you are getting a blue/blank screen you very likely ran into a script error.
This is often caused when adding something to the inspector window and viewing the variable. 

Doublecheck your code is not missing any } or ] as often this will cause this issue. Ensure the order of those symbols is correct because failure to do will also result in a blank page.

```
var StartClosed = "{[Start Closed:bool]}";
var RESET_MSG ="{[Reset Message :string]}";
```

### Scene won't load or crashes very quickly?

Check to see how large your assets/models are. HoloLens 1 can only support up to 100k triangles(tri's). If your model is larger then that, it may crash the scene when loaded into the web player. If you're experiencing a lot of crashes, try deleting models from the hierarchy before the scene loads. If you click on the model in the Asset Library Window it will show you how many triangles your model currently has. 

For further asset help see the guide [here](https://docs.enklu.com/docs/Assets/SceneComplexityRecommendations).

### Asset not loading correctly?

Check [here](https://docs.enklu.com/docs/Assets/ImportYourOwnAssets) to see if the file type is supported.

### Move/download assets

(This only applies to custom assets, public assets cannot be modified.)
If you need to continue to work on an asset, click on the asset in the Asset Window and click on the download button. A window will popup allowing you to review the history on that model and any updates you've made in the past. Select the model what you want to download, then click download. The file type will be .0 but you just need to [rename the file to a .zip](https://support.microsoft.com/en-us/topic/rename-a-file-baea7aab-760b-4ee0-af58-06e940d505a4#:~:text=Open%20File%20Explorer%20by%20going,to%20have%20and%20press%20Enter.) instead of .0 and then you can unzip it to continue working.  

### Test your scene in another browser

Is the scene working in another web browser? If it is working in another browser but not your main browser, then you'll need to troubleshoot your browser. If it's not working in another browser then you'll need to troubleshoot your scene.

### Clear cookies/cache

Sometimes clearing cookies/cache can solve some issues. 

Here are two ways you can do this in Chrome.

Common way
[Chrome Clear Cache & Cookies](https://support.google.com/accounts/answer/32050). 

Fast dev way
[Chrome Dev tool Clear Cache & Cookies + Hard Reload](https://developers.google.com/web/updates/2015/05/hard-reload).
Press F12 (opens dev window) then right click on the refresh arrow and hit Empty Cache and Hard Reload 

### Factory reset 

If you know you are having a browser issue with Enklu and can't find a way to fix, it a factory reset may be best. If you use a password manager, make sure you remember your master password first. A factory reset will clear all browser settings, as well as turn off any extensions. (This won't remove extensions but clears their settings, disables them, and resets login-in info). It will also clear permissions and how content is loaded.

[Factory Reset in Chrome](https://support.google.com/chrome/answer/3296214?hl=en)