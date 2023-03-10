/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Unofficial ADB Book',
    tagline: 'Deep-dive into ADB',
    url: 'https://yume-chan.github.io',
    baseUrl: '/unofficial-adb-book/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'yume-chan',
    projectName: 'unofficial-adb-book', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Unofficial ADB Book',
            logo: {
                alt: 'Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'basics/intro',
                    position: 'left',
                    label: 'ADB',
                },
                {
                    type: 'doc',
                    docId: 'adb/shell',
                    position: 'left',
                    label: 'Tango',
                },
                {
                    href: 'https://github.com/yume-chan/unofficial-adb-book',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} Simon Chan. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/yume-chan/unofficial-adb-book/edit/main/',
                    remarkPlugins: [require('./scripts/plantuml')],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
