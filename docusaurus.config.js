// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: ' Hello ohxinru',
  tagline: 'xr blog',
  url: 'https://ohxinru.github.io/',
  baseUrl: '/ohxinru/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ohxinru', // Usually your GitHub org/user name.
  projectName: 'ohxinru.github.io', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-C47PHW2GJT',
          anonymizeIP: false,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OHXINRU',
        logo: {
          alt: 'ohxinru. Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'blog/index',
            position: 'left',
            label: '博客介绍',
          },
          {
            to: 'docs/project/management',
            position: 'left',
            label: '项目管理',
          },
          {
            to: 'docs/agile/management',
            position: 'left',
            label: '敏捷管理',
          },
          {
            type: 'doc',
            docId: 'case/faq',
            position: 'left',
            label: 'FAQ',
          },
          {
            type: 'doc',
            docId: 'ir/index',
            position: 'left',
            label: '投资者关系',
          },
          {
            href: 'https://github.com/ohxinru/ohxinru.github.io',
            label: '我的GitHub',
            position: 'left',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ohxinru/ohxinru.github.io',
            label: 'my GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/ohxinru/ohxinru.github.io',
            label: '占位先咯',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'my github',
            items: [
              {
                label: 'ohxinru.github.io',
                to: 'https://github.com/ohxinru/ohxinru.github.io',
              },
            ],
          },
          {
            title: '文档 Document',
            items: [
              {
                label: '项目管理',
                to: 'https://github.com/ohxinru/ohxinru.github.io',
              },
              {
                label: '敏捷管理',
                to: 'https://github.com/ohxinru/ohxinru.github.io',
              },
              {
                label: '案例分析',
                to:  'https://github.com/ohxinru/ohxinru.github.io',
              },
            ],
          },
          {
            title: '玩转工具',
            items: [
              {
                label: 'GitHub',
                to: 'https://github.com/ohxinru/ohxinru.github.io',
              },
              {
                label: 'jira',
                to: 'https://github.com/ohxinru/ohxinru.github.io',
              },
              {
                label: '禅道',
                to: 'https://github.com/ohxinru/ohxinru.github.io',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/ohxinru/ohxinru.github.io',
              },
            ],
          },
          {
            title: '公司 Company',
            items: [
              {
                label: '关于 Vika',
                to: '/docs/business/',
              },
              {
                label: '招聘 Hiring',
                to: '/docs/hr',
              },
              {
                label: '员工服务',
                to: '/docs/vikadoor/',
              },
              {
                label: '投资者关系',
                to: '/docs/ir/',
              },
              {
                label: '媒体报道',
                to: 'https://vika.cn/press/',
              },
            ],
          },
          {
            title: '联系我 Connect',
            items: [
              {
                label: '某个地方',
                to: 'https://github.com/ohxinru/ohxinru.github.io',
              },
              {
                label: '附上地图咯',
                to: 'https://github.com/ohxinru/ohxinru.github.io',
              },
              {
                label: '邮箱地址',
                to: '362988082@qq.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Ohxinru.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
