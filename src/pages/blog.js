import { LitElement, html } from 'lit';

import { animatedUnderlineStyles } from '../shared/styles/animatedStyles.js';
import { cardGridStyles } from '../shared/styles/containerGridStyles.js';
import { h1TextStyles } from '../shared/styles/textStyles.js';
import { blogStore } from '../stores/blog.js';

import '../components/go-to-link.js';
import '../components/blog-card.js';
import '../shared/ui/empty-placeholder.js';

const POSTS = blogStore.getPreviewList();

export class BlogPage extends LitElement {
  render() {
    return html`
      <div>
        <h1>Blog</h1>
        <ul class="card-grid">
          ${POSTS.length > 0
            ? POSTS.map((post) => html` <blog-card .data=${post}></blog-card> `)
            : html`<empty-placeholder
                asCard=${true}
                text=${`No blog posts to display.`}
              ></empty-placeholder>`}
        </ul>
        <go-to-link></go-to-link>
      </div>
    `;
  }

  static styles = [animatedUnderlineStyles, h1TextStyles, cardGridStyles];
}

customElements.define('blog-page', BlogPage);
