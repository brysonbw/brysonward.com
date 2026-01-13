import { css } from 'lit';

const linkStyles = css`
  a {
    text-decoration: none;
  }
`;

const linkAnimatedUnderlineStyles = css`
  a.animated-underline,
  a.reverse-animated-underline {
    position: relative;
    color: var(--white);
    transition: color 0.3s;
    font-weight: 500;
    text-decoration: none;
  }

  a.animated-underline::after,
  a.reverse-animated-underline::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 0.125rem;
    background-color: var(--light-gray);
    transition:
      width 0.3s ease,
      left 0.3s ease;
  }

  a.animated-underline:hover,
  a.reverse-animated-underline:hover {
    color: var(--light-gray);
  }

  a.animated-underline::after {
    left: 50%;
    width: 0;
  }
  a.animated-underline:hover::after {
    left: 0;
    width: 100%;
  }

  a.reverse-animated-underline::after {
    left: 0;
    width: 100%;
  }
  a.reverse-animated-underline:hover::after {
    left: 50%;
    width: 0;
  }
`;

export { linkStyles, linkAnimatedUnderlineStyles };
