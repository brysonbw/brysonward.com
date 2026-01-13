import { css } from 'lit';

const buttonStyles = css`
  button {
    cursor: pointer;
  }
`;

const buttonTextVariantStyles = css`
  [variant='text'] {
    outline: none;
    border: none;
    background: transparent;
  }
`;

const buttonTonalVariantStyles = css`
  [variant='tonal'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3.125rem;
    min-width: 9.375rem;
    padding: 0 1.25rem;
    border-radius: 6.25rem;
    box-shadow:
      rgba(14, 14, 14, 0.03) 0 0.0625rem 0.15625rem 0,
      rgba(14, 14, 14, 0.05) 0 0.25rem 0.5625rem 0.0625rem;
    color: black;
    background-color: white;
    border: none;
    cursor: pointer;
    transition:
      background-color 0.3s,
      transform 0.3s;
  }

  [variant='tonal']:hover {
    background-color: var(--light-gray);
  }
`;

export { buttonStyles, buttonTextVariantStyles, buttonTonalVariantStyles };
