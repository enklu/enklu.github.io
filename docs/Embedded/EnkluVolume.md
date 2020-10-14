---
id: EnkluVolume
title: Embedding an Experience in Your Unity Scene
---

To embed an Enklu Cloud experience in your Unity project, add an EnkluVolume prefab to your scene. Find it by searching for "EnkluVolume" in the project tab and ensuring the "In Packages" option is selected. Once the prefab is in your scene, select it and log in to your Enklu Cloud account in the inspector tab.

![Enklu Volume](/img/product/embedded/VolumeImport.gif)

After you've logged in, use the inspector tab to set up your Enklu Volume. You can embed an entire experience or just part of one. Select an element from the dropdown menus to choose which part.

> Every Enklu Experience has an element named "root." If you select the "root" element, the entire experience will be included in your Volume.

After selecting an experience and an element from the inspector, enter Play Mode by clicking the Play button on the Toolbar. The EnkluVolume will fetch the latest version of the Enkl experience and begin receiving real-time updates. The content will load alongside anything already existing in the Unity scene.

![Enklu Volume](/img/product/embedded/VolumeUpdates.gif)
