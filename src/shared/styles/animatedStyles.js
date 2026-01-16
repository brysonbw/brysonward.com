import { css } from 'lit';

const animatedUnderlineStyles = css`
  .animated-underline,
  .reverse-animated-underline {
    position: relative;
    color: var(--white);
    transition: color 0.3s;
    font-weight: 500;
    text-decoration: none;
  }

  .animated-underline::after,
  .reverse-animated-underline::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 0.125rem;
    background-color: var(--light-gray);
    transition:
      width 0.3s ease,
      left 0.3s ease;
  }

  .animated-underline:hover,
  .reverse-animated-underline:hover {
    color: var(--light-gray);
  }

  .animated-underline::after {
    left: 50%;
    width: 0;
  }

  .animated-underline:hover::after {
    left: 0;
    width: 100%;
  }

  .reverse-animated-underline::after {
    left: 0;
    width: 100%;
  }

  .reverse-animated-underline:hover::after {
    left: 50%;
    width: 0;
  }
`;

export { animatedUnderlineStyles };
