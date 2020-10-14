---
id: EmbeddedSetup
title: Installing Enklu Embedded
---

![Enklu Embedded](/img/undraw_embedded.svg)

Enklu Embedded enables Unity Developers to embed Enklu Cloud content within Unity scenes and sync 3D Assets to Enklu Cloud directly from Unity. With Enklu Embedded, Unity Developers enjoy the freedom of Unity and the rapid iteration and real-time synchronization of Enklu Cloud. Enklu Embedded works for all Unity projects, but is specifically optimized to improve workflows for immersive augmented reality developers.

Enklu Embedded is distributed as a [Unity Package](https://docs.unity3d.com/Manual/PackagesList.html) and can be added to your Unity project with our [installer](https://cdn.enklu.com/web-assets/packages/EnkluEmbeddedInstaller.unitypackage) or with Unity's Package Manager. 

> If your project uses the Unity package available on our guide [Exporting Unity Prefabs](/docs/Assets/ExportingUnityPrefabs), remove it before installing the Enklu Embedded packages.

## Using the Installer

To make getting started as seamless as possible, we have created an installer that automatically imports the Enklu Embedded package and all its dependencies:

[`EnkluEmbeddedInstaller.unitypackage`](https://cdn.enklu.com/web-assets/packages/EnkluEmbeddedInstaller.unitypackage)

To run the installer, simply drag it into your Unity project or import it from the `Asset > Import Package > Custom Package...` menu and confirm the two files to import.

![Importing the Installer](/img/product/embedded/Installer.png)

Once the files have been added to the project, the installer will import the Enklu Embedded package. Please note that the process can take several minutes. It is also possible to run the `Enklu > Install Enklu Embedded...` menu command. 

> After installation, it is safe to remove the installer. The files are located in the `Assets/Enklu/Editor` directory. If you keep the installer in your project, it will ensure Enklu Embedded has been imported every time you launch Unity.

## Using the Package Manager

The Enklu Embedded package can be downloaded from Enklu's package repository using Unity's Package Manager. But first, it's necessary to add an entry to the `scopedRegistries` section of the package manifest in your project. This makes it possible for the Package Manager to find third-party packages like Enklu Embedded. 

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


For Unity version 2018.1 and later, the Package Manager is included with the Editor and is accessible via the `Window > Package Manager` menu command. After editing the package manifest in the previous step, Enklu packages should be availble for installation. Find the Enklu Embedded package and click Install.

![Enklu Embedded](/img/product/embedded/PackageManager.png)

> The package "Enklu Core" will also be available. Enklu Embedded includes it as a dependency, so there is no need to install it manually.
