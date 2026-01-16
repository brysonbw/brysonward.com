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

/**
 * Format time ago from a given date - `Today`, `Day(s)`, `Month(s)`, and `Year(s)`
 * @param {string | Date} date
 * @returns {string}
 */
function formatTimeAgo(date) {
  const past = new Date(date);
  const now = new Date();

  past.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  const diffMs = now.getTime() - past.getTime();

  // Today
  if (diffMs === 0) {
    return 'today';
  }

  let years = now.getFullYear() - past.getFullYear();
  let months = now.getMonth() - past.getMonth();

  // Adjust for incomplete months/years
  if (now.getDate() < past.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Year(s)
  if (years >= 1) {
    return `${years} year${years === 1 ? '' : 's'} ago`;
  }

  // Month(s)
  if (months >= 1) {
    return `${months} month${months === 1 ? '' : 's'} ago`;
  }

  // Fallback - Day(s)
  const days = Math.floor(diffMs / 86400000); // ms in a day
  return `${days} day${days === 1 ? '' : 's'} ago`;
}

export { currentYear, formatDate, formatTimeAgo };
