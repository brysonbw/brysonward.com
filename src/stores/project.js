import { TECHNOLOGIES } from '../utils/constants.js';

class ProjectStore {
  /** @type {import("../index.d.js").Projects} */
  #projects = Object.freeze({
    openSource: Object.freeze([
      {
        name: 'codecause.dev',
        homepage_url: 'https://codecause.dev',
        repo_url: 'https://github.com/Code-Cause-Collective/codecause.dev',
        description:
          'A non-profit, tech-driven community of developers, united in creating solutions that serve the greater good of humanity.',
        avatar_url: 'https://avatars.githubusercontent.com/u/219076232?v=4',
        technologies: [
          TECHNOLOGIES.LIT,
          TECHNOLOGIES.TYPESCRIPT,
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
        ],
        private: false,
      },
      {
        name: 'lit-toaster',
        homepage_url: 'https://www.lit-toaster.com/',
        repo_url: 'https://github.com/brysonbw/lit-toaster',
        description: 'Notifications for Lit Web Components.',
        avatar_url: 'https://avatars.githubusercontent.com/u/77869922?v=4',
        technologies: [
          TECHNOLOGIES.LIT,
          TECHNOLOGIES.NPM,
          TECHNOLOGIES.TYPESCRIPT,
          TECHNOLOGIES.JAVASCRIPT,
        ],
        private: false,
      },
      {
        name: 'fetchet',
        homepage_url: 'https://www.npmjs.com/package/fetchet',
        repo_url: 'https://github.com/brysonbw/fetchet',
        description:
          'The compact, Promise-based, and browser-native HTTP fetch wrapper.',
        avatar_url: 'https://avatars.githubusercontent.com/u/77869922?v=4',
        technologies: [
          TECHNOLOGIES.NPM,
          TECHNOLOGIES.TYPESCRIPT,
          TECHNOLOGIES.JAVASCRIPT,
        ],
        private: false,
      },
      {
        name: 'ycstartupmap.com',
        homepage_url: 'https://ycstartupmap.com/',
        repo_url: 'https://github.com/brysonbw/ycstartupmap.com',
        description:
          'A map visualization of the YC (Y Combinator) Startup Directory.',
        avatar_url: 'https://avatars.githubusercontent.com/u/77869922?v=4',
        technologies: [
          TECHNOLOGIES.LIT,
          TECHNOLOGIES.CESIUM_JS,
          TECHNOLOGIES.TYPESCRIPT,
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.HTML,
          TECHNOLOGIES.CSS,
        ],
        private: false,
      },
      {
        name: 'vscode-svelte-component-snippets',
        homepage_url:
          'https://marketplace.visualstudio.com/items?itemName=brysonbw.svelte-component-snippets',
        repo_url:
          'https://github.com/brysonbw/vscode-svelte-component-snippets',
        description:
          'Visual Studio Code Extension for adding Svelte component snippets.',
        avatar_url: 'https://avatars.githubusercontent.com/u/77869922?v=4',
        technologies: [TECHNOLOGIES.VSCODE, TECHNOLOGIES.SVELTE],
        private: false,
      },
      {
        name: 'vscode-lit-component-snippets',
        homepage_url:
          'https://marketplace.visualstudio.com/items?itemName=brysonbw.lit-component-snippets',
        repo_url: 'https://github.com/brysonbw/vscode-lit-component-snippets',
        description:
          'Visual Studio Code Extension for adding Lit component snippets.',
        avatar_url: 'https://avatars.githubusercontent.com/u/77869922?v=4',
        technologies: [TECHNOLOGIES.VSCODE, TECHNOLOGIES.LIT],
        private: false,
      },
    ]),
    commercial: Object.freeze([]),
  });

  get projects() {
    return this.#projects;
  }
}

export const projectStore = new ProjectStore();
