import { LitElement, css, html } from 'lit';

/** Base/UI Card */
export class UICard extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
  };

  constructor() {
    super();
    /** @type {import('index.d.js').Theme} */
    this.variant = 'dark';
  }

  render() {
    return html`<li class="card">
      <div class="card-header">
        <slot name="header"></slot>
        <slot name="actions"></slot>
      </div>

      <div class="card-content">
        <slot name="content"></slot>
      </div>

      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    </li>`;
  }

  static styles = css`
    :host {
      display: block;
      list-style: none;
    }

    .card {
      border: 0.0625rem solid;
      border-color: var(--card-border-color);
      background-color: var(--card-background-color);
      border-radius: 0.375rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      box-sizing: border-box;
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      gap: 0.5rem;
    }

    ::slotted([slot='header']) {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-grow: 1;
    }

    .card-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .card-footer {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: auto;
    }

    :host([variant='light']) {
      background-color: var(--white);
      border-color: var(--gray);
    }

    :host([variant='light']) .card {
      color: var(--background-color);
    }

    .card:hover {
      border-color: #333333;
    }

    :host([variant='light']) .card:hover {
      border-color: #666666;
    }
  `;
}

customElements.define('ui-card', UICard);
