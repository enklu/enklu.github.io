---
id: Vines
title: VineML
---

`VineML` is a powerful markup language designed to be very familiar to anyone that has used HTML. It is useful for creating any type of element hierarchy in a scene and assigning values to those elements. A combination of `VineML` and `Behavior` scripts can be used to create rich applications in Enklu.

## Language QuickStart

```jsx
/* A vine header is optional.*/
<?Vine>

/* Documents can have only a single root element. */
<Float>
	/* Tags can be self closing like this button. */
	<Button label='Hello World!' />
</Float>
```

> Note that `VineML` supports C-style block comments.

`VineML` files are called _documents_. These documents are made up of a hierarchy of nested `tags`, starting from a single root element. Each tag can have zero or more attributes. To create your first `VineML` document, it's easiest to jump right in with an example.

## Tags

This is not valid `VineML`.

```jsx
<Container>
```

These are both valid options.

```jsx
<Container></Container>

<Container />
```

This is not valid `VineML`.

```jsx
<Caption>Hello World</Caption>
```

Instead we use attributes.

```jsx
<Caption label='Hello World' />
```

Tags follow XHTML conventions, i.e. every tag must be closed. In HTML, we can write `<br>`, but in `VineML` this is invalid. Every tag must have a closing tag or it must be a self closing tag.

In addition, tags may not have raw text inside of them. All values are passed to tags through attributes.

## Attributes

```jsx
<Caption
	label='Hello'
	visible=false 
	font.size=100
	width=1000.5
	position=(0, 0, 10)
/>
```

While tags define the object structure, attributes define the object properties. `VineML` has support for string, boolean, number, and vector literals. Any property of an element may be passed through element attributes.

# Built In Tags

VineML supports several built in elements that you can use to build complex interactions for your experience. All tag elements share a core set of attributes.

### Base Schema Attributes

| name | type | default| description |
|------|------|--------|-------------|
|id|`string`|A generated `guid`| An ID that is unique to the experience. |
|name|`string`|The tag name (i.e, `"Button"`)| A descriptive name. |
|visible|`bool`|`true`| Whether the element is visible in the scene. |
|postition|`vec3`|`vec3(0,0,0)`| The relative position of the element. |
|rotation|`vec3`|`vec3(0,0,0)`| The element's rotation. |
|scale|`vec3`|`vec3(1,1,1)`| The element's scale. |
|color|`col4`|`col4(1,1,1,1)`| The base color of the element. |
|virtualColor|`string`|`"None"`| A [Virtual Color](#virtual-colors) tint applied to the widget. |
|alpha|`float`|`1.0`| The transparency of the element. |
|colorMode|`int`|`0 (WidgetColorMode.InheritColor)`| How the element's color is affected by the color of its parent. |
|tweenIn|`int`|`1 (TweenType.Responsive)`| The type of tween applied when fading in. |
|tweenOut|`int`|`1 (TweenType.Responsive)`| The type of tween applied when fading out. |
|layerMode|`int`|`0 (LayerMode.Default)`| Determines whether an element is considered to be in the front, middle, or back. |
|autoDestroy|`bool`|`false`| Wheter an element should be detstroyed when it is no longer visible. |
|face|`string`|`"Describes whether the element should always face a certain direction"`|  |

<br>

## `<Container>`

An invisible element used for organization, often as the root tag of a `VineML` script.

## `<Button>`

Basic button element.

### Additional Schema Attributes

A `<Button>` element contains a `<Text>`, so the attributes of a `<Text> element may also be applied.`

| name | type | default | description |
|------|------|---------|-------------|
| src                     | `string` | `null`          | URL for icon.                                                |
| icon                    | `string` | `null`        | Name of icon, as given in icon list.                         |
| label                   | `string` | `null`         | The button's label.                                          |
| font                    | `string` | `OpenSans-Regular` | A supported [Font](#fonts) |
| label.padding           | `int`    | `60`           | Determines distance between center of circle and label.      |
| fontSize                | `int`    | `80`           | Determines the font size of the button's label.              |
| icon.scale              | `float`  | `1`            | Icon scale multiplier.                                       |
| voiceActivator          | `string` | `null`           | If set to a keyword, adds voice recognition for activating a button.|
| layout                  | `string` | `"horizontal"`  | Describes how the button is laid out. Can be set to *horizontal* or *vertical*. If set to anything other than *vertical*, the layout will be *horizontal*. |
| aim.multiplier          | `float`  | `1`            | Scalar for aim, which is used to determine how a button is activated. |
| stability.multiplier    | `float`  | `1`            | Scalar for stability, which is used to determine how a button is activated. |
| fill.duration.multiplier| `float`  | `1`            | Scalar for fill duration, used to extend or shorten how long it takes to activate a button. |
| ready.frameScale        | `float`  | `1`            | Scale of the button's frame while in the ready state.        |
| activating.frameScale   | `float`  | `1`            | Scale of the button's frame while in the activating state.   |
| activated.frameScale    | `float`  | `1`            | Scale of the button's frame while in the activated state.    |
| ready.scale             | `vec3`   | `(1,1,1)`       | Scale of the button in the ready state.  |
| activating.scale        | `vec3`   | `(1.1,1.1,1.1)` | Scale of the button in activating state. |
| activated.scale         | `vec3`   | `(1,1,1)`       | Scale of the button in activated state.  |
| ready.color             | `string` | `"Ready"`       | The [Virtual Color](#virtual-colors) of the button's ready state.                |
| ready.captionColor      | `string` | `"Primary"`     | The [Virtual Color](#virtual-colors) of the button label in ready state.         |
| ready.tween             | `string` | `"Responsive"`  | The [Tween Type](Tween#easingtype) of the button in ready state.                  |
| activating.color        | `string` | `"Interacting"` | The [Virtual Color](#virtual-colors) of the button's activating state.           |
| activating.captionColor | `string` | `"Interacting"` | The [Virtual Color](#virtual-colors) of the button label in activating state.    |
| activating.tween        | `string` | `"Responsive"`  | The [Tween Type](Tween#easingtype) of the button in activating state.             |
| activated.color         | `string` | `"Interacting"` | The [Virtual Color](#virtual-colors) of the button's activated state.            |
| activated.captionColor  | `string` | `"Interacting"` | The [Virtual Color](#virtual-colors) of the button label in activated state.     |
| activated.tween         | `string` | `"Responsive"`  | The [Tween Type](Tween#easingtype) of the button in activated state.              |

## `<Image>`

Displays an image.

### Additional Schema Attributes

| name | type | default | description |
|------|------|---------|-------------|
| src | `string` | `null` | A url for locating an image. In addition to `http`/`https`, the protocols `res://` and `icon://` are supported. The former loads an image from the Resources directory of a custom build of the Enklu Player. The later loads one of the supported [Icons](#icon-names). |
| width | `float` | `0` | The image width. |
| height | `float` | `0` | The image height. |

## `<Text>`

An element for displaying text.

### Additional Schema Attributes

| name | type | default | description |
|------|------|---------|-------------|
| label | `string` | `null` | The text to display. |
| font | `string` | `OpenSans-Regular` | A supported [Font](#fonts) |
| fontSize | `int` | `80` | The size of the text. |
| fontColor | `string` | `White` | The [Virtual Color](#virtual-colors) color of the text. |
| alignment |`string`|`"MidRight"`| The alignment of the text. See [Text Alignment Values](#text-alignment-values) below for all acceptable values. |
| display |`string`|`"Overlay"`| Controls how the text is displayed in the environment. See [Text Display Value](#text-display-values) below for all acceptable values. |
| width |`float`|`1500`| The maximum width of a line of text. |
| height |`float`|`0`| The height of the text display. |
| lineSpacing |`float`|`1`| How much space is between lines of text. |
| overflow |`string`|`Overflow`| Horizontal wrapping behavior. See [Horizontal Wrap Values](#horizontal-wrap-value) below. |
| verticalOverflow |`string`|`Overflow`| Vertical wrapping behavior. See [Vertical Wrap Values](#vertical-wrap-values) below.|
| text.shadow.color |`col4`|`null`| Text shadow color |
| text.shadow.offset |`vec3`|`null`| Text shadow offset |
| text.outline.color |`col4`|`null`| Text outline color |
| text.outline.offset |`vec3`|`null`| Text outline offset |

## `<Caption>`

An alias for `<Text>`

## `<Menu>`

A paginated display for menu options. The menu options are comprised of the tag's children.

### Additional Schema Attributes

| name | type | default | description |
|------|------|---------|-------------|
| title | `string` | `null` | The menu's title. |
| description | `string` | `null` | A description of the menu. |
| fontSize | `int` | `80` | The font size of indivual menu items |
| title.fontSize | `int` | `80` | The font size of the title. Falls back to `fontSize` if not set. |
| description.fontSize | `int` | `80` | The font size of the description. Falls back to `fontSize` if not set. |
| layout          |`string`  |`"Radial"` | The visual arrangement of menu elements. Currently, only `"Radial"` is supported. |
| layout.degrees  | `float`  | `25`      | Degrees offset between menu options.                         |
| layout.radius   | `float`  | `0.8`     | Distance of menu options from the central hub.               |
| header.width    | `int`    | `700`     | The width of the title and description header.               |
| header.padding  | `int`    | `0`       | The distance between the header and the menu options.        |
| showBackButton  | `bool`   | `false`   | If true, shows a back button to the left of the menu header. |
| divider.offset  | `float`  | `0`       | Offsets the divider between header and menu options.         |
| divider.visible | `bool`   | `false`   | If true, shows a divider between header and menu options.    |
| page.size       | `int`    | `4`       | How many options are visible on a single page.               |

## `<SubMenu>`

Secondary menu display with icon.

### Additional Schema Attributes
Inherits all [`<Menu>`](#menu) properties.

| name  | type     | default | description                                                  |
| ----- | -------- | ------- | ------------------------------------------------------------ |
| label | `string` | `null`  | The label displayed on the button while the menu is collapsed. |
| icon  | `string` | `null`  | The name of the icon as specified in [Icons](#icon-names) documentation. |

## `<Cursor>`

Renders a cursor for the user.

## `<TextCrawl>` [Preview]

Presents text and then scrolls out of sight.

## `<Float>`

A layout element that stays within a user's field of view.

### Additional Schema Attributes

| name           | type   | default   | description                                                  |
| -------------- | ------ | --------- | ------------------------------------------------------------ |
| focus          | `vec3` | `(0,0,2)` | The location of the focus sphere relative to the Float.      |
| focus.visible  | `bool` | `true`    | Determines whether or not the focus sphere is visible.       |
| fov.reorient   | `float`| `1.5`     | Determines how far outside the user's frame of view the Float can get before it reorients itself. |
| fov.distance   | `float`| `1.0`     | How far from the center of the Float a user's gaze may get before it reorients itself. |

## `<Screen>`

Layout element that locks children to be in front of the user's gaze.

### Additional Schema Attributes

| name           | type   | default   | description                                                  |
| -------------- | ------ | --------- | ------------------------------------------------------------ |
| distance       | `float`  | `1`         | Determines how far away from the camera the element will be locked. |

## `<Toggle>`

A button element with on/off states.

### Additional Schema Attributes

Inherits all `Button` properties and overrides `icon` for internal use.

| name   | type   | default  | description                     |
| ------ | ------ | -------- | ------------------------------- |
| value  | `bool` | `false`  | True if the toggle is checked. |

## `<Slider>` [Preview]

Basic slider control.

### Additional Schema Attributes

| name           | type   | default   | description                                               |
| -------------- | ------ | --------- | ----------------------------------------------------------|
| length        | `float`  | `0.1`    | How long the slider should be.                               |
| axis          | `string` | `"x"`    | Determines the axis of the slider: `"x"`, `"y"`, or `"z"`.               |
| tooltip       | `bool`   | `false`   | Determines whether or not a tooltip should be displayed for this slider. |

## `<Select>`

Simple selection widget where child elements are displayed as options.

### Additional Schema Attributes

| name | type | default | description |
|------|------|---------|-------------|
| fontSize | `int` | `80` | The size of the text. |
| fontColor | `string` | `null` | The color of the text. |

## `<Grid>`

Displays buttons in a grid format.

### Additional Schema Attributes

| name | type | default | description |
|------|------|---------|-------------|
| padding.vertical   | `float` | `0.325`  | Determines vertical space between elements in the grid.     |
| padding.horizontal | `float` | `0.2`    | Determines horizontal spacing between elements in the grid. |

## `<Option>`

Provides an abstraction for displaying a label that represents a different value.

### Additional Schema Attributes

| name          | type      | default | description |
| ------------- | --------- | ------- | -------------------------------------- |
| label         | `string`  |`null`   | The label used in parent elements.     |
| value         | `string`  |`null`   | The value associated with this option. |

## `<OptionGroup>`

An organization abstraction for displaying multiple `<Option>` elements.

### Additional Schema Attributes

| name          | type      | default | description |
| ------------- | --------- | ------- | -------------------------------------- |
| label         | `string`  |`null`   | The label used in parent elements.     |
| value         | `string`  |`null`   | The value associated with this option. |

## `<Content>`

An element that can hold an asset and scripts. Because `<Content>` elements are so common, the recommended way to create and interact with them is through the hierarchy.

### Additional Schema Attributes

| name     | type     | default | description |
| -------- | -------- | ------- | --------------------------------------- |
| assetSrc | `string` | `null`  | Id of an asset.                         |
| scripts  | `string` | `"[]"`  | A serialized string containing a comma delimited list of script ids. |

## `<Light>`

Represents a light source.

### Additional Schema Attributes

| name     | type     | default | description |
| -------- | -------- | ------- | --------------------------------------- |
| lightType     | `string` | `"Directional"`| The type of light: `"Point"`, `"Spot"`, or `"Directional"`.              |
| intensity     | `float`  | `1`            | The intensity of the light.                                  |
| shadows       | `string` | `"None"`       | The type of shadows this light should cast: `"None"`, `"Soft"`, or `"Hard"`. |
| color         | `col4`   | `(1, 1, 1, 1)` | The color of the light.                                      |
| point.range   | `float`  | `1`            | The range of a point light.                                  |
| spot.range    | `float`  | `1`            | The range of a spot light.                                   |
| spot.angle    | `float`  | `30`           | The angle of spot light.                                     |

## `<ScaleTransition>`

Applies a scale transition when elements are added.

## `<Transition>`

Applies a transition when based on another attribute when elements are added.

### Additional Schema Attributes

| name     | type     | default | description |
| -------- | -------- | ------- | --------------------------------------- |
| prop          | `string` | `"alpha"`      | The name of the prop to tween from start to end.             |
| start         | `float`  | `0`            | The value at which to start the tween.                       |
| end           | `float`  | `1`            | The value at which to end the tween.                         |
| tween         | `string` | `"Pronounced"` | The [Tween Type](Tween#easingtype) to apply                  | 

## `<WorldAnchor>`

Places a spatial anchor within a scanned space.

## `<QrAnchor>` [Preview]

An element that receives and event when a QR code is recognized.

### Additional Schema Attributes

| name     | type     | default | description |
| -------- | -------- | ------- | --------------------------------------- |
| qr_value  | `string`| `null`  | The string encoded QR that should be recognized             |
| exclusive | `bool`  | `false` | Whether all other QR anchors should be hidden with it is recognized |

## `<Trail>`

Renders a trail.

### Additional Schema Attributes

| name                | type     | default     | description |
| ------------------- | -------- | ----------- | --------------------------------------- |
| tail.width          | `float`  | `0.1`       | The width of the mesh trail. |
| tail.color          | `col4`   | `(1,1,1,1)` | The color of the mesh trail. |
| tail.distThreshold  | `float`  | `0.1`       | Maximum distance before a new segment is created. |
| tail.destroy        | `bool`   | `false`     | Whether the trail should automatically decay. |
| tail.decayTime      | `float`  | `2.0`       | How long, in seconds, the decay transition lasts. |
| tail.segments       | `int`    | `4`         | The number of vertices per segment. |

## `<Video>`

Embeds a video using a url. When a video is loaded, the element automatically adjusts its size according the video's aspect ratio.

> Currently, videos will not play in the Enklu Cloud editor, but they will display on supported devices.

### Additional Schema Attributes

| name                | type     | default     | description |
| ------------------- | -------- | ----------- | --------------------------------------- |
| src                 | `string` | `null`      | A url that points to a video file to play. | 
| play                | `bool`   | `true`      | Whether the video should start playing immediately. If `false`, it will start playing when set to `true` | 
| loop                | `bool`   | `false`     | Whether video playback should repeat. | 
| time                | `float`  | `0.0`       | The time, in seconds, at which to start playback. If the video is not playing, this will display the frame at that time. If the video is playing, it will immediately seek to the given time. | 

# Virtual Colors

Enklu Cloud supports a built in color palette. These color names can be used for any schema attribute that expects a virtual color.

- `"Ready"`
- `"Interacting"`
- `"Disabled"`
- `"Primary"`
- `"Secondary"`
- `"Tertiary"`
- `"Positive"`
- `"Negative"`
- `"Highlight"`
- `"Highlight1"`
- `"Highlight2"`
- `"Highlight3"`
- `"Highlight4"`
- `"Highlight5"`
- `"Highlight6"`
- `"Highlight7"`
- `"LightText"`
- `"DarkText"`
- `"LightAccent"`
- `"SecondaryLightAccent"`

> Instead of a virtual color string you can provide a 3-, 6-, or 8-digit hex color. Rgb and rgba color formats are also accepted.
> ```js
> // hex strings
> "#fff"
> "#ffffff"
> "#ffffffff"
>
> // css style colors
> "rgb(1.0, 1.0, 1.0)"
> "rgba(1.0, 1.0, 1.0, 1.0)"
> ```

# Icon Names

A collection of standard icons is available for use in your experience. These icons can be assigned to the `icon`
attribute. In addition, icons can be passed as url using the format `"icon://<icon-name>"`.

- `"102-01"`
- `"113-01"`
- `"115-01"`
- `"125-01"`
- `"23-01"`
- `"24-01"`
- `"61-01"`
- `"84-01"`
- `"anchor"`
- `"arrow-big-down"`
- `"arrow-big-left"`
- `"arrow-big-right"`
- `"arrow-big-up"`
- `"arrow-double-vertical"`
- `"arrow-double-z"`
- `"arrow-double"`
- `"arrow-down"`
- `"arrow-fat-down"`
- `"arrow-fat-left"`
- `"arrow-fat-right"`
- `"arrow-fat-up"`
- `"arrow-left"`
- `"arrow-right"`
- `"arrow-rotate"`
- `"arrow-up"`
- `"arrow-z"`
- `"asterisk"`
- `"bell"`
- `"briefcase"`
- `"bug"`
- `"bullseye"`
- `"buy"`
- `"calendar-add"`
- `"calendar-remove"`
- `"calendar"`
- `"call"`
- `"camera"`
- `"cancel"`
- `"chat"`
- `"check"`
- `"clock-2"`
- `"clock-alarm-2"`
- `"clock-alarm"`
- `"clock"`
- `"cloud"`
- `"contrast"`
- `"disk"`
- `"display"`
- `"download-2"`
- `"download"`
- `"duplicate"`
- `"edit"`
- `"ellipses"`
- `"exclamation"`
- `"eye-2"`
- `"eye"`
- `"facebook"`
- `"fast-forward"`
- `"female"`
- `"film-strip"`
- `"folder"`
- `"forward"`
- `"frame"`
- `"fullscreen"`
- `"gear"`
- `"googleplus"`
- `"graph-bar"`
- `"graph-line"`
- `"grid"`
- `"headphones"`
- `"heart-2"`
- `"heart"`
- `"hierarchy"`
- `"home"`
- `"info"`
- `"instagram"`
- `"journal"`
- `"key"`
- `"light-2"`
- `"light"`
- `"linkedin"`
- `"load"`
- `"location"`
- `"locked-2"`
- `"locked"`
- `"magnifying-glass"`
- `"mail"`
- `"male"`
- `"map"`
- `"menu"`
- `"mic"`
- `"move"`
- `"music"`
- `"mute"`
- `"new"`
- `"pause"`
- `"pencil"`
- `"phone-2"`
- `"phone"`
- `"pie-chart"`
- `"play-media"`
- `"play"`
- `"plus"`
- `"power-on"`
- `"present"`
- `"radio"`
- `"record"`
- `"refresh"`
- `"rewind"`
- `"save"`
- `"scale"`
- `"scissors"`
- `"search"`
- `"seek-end"`
- `"seek-start"`
- `"sell"`
- `"settings"`
- `"shopping-cart-2"`
- `"shopping-cart-empty"`
- `"shopping-cart-full"`
- `"shopping-cart"`
- `"shopping"`
- `"sleep"`
- `"sliders"`
- `"speech-bubble"`
- `"star-empty"`
- `"star-full"`
- `"stop"`
- `"stopwatch"`
- `"tag-2"`
- `"tag"`
- `"text"`
- `"toggled"`
- `"tools"`
- `"trash"`
- `"tree"`
- `"trophy"`
- `"twitter"`
- `"unlocked-2"`
- `"unlocked"`
- `"volume"`
- `"warning"`
- `"window"`
- `"windows"`
- `"world"`
- `"x"`
- `"youtube"`
- `"zoom-in"`
- `"zoom-out"`

# Text Alignment Values

- `"MidRight"`
- `"MidCenter"`
- `"MidLeft"`
- `"TopRight"`
- `"TopCenter"`
- `"TopLeft"`
- `"BotRight"`
- `"BotCenter"`
- `"BotLeft"`

# Text Display Values

- `"Overlay"`
- `"Hidden"`
- `"Occluded"`

# Horizontal Wrap Values

- `"Overflow"`
- `"Wrap"`

# Vertical Wrap Values

- `"Overflow"`
- `"Truncate"`
