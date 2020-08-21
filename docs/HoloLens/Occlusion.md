---
id: Occlusion
title: Occlusion
---

The HoloLens is capable of using certain parts of the environment as occlusion to hide Holograms. 
Depending on your experience and its use case, there's pros and cons to the effects occlusion provides.

Each occlusion option can be configured on a per-experience basis, through the experience's Scene settings in Enklu Cloud.

### Space Occlusion

When an experience is using a <a href='/Guide_Spaces.html'>Space</a>, the mesh visible in the Cloud Editor can be used for occlusion.
This is useful in scenarios where multiple rooms are filled with content and a user isn't meant to see through walls, thus increasing immersion.

This feature starts <b>enabled</b> by default, and may be beneficial to disable in experience that are meant to display large content that is physically too big to fit in a room normally.

### Hand Occlusion

This feature is only relevant for HoloLens 2 devices. When enabled, your own hands will be used for occlusion and hide holograms that would be behind them.
This is useful when an experience has precise hand interactions that require the user understanding the depth of their hands in the AR space as accurately as possible.

This feature starts <b>disabled</b> by default, since it requires extra processing and might be an impact on performance for content heavy experiences.

> There is a bug with mixed reality capture where hand effects appear offset in recordings. You may want to disable hand occlusion before recording videos.
