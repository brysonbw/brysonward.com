import { LitElement, css, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import blueSky from '../assets/images/blue-sky.png';
import discord from '../assets/images/discord.png';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';

const SOCIAL_LINKS = Object.freeze([
  {
    name: 'Discord',
    url: 'https://discordapp.com/users/805262289119739924',
    icon: discord,
  },
  {
    name: 'Blue Sky',
    url: 'https://bsky.app/profile/brysonbw.bsky.social',
    icon: blueSky,
    classes: { 'rounded-full': true },
  },
  {
    name: 'GitHub',
    url: 'https://github.com/brysonbw',
    icon: github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bryson-ward-b54085118/',
    icon: linkedin,
  },
]);

export class SocialLinks extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<div class="container">
      <div class="social-icons">
        ${SOCIAL_LINKS.map(
          (link) =>
            html`<a href="${link.url}" target="_blank" aria-label="${link.name}"
              ><img
                src="${link.icon}"
                alt="${link.name}"
                class=${classMap(link.classes ?? {})}
            /></a>`
        )}
      </div>
    </div> `;
  }

  static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1.25rem 0;
    }

    .social-icons {
      display: flex;
      gap: 1rem;
    }

    .social-icons a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease-in-out;
    }

    .social-icons a:hover {
      transform: translateY(-2px) scale(1.1);
    }

    .social-icons img {
      height: 1.25rem;
      width: 1.25rem;
    }

    .social-icons img.rounded-full {
      border-radius: 50%;
    }

    .social-icons a[aria-label='Discord'] img {
      padding-top: 0.3rem;
    }

    .social-icons a[aria-label='GitHub'] img {
      filter: invert(1);
    }
  `;
}

customElements.define('social-links', SocialLinks);
