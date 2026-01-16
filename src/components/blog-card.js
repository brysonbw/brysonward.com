import { LitElement, css, html } from 'lit';

import '../shared/ui/card.js';
import {
  buttonStyles,
  buttonTextVariantStyles,
} from '../shared/styles/buttonStyles.js';
import { chipStyles } from '../shared/styles/chipStyles.js';
import { blogStore } from '../stores/blog.js';
import { ROUTES } from '../utils/constants.js';
import { formatTimeAgo } from '../utils/dateFunctions.js';
import { toSentenceCase } from '../utils/helpers.js';

import '../shared/ui/empty-placeholder.js';

export class BlogCard extends LitElement {
  static properties = {
    data: { type: Object },
  };

  constructor() {
    super();
    /** @type {import("index.d.js").Post | null} */
    this.data = null;
  }

  render() {
    if (!this.data) {
      return html`<empty-placeholder asCard=${true}></empty-placeholder>`;
    }

    const { slug, title, date, description, tags } = this.data;
    return html`<ui-card>
      <div slot="header" class="header">
        <button
          variant="text"
          @click=${this.#goTo}
          data-slug=${slug}
          class="link"
        >
          ${title}
        </button>
        <time class="date">${formatTimeAgo(date)}</time>
      </div>

      <p slot="content" class="description">${description}</p>

      <div slot="footer">
        <div class="chip-container">
          ${tags?.map(
            (item) => html`<span class="chip">${toSentenceCase(item)}</span>`
          )}
        </div>
      </div>
    </ui-card>`;
  }

  /** @param {Event} event */
  #goTo(event) {
    event.preventDefault();
    const { target } = event;

    if (target instanceof HTMLButtonElement) {
      const slug = /** @type {string} */ (target.dataset.slug);
      if (blogStore.isPostValid(slug)) {
        window.history.pushState({}, '', `${ROUTES.BLOG.PATH}/${slug}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  }

  static styles = [
    chipStyles,
    buttonStyles,
    buttonTextVariantStyles,
    css`
      :host {
        --link: #58a6ff;
        --gray: #8b949e;
        --border: #30363d;
      }

      .header {
        display: flex;
        flex-direction: column;
        align-items: start;
      }

      .link {
        color: var(--link);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.875rem;
        padding: 0;
      }

      .link:hover {
        text-decoration: underline;
      }

      .date {
        color: var(--gray);

        font-size: 0.75rem;
        font-weight: 500;
      }

      .description {
        color: var(--light-gray);
        font-size: 0.875rem;
        margin: 0 0 1rem 0;
        flex-grow: 1;
        line-height: 1.5;
      }
    `,
  ];
}

customElements.define('blog-card', BlogCard);
