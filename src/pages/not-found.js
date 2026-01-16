import { LitElement, css, html } from 'lit';

import { buttonTonalVariantStyles } from '../shared/styles/buttonStyles.js';
import { linkStyles } from '../shared/styles/linkStyles.js';
import { ROUTES } from '../utils/constants.js';

export class NotFoundPage extends LitElement {
  render() {
    return html`<div>
      <div class="title">
        <p>Page Not Found</p>
      </div>
      <div class="message">
        <p>Unfortunately, the requested resource could not be found.</p>
      </div>
      <a variant="tonal" href="${ROUTES.HOME.PATH}">Return Home</a>
    </div>`;
  }

  static styles = [
    linkStyles,
    buttonTonalVariantStyles,
    css`
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
      }

      .title {
        font-weight: 600;
        font-size: 1.875rem;
        line-height: 2.25rem;
      }

      .message {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--light-gray);
        margin-bottom: 1.25rem;
      }

      a {
        font-weight: 500;
      }
    `,
  ];
}

customElements.define('not-found-page', NotFoundPage);
