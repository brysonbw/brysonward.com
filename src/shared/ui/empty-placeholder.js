import { LitElement, css, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import { captionTextStyles } from '../styles/textStyles.js';

export class EmptyPlaceholder extends LitElement {
  static properties = {
    asCard: { type: String },
    text: { type: String },
  };

  constructor() {
    super();
    /** @type {boolean} */
    this.asCard = false;
    /** @type {string} */
    this.text = 'No data avaliable.';
  }

  render() {
    return html`
      <div
        part="container"
        class=${classMap({
          caption: true,
          'empty-placeholder-card': this.asCard,
        })}
      >
        ${this.text}
      </div>
    `;
  }

  static styles = [
    captionTextStyles,
    css`
      .empty-placeholder-card.caption {
        background-color: var(--card-background-color);
        border: 0.0625rem solid;
        border-color: var(--card-border-color);
        border-radius: 0.375rem;
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

      @media (min-width: 768px) {
        .empty-placeholder-card.caption {
          padding: 1rem 10rem;
        }
      }
    `,
  ];
}

customElements.define('empty-placeholder', EmptyPlaceholder);
