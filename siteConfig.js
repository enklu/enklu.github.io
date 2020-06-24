/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

baseUrl = '/';

const siteConfig = {
  outDir: 'build',

  title: 'Enklu Documentation', // Title for your website.
  tagline: '',
  url: 'https://enklu.github.io', // Your website URL
  baseUrl: baseUrl, // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  docsUrl: 'docs',
	disableTitleTagline: true,
  // Used for publishing and more
  projectName: 'enklu.github.io',
  organizationName: 'enklu',
  gitUser: 'Enklu',
  useSsh: true,
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'GuidesOverview', label: 'Guides'},
    {doc: 'API/ScriptingLanguages', label: 'API Reference'},
		{doc: 'FAQ', label: 'FAQ'},
    {page: 'contact', label: 'Contact'},
    //{blog: true, label: 'Blog'},
  ],

	algolia: {
    apiKey: '86bdc43f43d399bcaad5c6a09006ecac',
    indexName: 'enklu',
    algoliaOptions: {}
  },

	docsSideNavCollapsible: true,
	scrollToTop: true,
	scrollToTopOptions: {
    diameter: 46,
		scrollDuration: 120,
		showWhenScrollTopIs: 32,
  },

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo/EnkluLogo_White.svg',
  footerIcon: 'img/logo/EnkluLogo_White.svg',
  favicon: 'img/logo/EnkluLogo.svg',

  /* Colors for website */
  colors: {
    primaryColor: '#000000',
    secondaryColor: '#FF00FF',
		enkluBrandColor: '#33DED2',
    linkColor: '#35947c',
    backgroundColor: '#FFFFFF',
		textColor: '#000000',
		backgroundColorDark: '#232323',
		textColorDark: '#FFFFFF'
  },

  /* Custom fonts for website */

  fonts: {
    primaryFont: [
      "Cairo",
			"Open Sans",
			"Helvetica",
			"Arial",
			"sans-serif"
    ],
    secondaryFont: [
      "Open Sans",
			"Helvetica",
			"Arial",
			"sans-serif"
    ]
  },


  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Enklu, Inc.`,
	usePrism: true,
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'railscasts',
		defaultLang: 'javascript',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js',
		'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
		baseUrl + 'js/code-block-buttons.js',
	],
	stylesheets: [],
  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
