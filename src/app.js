import { Router } from '@lit-labs/router';
import { LitElement, css, html } from 'lit';

import { linkStyles } from './shared/styles/linkStyles.js';
import { ROUTES } from './utils/constants.js';
import { toTitleCase } from './utils/helpers.js';

import './components/footer.js';

export class App extends LitElement {
  #router = new Router(this, [
    {
      path: ROUTES.HOME.PATH,
      render: () => html`<home-page></home-page>`,
      enter: async () => {
        await import('./pages/home.js');
        document.title = `${import.meta.env.VITE_APP_TITLE}`;
        return true;
      },
    },
    {
      path: ROUTES.BLOG.PATH,
      render: () => html`<blog-page></blog-page>`,
      enter: async () => {
        await import('./pages/blog.js');
        document.title = `${import.meta.env.VITE_APP_NAME} | ${ROUTES.BLOG.NAME}`;
        return true;
      },
    },
    {
      path: ROUTES.BLOG_DETAIL.PATH,
      render: ({ slug }) =>
        html`<blog-detail-page .slug=${slug}></blog-detail-page>`,
      enter: async ({ slug }) => {
        await import('./pages/blog-detail.js');
        document.title = `${import.meta.env.VITE_APP_NAME} | ${ROUTES.BLOG.NAME} | ${toTitleCase(slug?.replaceAll('-', ' '))}`;
        return true;
      },
    },
    {
      path: ROUTES.WORK.PATH,
      render: () => html`<work-page></work-page>`,
      enter: async () => {
        await import('./pages/work.js');
        document.title = `${import.meta.env.VITE_APP_NAME} | ${ROUTES.WORK.NAME}`;
        return true;
      },
    },
    {
      path: ROUTES.CATCH_ALL.PATH,
      render: () => {
        return html`<not-found-page></not-found-page>`;
      },
      enter: async () => {
        await import('./pages/not-found.js');
        document.title = `${import.meta.env.VITE_APP_NAME} | ${ROUTES.CATCH_ALL.NAME}`;
        return true;
      },
    },
  ]);

  render() {
    return html` <main>
      <div id="outlet">${this.#router.outlet()}</div>
      <app-footer></app-footer>
    </main>`;
  }

  static styles = [
    linkStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      main {
        width: min(95ch, 100% - 4rem);
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      #outlet {
        flex: 1;
        max-width: 36rem;
        padding: 0 1rem;
        margin: 6rem auto 6rem;
      }
    `,
  ];
}

customElements.define('app-root', App);
