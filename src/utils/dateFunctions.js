/** @returns {string} */
function currentYear() {
  const date = new Date();
  return date.getFullYear().toString();
}

export { currentYear };
