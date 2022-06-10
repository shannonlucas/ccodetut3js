// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Creative coding with three.js',
  tagline: 'Moving cubes are what it\'s all about',
  url: 'https://shannonlucas.github.io',
  baseUrl: '/ptw310/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'shannonlucas',
  projectName: 'ptw310',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Creative coding with three.js',
        logo: {
          alt: 'Site logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/shannonlucas/ptw310',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/shannonlucas/ptw310',
              },
              {
                label: 'three.js',
                href: 'https://threejs.org/',
              },
              {
                label: 'JSFiddle',
                href: 'https://jsfiddle.net/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Shannon Lucas`,
      },
      tableOfContents: {
        maxHeadingLevel: 2,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      hideableSidebar: true,
    }),
};

module.exports = config;
