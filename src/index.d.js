/** @typedef {{status: "idle" | "success" | "error", active: boolean, message: string | null}}  CopyToClipboardState */

/** @typedef {"light" | "dark"} Theme */

/** @typedef {"Open Source" | "Commercial"} ProjectType */

/**
 * @typedef {object} Post
 * @property {string} title
 * @property {string} date
 * @property {string[]} tags
 * @property {string} [thumbnail]
 * @property {string} [description]
 * @property {string | (() => Promise<string>)} content
 * @property {string} slug
 * @property {number} estimatedReadTime
 */

/**
 * @typedef {object} Project
 * @property {string} name
 * @property {string} homepage_url
 * @property {string} repo_url
 * @property {string} description
 * @property {string} avatar_url
 * @property {string[]} technologies
 * @property {boolean} isPrivate
 */

/**
 * @typedef {object} Projects
 * @property {readonly Project[]} openSource
 * @property {readonly Project[]} commercial
 */

export {};
