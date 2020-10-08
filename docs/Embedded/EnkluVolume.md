---
id: EnkluVolume
title: Embedding an Experience
---

To embed an Enklu Cloud experience in your Unity project, add an EnkluVolume prefab to your scene. Find it by searching for "EnkluVolume" in the project tab and ensuring the "In Packages" option is selected. Once the prefab is in your scene, select it and log in to your Enklu Cloud account in the inspector tab.

![Enklu Volume](/img/product/embedded/VolumeImport.gif)

After you've logged in, use the inspector tab to set an existing experience to embed or create a new one. You can embed an entire Enklu experience in your scene or just part of one by selecting or creating an element.

> Every Enklu Experience has an element named "root." This this is the first entry in the scene's hierarchy, and all other elements are its children.

After selecting an experience and an element, enter Play Mode by clicking the Play button on the Toolbar. The EnkluVolume will fetch the latest version of the experience and begin receiving real-time updates. The content will load alongside anything already existing in the scene.

![Enklu Volume](/img/product/embedded/VolumeUpdates.gif)
