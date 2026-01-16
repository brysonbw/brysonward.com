import { css } from 'lit';

const cardGridStyles = css`
  .card-grid {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
    gap: 1rem;
  }
`;

export { cardGridStyles };
