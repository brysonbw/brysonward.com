/**
 *  @param {unknown} input
 *  @returns {string}
 */
function toSentenceCase(input) {
  const strClean =
    typeof input === 'string' && input.length > 0 ? input.trim() : null;
  if (!strClean) {
    return '';
  }

  const withSpaces = strClean.replace(/([A-Z])/g, ' $1');

  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase();
}

/**
 * @param {unknown} input
 * @returns {string}
 */
function toTitleCase(input) {
  const strClean =
    typeof input === 'string' && input.length > 0 ? input.trim() : null;
  if (!strClean) {
    return '';
  }

  const withSpaces = strClean.replace(/([A-Z])/g, ' $1');

  return withSpaces
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export { toTitleCase, toSentenceCase };
