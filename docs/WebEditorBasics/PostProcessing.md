---
id: PostProcessing
title: Post-Processing
---

Enklu Cloud provides a highly optimized Post-Processing pipeline. 
These effects provide an extra level of polish to your experience's visuals, with little to no performance cost.

Post-Processing effects can be found and configured in an experience's **Scene settings**.
Each effect can be used independently, but are global to the entire scene.

Interested in using an effect not listed? <a href='/contact'>Let us know</a> your use case!

## Bloom

![Bloom](/img/product/editor/Bloom.png)

Bloom is an effect widely used in media. 
It adds color to already bright areas of the screen while mixing in a blurred glow effect. 

Used sparingly, it can be effective in highlighting important areas of your experience or creating more realistic reflections. 
It can also be used excessively to create illusions such as dreamscapes or fantasy worlds.

![Bloom](/img/product/editor/Bloom.gif)

### Configuration

![Bloom Controls](/img/product/editor/BloomControls.png)

| Parameter | Description |
|---|---|
| Threshold  | The minimum brightness a section of the screen needs before having bloom applied. |
| Intensity  | The weight of the effect when active. Increasing this too high can wash out details. |
| Blur Size  | The size of the glow range. Increasing this number does not affect performance, but a number too high may limit the effect on smaller or more distant objects. |
| Passes     | The number of times this effect runs per-frame. This value controls the overall effect quality and sharpness. This setting may affect performance on visually demanding scenes. |

