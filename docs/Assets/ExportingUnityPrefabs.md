---
id: ExportingUnityPrefabs
title: Exporting Unity Prefabs
---

Unity prefabs are supported with some restrictions. All of Unity's built-in components are supported, but we cannot import custom C# scripts. These scripts can generally be rewritten in JS using our JS API.

To export a prefab from Unity, download and import our [Unity package](https://s3-us-west-2.amazonaws.com/bits.and.bobs/Enklu-Unity.0.2.1.unitypackage). Right click on the prefab you wish to export in the Project View and select Export. This will export a .zip in the exports directory. Simply drag this file into the asset upload dialog in the Enklu Editor to import.

### Known Issues

- Shaders using .cginc files may not be exported properly. As a temporary workaround you may copy the .cginc into the zip.
