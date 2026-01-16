import { LitElement, css, html } from 'lit';

import { animatedUnderlineStyles } from '../shared/styles/animatedStyles.js';
import {
  buttonStyles,
  buttonTextVariantStyles,
} from '../shared/styles/buttonStyles.js';
import { ROUTES } from '../utils/constants.js';

const HAS_HISTORY = window.history.length > 1;

export class GoToLink extends LitElement {
  static properties = {
    previous: { type: Boolean },
  };

  constructor() {
    super();
    /** @type {boolean} */
    this.previous = false;
  }

  get #goToButtonText() {
    return this.previous && HAS_HISTORY ? 'Go back' : 'Back to Home';
  }

  render() {
    return html`<div class="container">
      <button
        variant="text"
        class="animated-underline"
        @click=${this.#goTo}
        type="button"
      >
        ← ${this.#goToButtonText}
      </button>
    </div>`;
  }

  /** @param {Event} event */
  #goTo(event) {
    event.preventDefault();

    if (this.previous && HAS_HISTORY) {
      window.history.back();
    } else {
      window.location.assign(ROUTES.HOME.PATH);
    }
  }

  static styles = [
    buttonStyles,
    buttonTextVariantStyles,
    animatedUnderlineStyles,
    css`
      .container {
        margin: 3rem 0 0;
      }

      button {
        font-size: var(--default-font-size);
      }
    `,
  ];
}

customElements.define('go-to-link', GoToLink);
