---
id: EnkluVolume
title: Embedding an Experience
---

_\[Note: Access to this feature requires a [Studio Subscription](https://enklu.com/pricing). [Contact us](/contact) for details.\]_

To embed a scene in your Unity project, add an EnkluVolume prefab to your scene. Find it by searching for "EnkluVolume" in the project tab and ensuring the "In Packages" option is selected. Once the prefab is in your scene, select it and log in to your [Enklu Cloud account](https://cloud.enklu.com) in the inspector tab.

![Enklu Volume](/img/product/embedded/VolumeImport.gif)

Once you logged in, use the inspector tab to set an existing experience to embed or create a new one. You can embed an entire Enklu experience in your scene or just part of one by selecting or creating an element.

> Every Enklu Experience has an element named "root." This this is the first entry in the scene's hierarchy, and all other elements are its children.

After selecting an experience and an element, click play. The Enklu Volume will fetch the latest version of the experience and begin receiving real-time updates. The content existing alongside any exising content in the scene.

![Enklu Volume](/img/product/embedded/VolumeUpdates.gif)
