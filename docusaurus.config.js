// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Device42",
  tagline: "The Hitchhiker’s Guide to DEVICE42",
  favicon: 'https://www.device42.com/wp-content/uploads/2021/08/d42-favicon.png',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  /** @type {import('@docusaurus/preset-classic').Options} */
  presets: [
    [
        '@docusaurus/preset-classic',
      ({

        docs: {
          editUrl:
          'https://github.com/device42/docs-device42/tree/main/',
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
      image: 'img/d42-social-card.png',
      navbar: {
        logo: {
          alt: 'Device42 Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            href: '/docs/getting_started',
            label: 'Documentation',
            position: 'left',
          },
          {
            href: 'https://www.device42.com/device42-product/',
            label: 'Product',
            position: 'right',
          },
          {
            href: 'https://www.device42.com/features/',
            label: 'Features',
            position: 'right',
          },
          {
            href: 'https://www.device42.com/customers/',
            label: 'Customers',
            position: 'right',
          },
          {
            href: 'https://www.device42.com/company/',
            label: 'Company',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
