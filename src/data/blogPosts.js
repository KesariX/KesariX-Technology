/**
 * INSTRUCTIONS FOR ADDING NEW BLOG POSTS:
 * 
 * 1. Open this file: `src/data/blogPosts.js`
 * 2. Add a new post object to the `BLOG_POSTS` array below.
 * 3. Each blog post object must contain the following fields:
 *    - id (Number): A unique sequential identifier.
 *    - slug (String): A URL-friendly version of the title. E.g., 'my-awesome-post'
 *    - title (String): The main headline of the article.
 *    - excerpt (String): A short 1-2 sentence preview text for the blog grid card.
 *    - category (String): Must match one of the values in the CATEGORIES array below.
 *    - date (String): Human-readable publish date, e.g. "Jul 10, 2026".
 *    - author (String): Name of the writer, e.g. "Sarthak Singh".
 *    - readTime (String): E.g., "5 min".
 *    - image (String): Absolute or relative image URL (e.g. Unsplash URL).
 *    - content (String): The full text of the article. Use double newlines ("\n\n") to separate paragraphs.
 * 
 * Example of a single blog post item:
 * 
 *   {
 *     id: 1,
 *     slug: 'the-rise-of-agentic-systems',
 *     title: 'The Rise of Agentic Systems in Enterprise Workflows',
 *     excerpt: 'How autonomous agents are transforming data entry, customer operations, and engineering efficiency.',
 *     category: 'AI Engineering',
 *     date: 'Jul 10, 2026',
 *     author: 'Ronak Parmar',
 *     readTime: '6 min',
 *     image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
 *     content: 'First paragraph of your blog goes here...\n\nSecond paragraph of your blog goes here...'
 *   }
 */

export const BLOG_POSTS = [];

export const CATEGORIES = ['All', 'Strategy', 'Web Dev', 'AI Engineering', 'Infrastructure', 'Cybersecurity'];
