import { LitElement, css, html, nothing } from 'lit';

import {
  linkAnimatedUnderlineStyles,
  linkStyles,
} from '../shared/styles/linkStyles.js';
import { tabStyles } from '../shared/styles/tabStyles.js';
import {
  captionTextStyles,
  h1TextStyles,
} from '../shared/styles/textStyles.js';
import { projectStore } from '../stores/project.js';

import '../components/back-to-home-link.js';

/** @typedef {"Open Source" | "Commercial"} ProjectType */

/** @type {readonly ProjectType[]} */
const TABS = Object.freeze(['Open Source', 'Commercial']);
const PROJECTS = projectStore.projects;

export class WorkPage extends LitElement {
  static properties = {
    _activeTab: { type: String, state: true },
  };

  constructor() {
    super();
    /** @type {ProjectType} */
    this._activeTab = 'Open Source';
  }

  get #activeProjects() {
    return this._activeTab === 'Open Source'
      ? PROJECTS.openSource
      : PROJECTS.commercial;
  }

  render() {
    return html`
      <div>
        <h1>Work</h1>
        <ul class="tabs">
          ${TABS.map(
            (tab) => html`
              <li>
                <button
                  class="tab-item"
                  data-project-type=${tab}
                  data-tab-active=${this._activeTab === tab}
                  @click=${this.#changeTab}
                >
                  ${tab}
                </button>
              </li>
            `
          )}
        </ul>

        <ul class="repo-list">
          ${this.#activeProjects.length > 0
            ? this.#activeProjects.map(
                (repo) => html`
                  <li class="repo-card">
                    <div class="repo-header">
                      <div class="repo-title-wrapper">
                        <img
                          class="icon-repo"
                          src="${repo.avatar_url}"
                          alt="Repository Owner Avatar"
                        />
                        <a
                          href="${repo.homepage_url}"
                          target="_blank"
                          class="repo-link"
                        >
                          ${repo.name}
                        </a>
                      </div>
                      <span class="repo-badge"
                        >${repo.private ? 'Private' : 'Public'}</span
                      >
                    </div>

                    <p class="repo-description">${repo.description}</p>

                    <div class="repo-footer">
                      ${repo.technologies?.map(
                        (tech) => html`
                          <button class="chip" type="button">${tech}</button>
                        `
                      )}
                    </div>
                  </li>
                `
              )
            : html`<li class="caption repo-card">
                No ${this._activeTab} projects to display.
              </li>`}
        </ul>
        ${this._activeTab === 'Open Source'
          ? html`<div id="moreProjects">
              <a
                class="animated-underline"
                target="_blank"
                href="https://github.com/search?l=&amp;o=desc&amp;q=user%3Abrysonbw&amp;s=updated&amp;type=Repositories"
                >View more projects</a
              >
            </div> `
          : nothing}
        <back-to-home-link></back-to-home-link>
      </div>
    `;
  }

  /** @param {Event} event */
  #changeTab(event) {
    event.preventDefault();
    const { target } = event;

    if (target instanceof HTMLButtonElement) {
      const projectType = /** @type {ProjectType} */ (
        target.dataset.projectType
      );
      this._activeTab = projectType;
    }
  }

  static styles = [
    linkStyles,
    linkAnimatedUnderlineStyles,
    captionTextStyles,
    tabStyles,
    h1TextStyles,
    css`
      .repo-list {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(
          auto-fill,
          minmax(min(100%, 18.75rem), 1fr)
        );
        gap: 1rem;
      }

      .repo-card {
        background-color: #0d1117;
        border: 0.0625rem solid #30363d;
        border-radius: 0.375rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
      }

      .repo-card.caption {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 2rem 10%;
        box-sizing: border-box;
        width: 100%;
        color: var(--light-gray);
      }

      .repo-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }

      .repo-title-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .repo-link {
        color: #58a6ff;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.875rem;
      }

      .repo-link:hover {
        text-decoration: underline;
      }

      .icon-repo {
        width: 1.5625rem;
        height: 1.5625rem;
        border-radius: 50%;
        object-fit: cover;
        display: inline-block;
      }

      .repo-badge {
        color: #8b949e;
        border: 0.0625rem solid #30363d;
        border-radius: 1.25rem;
        padding: 0 0.4375rem;
        font-size: 0.75rem;
        font-weight: 500;
      }

      .repo-description {
        color: var(--light-gray);
        font-size: 0.875rem;
        margin: 0 0 1rem 0;
        flex-grow: 1;
        line-height: 1.5;
      }

      .repo-footer {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .chip {
        appearance: none;
        border: 0.0625rem solid rgba(110, 118, 129, 0.4);
        background-color: rgba(110, 118, 129, 0.15);
        color: #c9d1d9;
        padding: 0.25rem 0.625rem;
        border-radius: 62.4375rem;
        font-size: 0.75rem;
        line-height: 1.2;
        white-space: nowrap;
      }

      .chip:hover {
        background-color: rgba(110, 118, 129, 0.25);
        border-color: rgba(110, 118, 129, 0.6);
      }

      #moreProjects {
        text-align: center;
        padding-top: 2rem;
        font-size: 1.125rem;
      }

      @media (min-width: 768px) {
        .repo-card.caption {
          padding: 1rem 10rem;
        }
      }
    `,
  ];
}

customElements.define('work-page', WorkPage);
