import { LitElement, css, html } from 'lit';

import { linkStyles } from '../shared/styles/linkStyles.js';
import { ROUTES } from '../utils/constants.js';
import { currentYear } from '../utils/dateFunctions.js';

export class Footer extends LitElement {
  render() {
    return html`<footer>
      <div class="footer-container">
        <div class="footer-text">
          <p>©${currentYear()}</p>
          •
          <p>
            <a href="${ROUTES.HOME.PATH}">${import.meta.env.VITE_APP_NAME}</a>
          </p>
        </div>
      </div>
    </footer>`;
  }

  static styles = [
    linkStyles,
    css`
      .footer-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 10vh;
        flex-wrap: wrap;
      }

      .footer-text {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        color: #acacac;
        font-size: 1rem;
      }

      a {
        color: var(--light-gray);
      }

      a:hover {
        text-decoration: underline;
      }

      @media only screen and (max-width: 640px) {
        .footer-text {
          font-size: 0.7rem;
        }
      }
    `,
  ];
}

customElements.define('app-footer', Footer);
