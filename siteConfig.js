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

const siteConfig = {
  title: 'Enklu Documentation', // Title for your website.
  tagline: '',
  url: 'https://enklu.github.io', // Your website URL
  baseUrl: '/documentation/build/documentation/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
	disableTitleTagline: true,
  // Used for publishing and more
  projectName: 'documentation',
  organizationName: 'Enklu',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {markdown: 'doc1', label: 'Guides'},
    {markdown: 'API_ScriptingLanguages', label: 'API Reference'},
		{markdown: 'FAQ', label: 'FAQ'},
    {page: 'help', label: 'Help'},
    //{blog: true, label: 'Blog'},
  ],

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
		'/documentation/js/code-block-buttons.js',
	],
	stylesheets: ['/documentation/css/code-block-buttons.css'],
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
