import { css } from 'lit';

const cardGridStyles = css`
  .card-grid {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 18.75rem), 1fr));
    gap: 1rem;
  }
`;

export { cardGridStyles };
