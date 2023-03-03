// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PuerTS（普洱TS）',
  tagline: 'Write Typescript in Unreal/Unity',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://puerts.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Tencent', // Usually your GitHub org/user name.
  projectName: 'puerts', // Usually your repo name.
 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: "doc",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: function ({ locale, docPath }) {
            // 适配puerts仓库
            if (locale == 'zh-Hans') locale = 'zhcn';
            var docPathArr = docPath.split('/');
            docPathArr[0] = docPathArr[1]
            docPathArr[1] = locale
            return `https://github.com/Tencent/puerts/edit/master/doc/${docPathArr.join('/')}`;
          }
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/puerts_logo.png',
      navbar: {
        title: 'PuerTS',
        logo: {
          alt: 'PuerTS Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'puerts/unity/install',
            position: 'left',
            label: 'Unity',
          },
          {
            type: 'doc',
            docId: 'puerts/unreal/install',
            position: 'left',
            label: 'Unreal',
          },
          // {
          //   type: 'doc',
          //   docId: 'docusaurus/intro',
          //   position: 'left',
          //   label: 'Docusaurus',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Tencent/puerts',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/puerts/unity/install',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/RYRY7D833n',
              },
              {
                label: 'QQ群',
                href: 'https://jq.qq.com/?_wv=1027&k=wN8M6m8b',
              },
              {
                label: 'QQ群 (Unreal)',
                href: 'https://jq.qq.com/?_wv=1027&k=JnP3MPMN',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '知乎专栏',
                href: 'https://www.zhihu.com/column/c_1355534112468402176',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Tencent/puerts',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PuerTS. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
