# Enklu Documentation

[Enklu's documentation website](https://enklu.github.io) was created using [Docusaurus](https://docusaurus.io/) and is hosted on [GitHub Pages](https://pages.github.com/).  This website contains guides and API Reference for the Enklu Cloud [Web Editor](https://cloud.enklu.com/) and [HoloLens app](https://www.microsoft.com/en-us/p/enklu/9pkhwgcx8f3n). 

## Branches

The 2 main branches to note in this repository are `release` and `master`.  Both of these branches should be treated as the "live" or "production" branches.  If you do not want an update to be on the live website, do not commit it to either of these branches.

### `release`

The `release` branch contains all the markdown, JSON, React, etc files that are used to build the `build` folder.  However the `release` branch does not actually contain the `build` folder itself. When getting started, clone `release` and create a new branch off of its latest commit to make changes.

### `master`

The `master` branch is what actually hosts GitHub pages.  For this reason, the `master` branch is required to be the `default` branch in GitHub.  Updates to this branch will automatically show up on the live website within about a minute.  The live website is built from the contents of the `build` folder.  Do not push, branch off of, or otherwise make changes directly to this branch.  The `release` branch has a `publish` script that will automatically update the master branch with the required contents. 

## Getting Started

To make changes to the documentation website, you will first need to clone the repository from its [release branch](https://github.com/enklu/enklu.github.io/tree/release).  Do not clone or modify the `master` branch.  

Once you have cloned the `release` branch, you can create your own `feature` branch off of the latest commit in `release`.  This `feature` branch will be your working branch to make changes in.  You should not make changes directly in the `release` branch.  Once your changes are complete, you can create a pull request to merge your `feature` branch into the `release` branch.  

### Running the Website Locally

If this is your first time running the website, you will likely need to install the required dependencies using this command in the main directory:

```
npm install
```

Once you have run this command once and installed all the necessary npm packages, you will not likely need to ever run it again unless major structural changes to the website are made or if you re-clone the repository.  

> One important thing to note is that if you see any warnings or errors related to `docusaurus`, you should not attempt to fix these errors through npm itself.  We have made heavy modifications to the `docusaurus` package in node_modules meaning it is out of sync with npm and cannot be automatically fixed this way.  For this reason, we have included the `docusaurus` package directly in the `release` branch.

To run the website locally, use this command from the main directory:

```
npm start
``` 

This will automatically open a new browser tab with the local instance of the website running.  Some changes you make, like updates to a markdown file, will be propogated immediately to this local website instance.  

However, other changes may require a full restart.  To restart, simply terminate the current running process in your terminal by pressing `CTRL` + `C`.  It will ask you to confirm the termination.  You can either enter `Y` for yes, `N` for no, or you can just press `CTRL` + `C` again to be returned to the normal shell prompt.  Then you can run `npm start` again to spin the process back up.

### Publishing

Publishing changes to the documentation website should be done from the `release` branch.  When you are ready to make changes to the live website, you can use the publish script by running this command in the main directory:

```
npm run publish
``` 

This `publish` script will build the `build` folder and push the `build` folder to master.  You should see that the live website will update its contents within about 1 minute. Unless you are publishing changes to the live website, you should not run this script.

## Document Types

Documents fall into 2 main categories: **Guides** and the **API Reference**.  Guides are more like walkthroughs.  A guide takes a larger concept and breaks it down into concrete steps.  Then it leads the user through those steps with the goal of empowering the user with a solid understanding of the concept.  The API Reference is meant for specific pieces of our API.  They are less like walkthroughs and focus more on details and showing code examples.  

## Document Naming

All document files should end with `.md` to save them as markdown files.  The filename should be the same as the title of the document using Pascal Case.  There should be no spaces ` `, apostrophes `'`, quotes `"`, graves `` ` ``, forward slashes `/`, backslashes `\`, parentheses `()`, or brackets `[]{}` in the document file name.

> For example: \
A guide doc titled: `Hololens (1st gen) Basics & Setup` \
Should have the file name: `HoloLens1stGenBasics&Setup.md`

All markdown files should be saved within `docs` which is the highest level docs folder, not the one in live/latest (it’s the one with all the markdown files in it).  

All guide docs should be saved in a folder based on what category the doc falls in: 

- Web Editor Basics
- HoloLens
- Chapters Series
- Assets 
- Spaces
- Scripting

> For example a guide doc related to `Web Editor Basics` should be saved in `docs/WebEditorBasics`.

All API Reference docs should be saved in `docs/API`. 

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

#### Image File Size

Please try to keep all image files **under 5MB** (smaller is better).  **No files should exceed 10MB**.  This will help make sure users do not have to wait too long for a page with many images to load.  In addition, there are some vague [GitHub repo limitations](https://help.github.com/en/github/managing-large-files/what-is-my-disk-quota) we’d like to avoid.  

#### Image File Name

When naming an image file, use the title of the document where the image is being used, followed by an underscore, followed by the image name and file extension.  There should be no spaces ` `, apostrophes `'`, quotes `"`, graves `` ` ``, forward slashes `/`, backslashes `\`, parentheses `()`, or brackets `[]{}` in the image file name.

> For example:\
A png image of the hierarchy being used in the Web Editor Interface guide should be named: `WebEditorInterface_Hierarchy.png`

#### Image File Location

All images should be located within `static/img`.  There is a `logo` folder and a `product` folder within the `img` folder.  The `logo` folder should contain any and all Enklu logo images used.  Not images that have the logo in it, specifically standalone logo images.  The `product` folder should contain any images or diagrams related to the web editor or in lens captures.  Other images such as generic icons or pictures that do not relate specifically to our product can be saved inside `img`, but outside the `logo` and `product` folders.

> For example:\
The `WebEditorInterface_Hierarchy.png` should be saved in `static/img/product`.

#### Using Images in Markdown Files

To include images within a markdown document, you’ll need to use this markdown syntax:

```
![Alt text for image](link where image should be pulled from)
```

> **"Do I have to include an image alt text?"**  Yes, unless it is unnecessary. Alternative text for images is an important part of improving website accessibility.  Please follow these [guidelines for image alt text](https://webaim.org/techniques/alttext/).

The final path to the image you should use in the markdown file will end up being `img` instead of using the static folder path where the image is originally saved.

> For example:\
The `WebEditorInterface_Hierarchy.png` saved in `static/img/product` should be referenced in a markdown file as
`![List of items nested under items](img/product/WebEditorInterface_Hierarchy.png)`

## Document Sidebars

The left sidebar contains a list of document links for quick access.  The right sidebar is a table of contents for the currently selected document.  The right sidebar is automatically generated from the headings of the markdown file.

### Adding Documents to a Sidebar

In the main directory there is a `sidebars.json` file which controls the documents in the left sidebar.  Guides and API Reference docs have separate sidebars: `"Guides"` and `"API"`. Within the `"Guides"` sidebar, there are sections for each category: `"Web Editor Basics"`, `"HoloLens"`, etc.

To add a document to a sidebar, you need to add the `id` used in the document's header prepended by any folder within the `docs` where the document is located.

> For example: \
A doc with the id `KeyboardShortcuts` is located in `docs/WebEditorBasics`.  To add this doc to the Web Editor Basics sidebar you would add `"WebEditorBasics/KeyboardShortcuts"`.  The resulting `sidebars.json` file would look something like this:
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

## Who to Ask for Help

If you are contributing to this repository or documentation website and need more help than is available in this README, please reach out to:

- Liam (liam@enklu.com)
- Shannon (shannon@enklu.com)

These are the people who have the most experience working with this repository.  And these are also good people to request as pull request reviewers.
