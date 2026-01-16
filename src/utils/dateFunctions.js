/** @returns {string} */
function currentYear() {
  const date = new Date();
  return date.getFullYear().toString();
}

/**
 * @example 2025-01-04 -> January 4, 2025
 * @param {string} date
 * @returns {string}
 */
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export { currentYear, formatDate };
