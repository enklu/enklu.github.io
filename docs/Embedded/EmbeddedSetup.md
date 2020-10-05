---
id: EmbeddedSetup
title: Installing Enklu Embedded
---

_\[Note: Access to this feature requires a [Studio Subscription](https://enklu.com/pricing). [Contact us](/contact) for details.\]_

![Enklu Embedded](/img/undraw_embedded.svg)

Enklu Embedded enables Unity Developers to embed Enklu Cloud content within Unity scenes as well as sync 3D Assets to Enklu Cloud directly from Unity. With Enklu Embedded, Unity Developers enjoy the freedom of Unity and the rapid iteration and real-time synchronization of Enklu Cloud. Enklu Embedded works for all Unity projects, but is specifically optimized to improve workflows for immersive augmented reality developers.

## Installing

Enklu Embedded is comprised of two [Unity Packages](https://docs.unity3d.com/Manual/PackagesList.html) and is distributed as a pair of tarball archives. Installing the packages is a straightforward process, but it can vary depending on your version of Unity.

> If your project uses the unity package available on our guide [Exporting Unity Prefabs](/docs/Assets/ExportingUnityPrefabs), remove it before insalling the Enklu Embedded packages.

For Unity version greater than 2018.1, the Package Manger is included with the Editor and is accessible via the Window > Package Manager menu command. From there, find the + button and select either "Add package from tarball..." (Unity version 2019.3 and greater) or "Add package from disk..." In th latter case, you can use a tool such as 7-zip to decompress the tarball archive. Be sure to install both the `com.enklu.core` and `com.enklu.embedded` packages.

> We recommend installing the `com.enklu.core` package first.
