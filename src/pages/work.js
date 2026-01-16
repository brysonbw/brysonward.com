import { LitElement, css, html, nothing } from 'lit';

import { animatedUnderlineStyles } from '../shared/styles/animatedStyles.js';
import { cardGridStyles } from '../shared/styles/containerGridStyles.js';
import { tabStyles } from '../shared/styles/tabStyles.js';
import {
  captionTextStyles,
  h1TextStyles,
} from '../shared/styles/textStyles.js';
import { projectStore } from '../stores/project.js';

import '../components/go-to-link.js';
import '../components/project-card.js';
import '../shared/ui/empty-placeholder.js';

/** @type {readonly import('index.d.js').ProjectType[]} */
const TABS = Object.freeze(['Open Source', 'Commercial']);
const PROJECTS = projectStore.projects;

export class WorkPage extends LitElement {
  static properties = {
    _activeTab: { type: String, state: true },
  };

  constructor() {
    super();
    /** @type {import('index.d.js').ProjectType} */
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
        <ul class="card-grid">
          ${this.#activeProjects.length > 0
            ? this.#activeProjects.map(
                (project) => html`
                  <project-card .data=${project}></project-card>
                `
              )
            : html`<empty-placeholder
                asCard=${true}
                text=${`No ${this._activeTab.toLowerCase()} projects to display.`}
              ></empty-placeholder>`}
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
        <go-to-link></go-to-link>
      </div>
    `;
  }

  /** @param {Event} event */
  #changeTab(event) {
    event.preventDefault();
    const { target } = event;

    if (target instanceof HTMLButtonElement) {
      const projectType = /** @type {import('index.d.js').ProjectType} */ (
        target.dataset.projectType
      );
      this._activeTab = projectType;
    }
  }

  static styles = [
    animatedUnderlineStyles,
    captionTextStyles,
    tabStyles,
    h1TextStyles,
    cardGridStyles,
    css`
      #moreProjects {
        text-align: center;
        padding-top: 2rem;
        font-size: var(--default-font-size);
      }
    `,
  ];
}

customElements.define('work-page', WorkPage);
