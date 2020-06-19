---
id: SceneComplexityRecommendations
title: Scene Complexity Recommendations
---

An extremely common question our users often ask is:

> ## "What are the recommended number of polygons for assets?"

This is a challenging question because there is not one answer that will apply to all situations. The answer ultimately will depend on a few factors:

### Complexity of the entire scene

If there is one asset in the entire scene, it can be more complex than if there are many objects.

### Complexity of the shader

There are two main pieces of a shader: a program that runs on every vertex of the scene and a program that runs on every pixel between the vertices (called a fragment program). Usually, the fragment program is much more computationally expensive whereas vertex programs are cheap. If your shader does reflections, distortions, rim shading, self-shadowing, etc—then it will probably be much more expensive.

### Overdraw

Assets with lots of transparency are very expensive. The more transparent layers on top of each other, the more expensive. This is usually more of an issue with particle systems.

### Complexity of animations

Generally speaking, animation is cheap on modern devices, but if the number of bones exceeds 100 or so, it starts to get expensive.

## Guidelines

A general guideline is that an average asset should probably be **under 10k triangles**. We would recommend that you aim for your absolute highest quality assets in an average scene to be **under 100k triangles**. There could be a handful of such assets (given average shader complexity for each). That being said, we have used assets that exceed 2 million triangles but that was really pushing the device framerate.

While these are good average targets, we would advise that iteration is really the key here. We generally start with more complex assets and then whittle them down only when necessary. Usually, shader complexity and overdraw will impact performance before poly-count.

Another thing to keep in mind other than performance is that when uploading an asset, the time it takes for your asset to finish processing will depend on its size and complexity. A relatively small asset may only take a few seconds to process while a large asset will take several minutes. There is a **500MB limit** on individual asset uploads, but most assets uploaded are far below this limit.