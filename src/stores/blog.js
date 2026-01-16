import { formatDate } from '../utils/dateFunctions.js';

const WORDS_PER_MINUTE = 250;

class BlogStore {
  /** @type {Map<string, import('../index.d.js').Post>} */
  #cache = new Map();
  /** @type {Map<string, import('../index.d.js').Post>} */
  #posts = Object.freeze(
    new Map([
      [
        'welcome-to-my-blog',
        {
          title: 'Welcome To My Blog',
          description:
            'Welcome to my blog! Here I share thoughts on life, technology, and more, aiming to inspire you to dream, create, and build.',
          date: '2024-02-03',
          tags: ['introduction', 'blogging', 'personal'],
          slug: 'welcome-to-my-blog',
          content: () =>
            import('../content/blog/welcome-to-my-blog.md?raw').then(
              (module) => module.default
            ),
          estimatedReadTime: 0,
        },
      ],
      [
        'podcast-reccomendations',
        {
          title: 'Podcast Recommendations',
          description:
            'A curated list of podcasts that I enjoy and recommend for learning and entertainment.',
          date: '2025-01-04',
          tags: ['podcasts', 'recommendations', 'learning'],
          slug: 'podcast-recommendations',
          content: () =>
            import('../content/blog/podcast-reccomendations.md?raw').then(
              (module) => module.default
            ),
          estimatedReadTime: 0,
        },
      ],
    ])
  );

  /** @returns {Partial<import('../index.d.js').Post>[]} */
  getPreviewList() {
    return [...this.#posts]
      .map(([slug, data]) => ({
        slug,
        date: data.date,
        title: data.title,
        description: data.description,
        tags: data.tags,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  /**
   * @param {string} slug
   * @returns {Promise<import('../index.d.js').Post | undefined>}
   */
  async getPost(slug) {
    if (this.#cache.has(slug)) {
      return this.#cache.get(slug);
    }

    const post = this.#posts.get(slug);
    if (!post) {
      throw Error;
    }

    await new Promise((resolve) => setTimeout(resolve, 200));

    /** @type {string} */
    const content =
      typeof post.content === 'function' ? await post.content() : post.content;

    const data = {
      ...post,
      date: formatDate(post.date),
      content,
      estimatedReadTime: this.#calculatePostReadTime(content),
    };

    this.#cache.set(slug, data);

    return data;
  }

  /**
   * @param {string} slug
   * @returns {boolean}
   */
  isPostValid(slug) {
    return this.#posts.has(slug);
  }

  /**
   * @param {string} content
   * @returns {number}
   */
  #calculatePostReadTime(content) {
    if (!content) return 0;

    const cleanText = content
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links but keep text
      .replace(/[#*`_~|]/g, '') // Remove formatting & table pipes
      .trim();

    const words = cleanText.split(/\s+/).filter((word) => word.length > 0);
    const wordCount = words.length;

    return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  }
}

export const blogStore = new BlogStore();
