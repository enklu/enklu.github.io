# Enklu Documentation

[Enklu's documentation website](https://enklu.github.io/documentation) was created using [Docusaurus](https://docusaurus.io/) and is hosted on [GitHub Pages](https://pages.github.com/).  This website contains guides and API Reference for the Enklu Cloud [Web Editor](https://cloud.enklu.com/) and [HoloLens app](https://www.microsoft.com/en-us/p/enklu/9pkhwgcx8f3n). 

## Getting Started

To make changes to the documentation website, you will first need to clone the repo `https://github.com/enklu/documentation`

### Docusaurus Scripts

In the main `/documentation` directory, you can use the command  `npm start` to run the website locally.

In the main `/documentation` directory, you can use the command  `npm run build`  to build the `live` folder.  You will need to do this before committing any changes.  But you do not need to build to see changes locally when using the `npm start` command.

## Document Types

Documents fall into 2 main categories: **Guides** and the **API Reference**.  Guides are more like walkthroughs.  A guide takes a larger concept and breaks it down into concrete steps.  Then it leads the user through those steps with the goal of empowering the user with a solid understanding of the concept.  The API Reference is meant for specific pieces of our API.  They are less like walkthroughs and focus more on details and showing code examples.  

## Document Naming

All document files should end with `.md` to save them as markdown files.  The filename should be the same as the title of the document using Pascal Case.  There should be no spaces ` `, apostrophes `'`, quotes `"`, graves `` ` ``, forward slashes `/`, backslashes `\`, parentheses `()`, or brackets `[]{}` in the document file name.

> For example: \
A guide doc titled: `Hololens (1st gen) Basics & Setup` \
Should have the file name: `HoloLens1stGenBasics&Setup.md`

All markdown files should be saved within `documentation/docs` which is the highest level docs folder, not the one in live/latest (it’s the one with all the markdown files in it).  

All guide docs should be saved in a folder based on what category the doc falls in: 

- Web Editor Basics
- HoloLens
- Chapters Series
- Assets 
- Spaces
- Scripting

> For example a guide doc related to `Web Editor Basics` should be saved in `documentation/docs/WebEditorBasics`.

All API Reference docs should be saved in `documentation/docs/API`. 

## Document Writing

Each doc must start with an id and title between hyphens like this:

```
---
id: ScriptingLanguages
title: Scripting Languages
---
```

Docusaurus requires some files to reference the docs using their ids while others reference the docs using their names.  To make things easier, the id should be the same as the file name (minus the .md file extension).  The title is what will be displayed at the very top of the document.

### Markdown

Markdown is a method of add formatting to plain text documents.  Markdown uses a specific syntax to define what pieces of text are headings, bold, bulleted, code, etc.  Each of these pieces will grab their styling from a main css stylesheet so everything will look consistent across many authors. 

Check out this guide for using Markdown syntax: [https://guides.github.com/features/mastering-markdown/](https://guides.github.com/features/mastering-markdown/)

### Images

Please try to keep all image files **under 5MB** (smaller is better).  **No files should exceed 10MB**.  This will help make sure users do not have to wait too long for a page with many images to load.  In addition, there are some vague [GitHub repo limitations](https://help.github.com/en/github/managing-large-files/what-is-my-disk-quota) we’d like to avoid.  

When naming an image file, use the title of the document where the image is being used, followed by an underscore, followed by the image name and file extension.  There should be no spaces ` `, apostrophes `'`, quotes `"`, graves `` ` ``, forward slashes `/`, backslashes `\`, parentheses `()`, or brackets `[]{}` in the image file name.

> For example:\
A png image of the hierarchy being used in the Web Editor Interface guide should be named: `WebEditorInterface_Hierarchy.png`

All images should be located within `documentation/static/img`.  There is a `logo` folder and a `product` folder within the `img` folder.  The `logo` folder should contain any and all Enklu logo images used.  Not images that have the logo in it, specifically standalone logo images.  The `product` folder should contain any images or diagrams related to the web editor or in lens captures.  Other images such as generic icons or pictures that do not relate specifically to our product can be saved inside `img`, but outside the `logo` and `product` folders.

> For example:\
The `WebEditorInterface_Hierarchy.png` should be saved in `documentation/static/img/product`.

To include images within a markdown document, you’ll need to use this markdown syntax:

```
![Alt text for image](link where image should be pulled from)
```

> **"Do I have to include an image alt text?"**  Yes, unless it is unnecessary. Alternative text for images is an important part of improving website accessibility.  Please follow these [guidelines for image alt text](https://webaim.org/techniques/alttext/).

The final path to the image you should use in the markdown file will end up being `documentation/live/latest/img` instead of using the static folder path where the image is originally saved.

> For example:\
The `WebEditorInterface_Hierarchy.png` saved in `documentation/static/img/product` should be referenced in a markdown file as
`![List of items nested under items](/img/
product/WebEditorInterface_Hierarchy.png)`

## Doc Sidebars

The left sidebar contains a list of document links for quick access.  The right sidebar is a table of contents for the currently selected document.  The right sidebar is automatically generated from the headings of the markdown file.

### Adding Documents to a Sidebar

In the main `/documentation` folder there is a `sidebars.json` file which controls the documents in the left sidebar.  Guides and API Reference docs have separate sidebars: `"Guides"` and `"API"`. Within the `"Guides"` sidebar, there are sections for each category: `"Web Editor Basics"`, `"HoloLens"`, etc.

To add a document to a sidebar, you need to add the `id` used in the document's header prepended by any folder within the `documentation/docs` where the document is located.

> For example: \
A doc with the id `KeyboardShortcuts` is located in `documentation/docs/WebEditorBasics`.  To add this doc to the Web Editor Basics sidebar you would add `"WebEditorBasics/KeyboardShortcuts"`.  The resulting `sidebars.json` file would look something like this:
>```
>{
>  "Guides": {
>    "Web Editor Basics": [ 
>      "Folder/DocumentId",
>      "WebEditorBasics/KeyboardShortcuts"
>    ],
>    "HoloLens": [
>      "Folder/DocumentId",
>      "Folder/DocumentId"
>    ]
>  },
>  "API": {
>    "API Reference": [
>      "Folder/DocumentId", 
>      "Folder/DocumentId"
>    ]
>  },
>}
>```
