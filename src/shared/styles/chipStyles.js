import { css } from 'lit';

const chipStyles = css`
  .chip-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .chip {
    appearance: none;
    border: 0.0625rem solid rgba(110, 118, 129, 0.4);
    background-color: rgba(110, 118, 129, 0.15);
    color: var(--chip-color);
    padding: 0.25rem 0.625rem;
    border-radius: 62.4375rem;
    font-size: 0.75rem;
    line-height: 1.2;
    white-space: nowrap;
  }

  .chip:hover {
    background-color: rgba(110, 118, 129, 0.25);
    border-color: rgba(110, 118, 129, 0.6);
  }
`;

export { chipStyles };
