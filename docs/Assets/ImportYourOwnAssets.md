---
id: ImportYourOwnAssets
title: Import Your Own Assets
---

Different platforms have different needs, which makes Enklu Cloud's automated asset import system a much welcome convenience. Enklu Cloud can take your models (including textures, animations, etc.) and format them for all target platforms automatically. All you need to do is drag and drop.

## Uploading 3D Models

Currently, Enklu Cloud supports several 3D model formats, including common CAD formats:

- .asm
- .sldasm, .sldasm.1 (in a .zip file with any dependencies)
- .prt, .prt.1
- .sldprt, .sldprt.1
- .dwg
- .dxf
- .fbx
- .obj
- .pxz (in a .zip file with any dependencies)
- .gltf
- .3dm
- .stl

We are constantly evaluating new formats to support. If a type that is important to you isn't on the list, please [Contact us](/contact).

> Unless noted otherwise, models can be imported directly into the editor. Some types, like `.asm` files, must be in a `.zip` archive since they often have other files as dependencies. 

To import a model, navigate to the Asset Library, click the **+** (plus) icon, and drag your file into the *Drop files here* section. Then click **Upload!** This will upload your asset to Enklu Cloud which will automatically package it for all target platforms. Depending on the size and complexity of your asset, this can take anywhere from several seconds to several minutes.

![Drag asset file from dektop to Web Editor.  Drag uploaded file onto element to see it appear in the canvas.](/img/product/editor/UploadAsset.gif)

Once your model has been uploaded successfully, you will see notifications in the top right corner indicating which platform(s) it has completed processing. In the experience section of the Asset Library, you will see a thumbnail for your newly uploaded asset. Then your model is ready to be used! From here, read about how to [place an asset in the scene](/docs/Assets/PlacingAnAssetInTheScene).

## Uploading 2D Image Assets

You can also upload 2D image assets. Uploading image assets works the same as uploading 3D models. The image file extensions Enklu Cloud supports are:

- .bmp
- .exr
- .gif
- .hdr
- .iff
- .jpg
- .pict
- .png
- .psd
- .pga
- .tiff

> Please note that at this time, your image file extensions must match one of these listed.  For example, you can upload a `.tiff` file, but not a `.tif`.  To upload a `.tif`, you will have to rename the file extension to `.tiff` before attempting to upload it.


## Uploading Audio Files

You can also upload audio files. Uploading audio files works the same as uploading 3D models and 2D images. The audio file extensions Enklu Cloud supports are:

- .mp3
- .ogg
- .wav
- .aiff
- .aif
- .mod
- .it
- .s3m
- .xm  

> Please note that at this time, your audio file extensions must match one of these listed.  For example, you can upload a `.wav` file, but not a `.wave`.  To upload a `.wave`, you will have to rename the file extension to `.wav` before attempting to upload it.

## Uploading Video Files

Enklu Cloud supports importing video files as well. Uploading a video works the same way as uploading any other asset type (See the instructions for [uploading 3D models](#uploading-3d-models) for details). The video file extensions Enklu Cloud supports are:

- .asf
- .avi
- .dv
- .m4v
- .mov
- .mp4
- .mpg
- .mpeg
- .ogv
- .vp8
- .webm
- .wmv

> Currently, videos will not play in the Enklu Cloud editor, but they will play as expected on supported devices.

If you have a direct url to a video file, you can also embed it in your experience [using VineML](API/Vines.md#video).
