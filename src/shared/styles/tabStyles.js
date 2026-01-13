import { css } from 'lit';

const tabStyles = css`
  .tabs {
    display: flex;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    list-style: none;
    padding: 0;
    margin: 0;
    border-bottom: 0.0625rem solid #2c2c35;
  }

  .tabs li {
    flex: 1 1 0;
    display: flex;
    border-right: 0.0625rem solid #2c2c35;
  }

  .tabs li:last-child {
    border-right: none;
  }

  .tabs button.tab-item {
    width: 100%;
    height: 100%;
    padding: 0.75rem 1rem;
    cursor: pointer;
    border: none;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    background-color: transparent;
    color: #c0c0c8;
    transition:
      background-color 0.2s,
      color 0.2s;
    border-radius: 0;
    font-weight: bold;
  }

  .tabs button.tab-item[data-tab-active='true'] {
    font-weight: 500;
    background-color: #3b3b48;
    color: #ffffff;
    border-top-left-radius: 0.25rem;
  }

  .tabs li:last-child button.tab-item[data-tab-active='true'] {
    border-top-left-radius: 0;
    border-top-right-radius: 0.25rem;
  }

  .tabs button.tab-item:hover {
    background-color: #353540;
  }
`;

export { tabStyles };
