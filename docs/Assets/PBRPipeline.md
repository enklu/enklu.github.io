---
id: PBRPipeline
title: PBR Pipeline
---

Enklu supports a Physically Based Shading (PBR) model which allows artists to create much more compelling content. PBR can be used by creating a zip archive of the necessary textures, named appropriately.

## Setup Files

Your zip should contain your FBX and one or more of the following maps:

| Map | Required | Suffix | Description |
|-----|----------|--------|-------------|
| Diffuse | Yes | DF | This is sampled for albedo. This map also sets the naming convention for all other maps. Whatever comes before DF is the prefix that the other maps must use as well. For example, for myPlant_DF.tga, the normal map would need to be named myPlant_N.tga.  If there is an alpha channel, it will be used for alpha cutout. |
| Normals | No | N | This is sampled for normals. |
| M/R/A | No | MRA | Metal (red channel), Roughness (green channel), Ambient Occlusion (blue channel). |

## Custom Thumbnail (optional)

Enklu will automatically generate thumbnails for assets, but sometimes a custom thumbnail is desired. In this case, simple include an image file (JPG, PNG, TGA) named Thumb (eg - Thumb.png). This image will replace the automatically generated thumbnail.

## Create Zip

In Windows, right click on the containing folder and select Send To > Compressed (zipped) folder.

In macOS, control-click the containing folder and select Compress 1 item.

Finally, drag the zip into the Enklu web editor to upload to your project.
