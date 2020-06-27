---
id: PlacingAnAssetInTheScene
title: Placing an Asset in the Scene
---

Assets are placed in the scene by creating a new *asset element* in the hierarchy and assigning an asset to that element.

## Create an Asset Element

To create an asset element, you can use the *element menu* in the hierarchy.  The *element menu* can be accessed by clicking on the **3 dots** at the end of the experience root element.  Open the *element menu*, select **Create...**, then select **Asset**.

![Click 3 dot menu, click create, click asset.](/img/product/PlacingAnAssetInTheScene_CreateAssetElement.gif)

When you create a new asset element, you will see its position gizmo appear in the canvas at the origin.  This newly created element is known as an *empty* element because it has no asset assigned to it.

## Assign an Asset

To assign an asset to your new element, you first need to choose which asset to assign.  Navigate to the library panel and make sure the drop down is set to **Assets**.  In the asset library you can find many [public assets](/docs/Assets/PublicAssets) which are available for anyone to use, or you may upload your own assets.

Make sure the empty asset element is selected.  Once you have chosen an asset, **click and drag** the asset to the *Asset* section of the inspector.

![Click and drag tree thumbnail.  Tree assets appears in canvas.](/img/product/PlacingAnAssetInTheScene_AssignAsset.gif)

In the canvas a white bounding box will appear as the asset loads in.  It may take several seconds for the asset to load into the canvas.  When it is finished loading, a green bounding box will appear around the loaded asset.

### Replace an Asset

At anytime, you can replace an already assigned asset by dragging a new asset into the *Asset* section of the inspector.

![Drag plant asset onto tree asset.  Plant asset appears in canvas.](/img/product/PlacingAnAssetInTheScene_SwapAsset.gif)

The new asset may take several seconds to load before appearing in the canvas.

### Assign Assets in the Hierarchy

Alternatively, assets can be assigned directly in the hierarchy instead of using the inspector.  Simply drag the asset to the element you wish to assign.

![Drag planet asset onto element in hierarchy.  Planet asset appears in canvas.](/img/product/PlacingAnAssetInTheScene_SwapAssetHierarchy.gif)

## Remove Asset Assignment

To remove an asset from an element, simply click the **X** on the asset thumbnail in the inspector.

![Click X on planet thumbnail.  Planet disappears from canvas.](/img/product/PlacingAnAssetInTheScene_RemoveAsset.gif)

Removing an asset assignment this way only removes the asset, but the asset element still remains in the canvas and hierarchy.

## Delete an Element

To delete an element, you can use the element menu in the hierarchy.  Click on the **3 dots**, select **Delete**, then select **Delete** again from the confirmation message that appears.

![Click 3 dot menu, select delete twice, element disappears from hierarchy and canvas.](/img/product/PlacingAnAssetInTheScene_DeleteElement.gif)

You can delete an element with or without an asset assigned to it.  Deleting an element removes it from both the canvas and the hierarchy.