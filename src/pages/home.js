import { LitElement, css, html } from 'lit';

import thumbnail from '../assets/images/bryson-ward.png';
import { animatedUnderlineStyles } from '../shared/styles/animatedStyles.js';
import { responsiveImageStyles } from '../shared/styles/responsiveImageStyles.js';
import {
  captionTextStyles,
  h1TextStyles,
} from '../shared/styles/textStyles.js';
import { ROUTES } from '../utils/constants.js';

import '../components/social-links.js';

const PAGES_WHITELIST = /** @type {readonly string[]} */ (
  Object.freeze([ROUTES.BLOG.NAME, ROUTES.WORK.NAME])
);

const PAGES = Object.freeze([
  ...PAGES_WHITELIST.map((name) => {
    const route = Object.values(ROUTES).find((item) => item.NAME === name);
    return route ? { name: route.NAME, href: route.PATH } : null;
  }).filter((page) => page !== null),

  { name: 'Contact', href: 'mailto:brysonward77@gmail.com' },
]);

export class HomePage extends LitElement {
  render() {
    return html`<div>
      <div class="logo-container">
        <img src="${thumbnail}" alt="Logo" class="logo" />
      </div>
      <social-links></social-links>
      <h1>Hey, I'm Bryson</h1>
      <p class="caption">Builder, creator, and lifelong learner.</p>
      <ul class="pages-list">
        ${PAGES.map(
          ({ name, href }) =>
            html` <li>
              <a class="reverse-animated-underline" href="${href}">${name}</a>
            </li>`
        )}
      </ul>
    </div>`;
  }

  static styles = [
    captionTextStyles,
    animatedUnderlineStyles,
    responsiveImageStyles,
    h1TextStyles,
    css`
      :host {
        text-align: center;
      }

      .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
      }

      .caption {
        color: var(--light-gray);
        font-size: 0.95rem;
      }

      .pages-list {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
      }

      .pages-list li {
        margin: 0.5rem 0;
        font-size: 1.2rem;
        line-height: 1.5;
      }

      a {
        text-decoration: underline;
      }
    `,
  ];
}

customElements.define('home-page', HomePage);
