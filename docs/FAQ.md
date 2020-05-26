---
id: FAQ
title: Frequently Asked Questions
---

<img src="img/undraw_ask_question.svg" style="max-height: 300px"/>

## Is Enklu Cloud free?
Yes!  Anyone is free to use Enklu Cloud.  Feel free to create anything with an unlimited number of collaborators.  We do offer paid Enklu Pro Support and Enklu Enterprise Support packages for larger project/event needs.


## Do I need to download Enklu Cloud?
Nope! Build AR experiences with Enklu Cloud directly in your web browser.


## Am I able to use Enklu Cloud without programming experience?
Yes!  Enklu Cloud offers access to a drag and drop public script library for anyone to use.  Want your ball to bounce?  Just drag the public Bounce script onto your ball asset element!


## I am a programmer.  Can I create my own custom scripts?
Absolutely!  In Enklu Cloud, you can create Behavior scripts using JavaScript and Vine scripts using VineML (a simple markup language).


## I am not a 3D artist.  Will I need to create my own 3D assets?
Nope!  Enklu Cloud offers access to a drag and drop public asset library for anyone to use.  We are always adding new assets to our public asset library, so keep a lookout for more!


## I am a 3D artist.  Can I use my own 3D assets?
Absolutely!  You can import your own 3D assets with custom textures, shaders, animations, etc and Enklu Cloud will automatically format them for our target platforms. Assets will be automatically available for new platforms as we support them.


## Are files I upload to Enklu Cloud publicly available to anyone?
No.  The public asset and script libraries we provide are available to anyone.  But any content you upload or create within Enklu Cloud is only available to you and those with whom you specifically share your experiences.  You can add others to your experience as collaborators with View or Edit permissions.  You can also update or remove these permissions at any time.


## What 3D file types are supported?
Currently, Enklu Cloud supports two 3D model formats: '.obj' and .'fbx', though more supported formats are on their way.


## Does Enklu Cloud support image assets?
Yes.  The image file extensions Enklu Cloud supports are: '.bmp', '.exr', '.gif', '.hdr', '.iff', '.jpg', '.pict', '.png', '.psd', '.pga', '.tiff'.  Please note that at this time, your image file extensions must match one of these listed.  For example, you can upload a '.tiff' file, but not a '.tif'.  To upload a '.tif', you will have to rename the file extension to '.tiff' before attempting to upload it.


## Does Enklu Cloud support audio assets?
Yes.  The audio file extensions Enklu Cloud supports are: '.mp3', '.ogg', '.wav', '.aiff', '.aif', '.mod', '.it', '.s3m', '.xm'.   Please note that at this time, your audio file extensions must match one of these listed.  For example, you can upload a '.wav file, but not a '.wave'.  To upload a '.wave', you will have to rename the file extension to '.wav' before attempting to upload it.


## What devices are supported? 
Enklu currently supports the Microsoft HoloLens 1 & HoloLens 2.


## What programming language does Enklu Cloud use?
Our scripting interface offers 2 types of scripts: Behavior scripts and Vine scripts. Behavior scripts utilize JavaScript. Vine scripts utilize VineML. VineML is a markup language which strongly correlates to HTML with added features specifically for creating UI elements in AR.


## Would our team be able to build off of the Enklu player?
Of course! We believe that open source is an opportunity to build better software together. Check out our GitHub <span><a style="color:#0000ee" href="https://github.com/enklu" target="_blank"><u>here</u></a></span>.


## Can users collaborate remotely?
Yes, users can view and share assets remotely and make changes in real time for all users across all devices.


## Are animations supported? 
Yes, animated 3D models are supported.


## What does Enklu use for multiplayer optimization?
<p>Enklu uses an in-house multiplayer server built on top of&nbsp;<span><a style="color:#0000ee" href="https://getakka.net/" target="_blank"><u>Akka.NET</u></a></span>.  We transfer data in byte buffers and use hashes where needed to slim down our I/O payloads as much as possible.  When clients join/reconnect, they receive a delta of everything that has occurred from the initial scene state, so getting initial game state is also very fast.</p>