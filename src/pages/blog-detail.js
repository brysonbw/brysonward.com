import { Task } from '@lit/task';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';
import { LitElement, css, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import MarkdownIt from 'markdown-it';

import { animatedUnderlineStyles } from '../shared/styles/animatedStyles.js';
import { buttonStyles } from '../shared/styles/buttonStyles.js';
import { chipStyles } from '../shared/styles/chipStyles.js';
import { highlightStyles } from '../shared/styles/highlightStyles.js';
import { captionTextStyles } from '../shared/styles/textStyles.js';
import { blogStore } from '../stores/blog.js';
import { COPY_TO_CLIPBOARD_STATE, ICONS, ROUTES } from '../utils/constants.js';

import '../components/go-to-link.js';
import '../shared/ui/loading-indicator.js';
import '../shared/ui/empty-placeholder.js';

const COPY_TO_CLIPBOARD_DELAY_MS = 2500;

export class BlogDetailPage extends LitElement {
  static properties = {
    slug: { type: String },
    _post: { type: Object, state: true },
    _copyToClipboard: { type: Object, state: true },
  };

  #md = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
  }).disable(['image']);

  constructor() {
    super();
    /** @type {string} */
    this.slug = '';
    /** @type {import('index.d.js').Post | null} */
    this._post = null;
    /** @type {import('index.d.js').CopyToClipboardState} */
    this._copyToClipboard = {
      status: 'idle',
      active: false,
      message: null,
    };

    // MD configurations
    this.#md.set({
      langPrefix: 'hljs language-',
      highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value;
            // eslint-disable-next-line no-unused-vars, no-empty
          } catch (_) {}
        }
        return '';
      },
    });

    const defaultRender =
      this.#md.renderer.rules.link_open ||
      ((tokens, idx, options, env, self) =>
        self.renderToken(tokens, idx, options));

    this.#md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      const token = tokens.at(idx);
      if (token) {
        token.attrSet('target', '_blank');
        token.attrSet('rel', 'noopener noreferrer');
      }
      return defaultRender(tokens, idx, options, env, self);
    };
  }

  #postTask = new Task(this, {
    task: async ([slug]) => {
      if (!slug) {
        return;
      }

      try {
        const data = await blogStore.getPost(slug);
        if (!data || typeof data?.content !== 'string') {
          throw new Error('Failed to load post. Please try again later.');
        }
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    args: () => [this.slug],
  });

  render() {
    return this.#postTask.render({
      pending: () => html`<loading-indicator></loading-indicator>`,
      complete: (post) => html`
        <article>
          <header>
            <h1 id="title">${post?.title || post?.slug}</h1>
            <div class="caption">
              ${post?.date
                ? html`
                    <time>${post.date}</time>
                    <span class="separator">|</span>
                  `
                : ''}

              <span>${post?.estimatedReadTime} min read</span>

              <span class="separator">|</span>

              <div class="share-container">
                <button class="share-btn" @click=${this.#share}>Share</button>
              </div>
              ${this._copyToClipboard.active
                ? html`<div
                    class=${classMap({
                      chip: true,
                      [this._copyToClipboard.status]:
                        this._copyToClipboard.status,
                    })}
                    role="alert"
                  >
                    ${ICONS.get(this._copyToClipboard.status)}
                    ${this._copyToClipboard.message}
                  </div>`
                : nothing}
            </div>
          </header>
          <hr />
          <section class="content">
            ${unsafeHTML(
              DOMPurify.sanitize(
                this.#md.render(/** @type {string} */ (post?.content)),
                {
                  ADD_ATTR: ['target', 'rel'],
                  FORBID_TAGS: ['style'],
                }
              )
            )}
          </section>
        </article>
        <go-to-link previous=${true}></go-to-link>
      `,
      error: (error) =>
        html`<empty-placeholder
            asCard=${true}
            text=${error}
          ></empty-placeholder>
          <go-to-link previous=${true}></go-to-link> `,
    });
  }

  /** @param {Event} event */
  async #share(event) {
    event.preventDefault();

    if (this._copyToClipboard.active) {
      return;
    }

    try {
      if (!blogStore.isPostValid(this.slug)) {
        throw Error;
      }

      const baseUrl = import.meta.env.VITE_APP_BASE_URL;
      const postUrl = new URL(`${baseUrl}${ROUTES.BLOG.PATH}/${this.slug}`);

      if (postUrl.protocol !== 'https:') {
        throw Error;
      }

      await navigator.clipboard.writeText(postUrl.href);

      this._copyToClipboard = {
        status: COPY_TO_CLIPBOARD_STATE.SUCCESS.STATUS,
        message: COPY_TO_CLIPBOARD_STATE.SUCCESS.MESSAGE,
        active: true,
      };
    } catch {
      console.error(COPY_TO_CLIPBOARD_STATE.ERROR.MESSAGE);
      this._copyToClipboard = {
        status: COPY_TO_CLIPBOARD_STATE.ERROR.STATUS,
        message: COPY_TO_CLIPBOARD_STATE.ERROR.MESSAGE,
        active: true,
      };
    } finally {
      setTimeout(() => {
        this._copyToClipboard = {
          status: COPY_TO_CLIPBOARD_STATE.IDLE.STATUS,
          message: COPY_TO_CLIPBOARD_STATE.IDLE.MESSAGE,
          active: false,
        };
      }, COPY_TO_CLIPBOARD_DELAY_MS);
    }
  }

  static styles = [
    captionTextStyles,
    animatedUnderlineStyles,
    highlightStyles,
    chipStyles,
    buttonStyles,
    css`
      :host {
        --link: #58a6ff;
      }

      header {
        margin-bottom: 0.65rem;
      }

      #title {
        margin: 0;
      }

      .separator {
        color: var(--light-gray);
        user-select: none;
      }

      .share-container {
        display: inline-flex;
        align-items: center;
      }

      .share-btn {
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        color: inherit;
        cursor: pointer;
        transition: opacity 0.2s ease-in-out;
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .share-btn:hover {
        opacity: 0.7;
      }

      .share-btn::after {
        content: '🔗';
        opacity: 0;
        transition: opacity 0.2s ease;
        font-size: 0.875rem;
      }

      .share-btn:hover::after {
        opacity: 1;
      }

      .chip {
        position: fixed;
        top: 1.25rem;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.875rem;
        font-weight: 500;
        z-index: 1000;
        animation: slideDown 0.3s ease-out;
      }

      .chip.success {
        color: var(--success);
      }

      .chip.error {
        color: var(--error);
      }

      @keyframes slideDown {
        from {
          transform: translate(-50%, -1.25rem);
          opacity: 0;
        }
        to {
          transform: translate(-50%, 0);
          opacity: 1;
        }
      }

      .content a {
        color: var(--link);
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s ease;
      }

      .content a:hover {
        border-bottom-color: var(--link);
      }

      .content a[target='_blank']::after {
        content: ' ↗';
        font-size: 0.8em;
        opacity: 0.6;
      }

      .content blockquote {
        width: 99%;
        border-left: 0.25em solid #444c56;
        background: #22272e;
        margin: 1.25rem 0;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        color: #768390;
      }

      .content blockquote p {
        margin-top: 0;
        margin-bottom: 0;
      }

      .content blockquote p + p {
        margin-top: 1rem;
      }

      .content ul,
      .content ol {
        padding-left: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .content li {
        margin-bottom: 0.5rem;
      }

      @media only screen and (max-width: 640px) {
        header {
          text-align: center;
        }

        .caption {
          font-size: 0.75rem;
        }
      }
    `,
  ];
}

customElements.define('blog-detail-page', BlogDetailPage);
