import { defineStore } from 'pinia';
import type { ProjectStore } from './types';
import cesium from '@/assets/images/cesium-logo-only.png';
import lit from '@/assets/svgs/lit.svg';

export const useProjectStore = defineStore('project', {
  state: (): ProjectStore => ({
    openSource: [
      {
        image: '/img/code-cause.png',
        image_alt: 'code-cause-non-profit-app-img',
        link: 'https://codecause.dev/',
        name: 'Code Cause',
        description: 'a non-profit, online tech-driven community of developers, united in creating solutions that serve the greater good of humanity.',
        image_icons: [{ name: 'lit', src: lit }],
        dev_icons: ['typescript', 'firebase'],
      },
      {
        image: '/img/lit-toaster.png',
        image_alt: 'lit-toaster-img',
        link: 'https://www.lit-toaster.com/',
        name: 'Lit Toaster',
        description:
          'Notifications for Lit Web Components.',
        image_icons: [
          { name: 'lit', src: lit, classes: 'mr-2' },
        ],
        dev_icons: ['npm', 'node', 'javascript'],
      },
      {
        image: '/img/yc-startup-map.png',
        image_alt: 'yc-startup-map-img',
        link: 'https://ycstartupmap.com/',
        name: 'YC Startup Map',
        description:
          'A map visualization of Y Combinator\'s YC Startup Directory.',
        image_icons: [
          { name: 'lit', src: lit, classes: 'mr-2' },
          { name: 'cesium-js', src: cesium },

        ],
        dev_icons: ['typescript', 'python', 'firebase'],
      },
      {
        image: '/img/dictionary.png',
        image_alt: 'dictionary-img',
        link: 'https://next-dictionary-app.vercel.app/',
        name: 'Dictionary',
        description:
          'Search for word definitions using Dictionary API . Find detailed meanings, synonyms, and antonyms.',
        dev_icons: [
          'javascript',
          'typescript',
          'tailwindcss',
          'react',
          'redux',
          'next',
        ],
      },
      {
        image: '/img/gogo-pikachu.png',
        image_alt: 'gogo-pikachu-preview-img',
        image_class: 'w-full h-[7.2rem] object-scale-down',
        link: 'https://gogo-pikachu.vercel.app/',
        name: 'GoGo Pikachu',
        description:
          'A 2D Phaser HTML5 Platform Game. Collect Thunder Stones to level up Pikachu!',
        image_icons: [
          {
            name: 'phaser-js',
            src: 'https://raw.githubusercontent.com/photonstorm/phaser/v2.6.2/resources/Phaser%20Logo/PNG/Phaser%20Logo%20Web%20Quality.png',
          },
        ],
        dev_icons: ['html', 'css', 'javascript'],
      },
      {
        image: '/img/lit-comp-snippets.png',
        image_alt: 'vscode-lit-comp-snippets-preview-img',
        link: 'https://marketplace.visualstudio.com/items?itemName=brysonbw.lit-component-snippets',
        name: 'Lit Component Snippets',
        description:
          'Visual Studio Code Extension for adding Lit component snippets.',
        image_icons: [
          { name: 'lit', src: lit },
        ],
        dev_icons: ['vscode'],
      },
      {
        image: '/img/svelte-comp-snippets.png',
        image_alt: 'vscode-svelte-comp-snippets-preview-img',
        link: 'https://marketplace.visualstudio.com/items?itemName=brysonbw.svelte-component-snippets',
        name: 'Svelte Component Snippets',
        description:
          'Visual Studio Code Extension for adding Svelte component snippets.',
        dev_icons: ['vscode', 'svelte'],
      },
    ],
    commercial: [],
  }),
  actions: {},
  getters: {},
});
