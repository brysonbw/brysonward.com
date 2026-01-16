import { LitElement, css, html } from 'lit';

export class LoadingIndicator extends LitElement {
  static properties = {
    size: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.size = 'default';
  }

  render() {
    return html`<div class="spinner-container">
      <div class="spinner"></div>
      <slot name="text">Loading...</slot>
    </div>`;
  }

  static styles = css`
    :host {
      display: inline-block;
      --spinner-color: var(--white);
    }

    .spinner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      height: 100%;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(255, 255, 255, 0.2);
      border-top-color: var(--spinner-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .spinner-text {
      font-size: 14px;
      color: var(--spinner-color, #007bff);
      text-align: center;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    :host([size='small']) .spinner {
      width: 24px;
      height: 24px;
      border-width: 3px;
    }
  `;
}

customElements.define('loading-indicator', LoadingIndicator);
