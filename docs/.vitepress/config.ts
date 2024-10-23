import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "djinzin.js",
  description: "The magical JavaScript framework for modern web development",
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/core-concepts' },
      { text: 'Examples', link: '/examples/quick-start' },
      { text: 'Playground', link: 'https://play.djinzin.dev' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Why djinzin?', link: '/guide/why-djinzin' },
            { text: 'Core Concepts', link: '/guide/core-concepts' }
          ]
        },
        {
          text: 'Essentials',
          items: [
            { text: 'Magic Components', link: '/guide/magic-components' },
            { text: 'State Management', link: '/guide/state-management' },
            { text: 'Routing', link: '/guide/routing' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Core Concepts', link: '/api/core-concepts' },
            { text: 'Composables', link: '/api/composables' },
            { text: 'Utilities', link: '/api/utilities' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/djinzin/djinzin' },
      { icon: 'twitter', link: 'https://twitter.com/djinzinjs' },
      { icon: 'discord', link: 'https://discord.gg/djinzin' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024- from <a href="https://princekouame.com/">Prince Kouamé</a>'
    }
    
  }
})