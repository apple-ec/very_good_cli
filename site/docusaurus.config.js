// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Very Good CLI',
  tagline:
    'A Command-Line Interface to generate scalable templates and use helpful commands.',
  url: 'https://verygoodopensource.github.io',
  baseUrl: '/very_good_cli/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'verygoodopensource',
  projectName: 'very_good_cli',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/verygoodopensource/very_good_cli/tree/main/site/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/very_good_cli/img/meta/open-graph.png',
      navbar: {
        title: 'Very Good CLI',
        logo: {
          alt: 'Very Good CLI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Overview',
            to: '/docs/overview',
          },
          {
            label: 'Templates',
            to: '/docs/category/templates',
          },
          {
            label: 'Commands',
            to: '/docs/category/commands',
          },
          {
            label: 'Resources',
            to: '/docs/category/resources',
          },
          {
            href: 'https://github.com/verygoodopensource/very_good_cli',
            position: 'right',
            className: 'navbar-github-icon',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/overview',
              },
              {
                label: 'Templates',
                to: '/docs/category/templates',
              },
              {
                label: 'Commands',
                to: '/docs/category/commands',
              },
              {
                label: 'Resources',
                to: '/docs/category/resources',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog',
                href: '#',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Open an Issue',
                href: 'https://github.com/verygoodopensource/very_good_cli/issues/new/choose',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/verygoodopensource/very_good_cli',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Very Good Ventures.<br/>Built with 💙 by <a target="_blank" rel="noopener" aria-label="Very Good Ventures" href="https://verygood.ventures">Very Good Ventures</a>.`,
      },
      prism: {
        additionalLanguages: ['bash', 'dart', 'yaml'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
