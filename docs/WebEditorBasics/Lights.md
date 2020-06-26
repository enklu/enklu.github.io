---
id: Lights
title: Lights
---

![Day and night cycle of a tree with a campfire.](/img/product/Lights_LightCycle.png)

There are 3 different types of light elements you can create in Enklu Cloud: **Directional** lights, **Point** lights, and **Spot** lights.

## Directional Lights

![Cube, cone, and sphere with directional light illuminating them.](/img/product/Lights_CreateDirectionalLight.gif)

Directional lights do not have a source position. The light rays created are parallel to each other and the intensity does not diminish with distance. This means Directional lights can be placed and moved anywhere within a scene without changing the way the lighting looks. Rotating a Directional light however will change the resulting lighting. Directional lights are often used to achieve sunlight effects.

The main properties you can adjust for Directional lights are **Color** and **Intensity**.

## Point Lights

![Cube, cone, and sphere with a point light illuminating them.](/img/product/Lights_CreatePointLight.gif)

Point lights are a point in 3D space where light rays are emitted in every direction. Unlike Directional lights, rays created from Point lights are not parallel to each other and their intensity diminishes with distance. Point lights are often used to achieve lamp or fire effects.

The main properties you can adjust for Point Lights are **Color**, **Intensity**, and **Range**.

## Spot Lights

![Cube, cone, and sphere with a spot light illuminating them.](/img/product/Lights_CreateSpotLight.gif)

Spot lights project a cone of light in one direction. The size of the cone is determined by its Spot Angle property. Similar to Point lights, light rays created from Spot lights are not parallel to each other and their intensity will diminish with distance. Spot lights are often used to achieve flashlight or streetlight effects.

The main properties you can adjust for Spot lights are **Color**, **Intensity**, **Range**, and **Spot Angle**.

## Ambient Lighting

![Cube, cone, and sphere with ambient lighting illuminating them.](/img/product/Lights_AmbientLighting.gif)

In addition to the 3 types of light elements, there is also a global light source that can be toggled on or off. This global light is known as Ambient Lighting. 

> Please note that at this time, ambient light is only rendered in the Web Editor and it is not rendered in the HoloLens.  The ambient light is meant to be used as a "worklight" and not to be used in the final experience.

Ambient Lighting illuminates objects evenly from every direction. Ambient Lighting is often used to adjust the overall brightness of a scene without needing to adjust several individual light elements. There is not a separate Intensity number for Ambient Lighting. The brightness of the Ambient Lighting can be controlled through the value of the light color. A brighter hue will result in a brighter light; a darker hue results in a darker light.