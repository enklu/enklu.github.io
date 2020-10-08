---
id: EmbeddedSetup
title: Installing Enklu Embedded
---

![Enklu Embedded](/img/undraw_embedded.svg)

Enklu Embedded enables Unity Developers to embed Enklu Cloud content within Unity scenes and sync 3D Assets to Enklu Cloud directly from Unity. With Enklu Embedded, Unity Developers enjoy the freedom of Unity and the rapid iteration and real-time synchronization of Enklu Cloud. Enklu Embedded works for all Unity projects, but is specifically optimized to improve workflows for immersive augmented reality developers.

## Installing

Enklu Embedded is distributed as a [Unity Package](https://docs.unity3d.com/Manual/PackagesList.html) and can be installed with Unity's Package Manager. To register the Enklu package repository with the Package Manager, add an entry to the `scopedRegistries` section of the package manifest in your project. 

```json
{
  "scopedRegistries": [
    {
      "name": "Enklu",
      "url": "http://nexus.enklu.com/repository/upm/",
      "scopes": [
        "com.enklu"
      ]
    }
  ]
}
```

If your project does not have a package manifest, create one at `Packages/manifest.json` with the above contents. For more information about scoped registries, see [Unity's documentation](https://docs.unity3d.com/Manual/upm-scoped.html).

> If your project uses the Unity package available on our guide [Exporting Unity Prefabs](/docs/Assets/ExportingUnityPrefabs), remove it before installing the Enklu Embedded packages.

For Unity version 2018.1 and later, the Package Manger is included with the Editor and is accessible via the `Window > Package Manager` menu command. After editing the package manifest in the previous step, Enklu packages should be availble for installation. Find the Enklu Embedded package and click Install.

![Enklu Embedded](/img/product/embedded/PackageManager.png)

> The package "Enklu Core" will also be available. Enklu Embedded includes it as a dependency, so there is no need to install it manually.
