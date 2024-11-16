import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Aluben',
  tagline: 'Ending internet censorship',
  favicon: 'img/favicon.ico',

  url: 'https://aluben-docs.github.io',
  baseUrl: '/',

  organizationName: 'aluben-docs',
  projectName: 'Aluben-docs.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/aluben-docs/Aluben-docs.github.io',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/aluben-docs/Aluben-docs.github.io',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: 'D3ULZU2PJD',

      // Public API key: it is safe to commit it
      apiKey: 'cc40fb680fb9855a8e77083710f9ef7c',

      indexName: 'aluben-io',

    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Aluben',
      logo: {
        alt: 'Aluben Logo',
        src: 'https://avatars.githubusercontent.com/u/176770351?s=200&v=4',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/Aluben-services/Aluben',
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
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Aluben-Service/Aluben',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aluben services, Inc. all rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
