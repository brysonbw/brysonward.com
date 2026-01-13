import { LitElement, css, html } from 'lit';

import {
  linkAnimatedUnderlineStyles,
  linkStyles,
} from '../shared/styles/linkStyles.js';

export class BackToHomeLink extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<div class="container">
      <a class="animated-underline" href="/">← Back to Home</a>
    </div>`;
  }

  static styles = [
    linkStyles,
    linkAnimatedUnderlineStyles,
    css`
      .container {
        margin: 3rem 0 0;
      }
    `,
  ];
}

customElements.define('back-to-home-link', BackToHomeLink);
