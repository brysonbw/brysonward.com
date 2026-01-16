import { LitElement, css, html, nothing } from 'lit';

import github from '../assets/images/github.png';
import { chipStyles } from '../shared/styles/chipStyles.js';

import '../shared/ui/card.js';
import '../shared/ui/empty-placeholder.js';

export class ProjectCard extends LitElement {
  static properties = {
    data: { type: Object },
  };

  constructor() {
    super();
    /** @type {import("index.d.js").Project | null} */
    this.data = null;
  }

  render() {
    if (!this.data) {
      return html`<empty-placeholder asCard=${true}></empty-placeholder>`;
    }

    const {
      avatar_url,
      repo_url,
      homepage_url,
      name,
      isPrivate,
      description,
      technologies,
    } = this.data;
    return html`<ui-card>
      <div slot="header">
        ${avatar_url ? html`<img src="${avatar_url}" class="avatar" />` : ''}
        <a href="${homepage_url}" target="_blank" class="link">${name}</a>
      </div>

      <div slot="actions" class="actions">
        ${isPrivate
          ? nothing
          : html`<a href="${repo_url}" target="_blank" aria-label="GitHub"
              ><img src="${github}" alt="GitHub"
            /></a>`}
      </div>

      <p slot="content" class="description">${description}</p>

      <div slot="footer">
        <div class="chip-container">
          ${technologies?.map(
            (item) => html`<span class="chip">${item}</span>`
          )}
        </div>
      </div>
    </ui-card>`;
  }

  static styles = [
    chipStyles,
    css`
      :host {
        --link: #58a6ff;
        --badge: #8b949e;
        --border: #30363d;
      }

      .link {
        color: var(--link);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.875rem;
      }

      .link:hover {
        text-decoration: underline;
      }

      .avatar {
        width: 1.5625rem;
        height: 1.5625rem;
        border-radius: 50%;
        object-fit: cover;
        display: inline-block;
      }

      .description {
        color: var(--light-gray);
        font-size: 0.875rem;
        margin: 0 0 1rem 0;
        flex-grow: 1;
        line-height: 1.5;
      }

      a[aria-label='GitHub'] img {
        filter: brightness(7.5) contrast(0.75) saturate(0.6);
        height: 1.25rem;
        width: 1.25rem;
      }

      a[aria-label='GitHub'] {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease-in-out;
      }

      a[aria-label='GitHub']:hover {
        transform: translateY(-2px) scale(1.1);
        filter: brightness(1.5);
      }
    `,
  ];
}

customElements.define('project-card', ProjectCard);
