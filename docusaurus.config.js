// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `Guías - Doofy's Projects`,
  tagline: 'Conjunto de guias y articulos hechos por y para la comunidad.',
  url: 'https://doofysp.github.io',
  baseUrl: '/GuiasDP/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/dpicon.ico',

  organizationName: 'doofysp',
  projectName: 'GuiasDP',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// We don't set the description and title here to assure that the right og:tags will be delivered per page.
			metadata: [
				{
					name: 'og:image',
					content: 'https://cdn.discordapp.com/attachments/939014431403307061/1016818205555163257/DP.png',
				},
				{
					name: 'theme-color',
					content: '#aee4b7',
				},
				{
					name: 'twitter:card',
					content: 'summary',
				},
			],
			colorMode: {
				defaultMode: 'dark'
			},
      announcementBar: {
        id: 'barra',
        backgroundColor: '#aee4b7',
        textColor: '#000',
        isCloseable: true,
        content: '⚒️ Sitio en construcción ⚒️',
      },
      navbar: {
        title: `Doofy's Projects`,
        logo: {
          alt: 'Logo DP',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guías',
          },

          { to: '/blog',
            label: 'Blog',
            position: 'left'
          },

					{
						href: 'https://github.com/doofysp/GuiasDP',
						className: 'navbar-item-github',
						position: 'right',
					},
          {
						href: 'https://discord.gg/doofy-s-projecs-704042607600205956',
						className: 'navbar-item-discord',
						position: 'right',
					},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Página principal',
            items: [
              {
                label: `Doofy's Projects`,
                href: 'https://dprojects.org',
              },
            ],
          },
          {
            title: 'Canales de soporte',
            items: [
              {
                label: 'Grupo de Facebook',
                href: 'https://facebook.com/groups/dprojects',
              },
              {
                label: 'Servidor de Discord',
                href: 'https://discord.com/servers/doofy-s-projects-704042607600205956',
              },
              {
                label: 'Canal de Telegram',
                href: 'https://telegram.me/dprojects',
              },
            ],
          },
          {
            title: 'Otros',
            items: [
              {
                label: 'Artículos',
                to: '/blog',
              },
              {
                label: 'Guías',
                to: '/docs/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/doofysp/GuiasDP',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Doofy's Projects. Sitio generado por Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
