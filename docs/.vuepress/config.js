module.exports = (_ctx) => ({
  base: '/fun-wallet-docs/',
  dest: 'docs/dist',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'FunFair Wallet Documentation',
      description: 'Welcome',
    },
  },

  head: [
    ['link', { rel: 'icon', href: `/logo.svg` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],

  theme: '@vuepress/theme-default',

  themeConfig: {
    repo: 'funfair-tech/fun-wallet-docs',
    logo: '/logo.svg',
    editLinks: true,
    docsDir: 'packages/docs/dist',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar(
            'Information',
            'How Does It Work?',
            'Web SDK',
            'Server > Server API'
          ),
        },
      },
    },
  },

  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ['@vuepress/medium-zoom', true],
    [
      'container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>',
      },
    ],
    [
      'container',
      {
        type: 'upgrade',
        before: (info) => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>',
      },
    ],
    [
      'vuepress-plugin-redirect',
      {
        redirectors: [
          {
            base: '/',
            alternative: '/guide/',
          },
        ],
      },
    ],
    [
      'vuepress-plugin-zooming',
      {
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },
    ],
    'tabs',
  ],

  extraWatchFiles: ['.vuepress/nav/en.js'],
});

function getGuideSidebar(
  information,
  howDoesItWork,
  websdk,
  serverToServerApi
) {
  return [
    {
      title: information,
      collapsable: false,
      children: [
        '',
        'information/getting-started',
        'information/browser-support',
        'information/testing',
        'information/layouts',
        'information/branding',
        'information/kyc',
        'information/fiat-gateway',
        'information/approval-modal',
        'information/auto-resizing-iframes',
      ],
    },
    {
      title: websdk,
      collapsable: false,
      children: [
        'web-sdk/live-demo',
        'web-sdk/installing-sdk',
        'web-sdk/react',
        'web-sdk/angular',
        'web-sdk/vue',
        'web-sdk/native-js-or-another-framework.md',
        'web-sdk/authentication',
        'web-sdk/routing',
        'web-sdk/languages',
        'web-sdk/ethereum-provider',
        'web-sdk/sdk-methods',
        'web-sdk/sdk-event-listeners',
        'web-sdk/block-listener',
      ],
    },
    {
      title: serverToServerApi,
      collapsable: false,
      children: [
        'server-to-server-api/introduction',
        'server-to-server-api/authorization',
        'server-to-server-api/user-information',
        'server-to-server-api/encrypted-user-information',
      ],
    },
    {
      title: howDoesItWork,
      collapsable: false,
      children: [
        'how-does-it-work/how-authentication-works',
        'how-does-it-work/registration',
        'how-does-it-work/login-and-recovery-token-generation',
        'how-does-it-work/recovery',
        'how-does-it-work/re-authentication',
        'how-does-it-work/how-is-the-authentication-secure',
        'how-does-it-work/how-popup-authenticates-leader',
        'how-does-it-work/leader-and-follower-communication',
        'how-does-it-work/how-broadcast-works',
        'how-does-it-work/fun-wallet-sdk',
        'how-does-it-work/fun-wallet-ethereum-provider',
        'how-does-it-work/blooms',
      ],
    },
  ];
}
