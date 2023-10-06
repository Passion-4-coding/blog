const VITE_API_URL = import.meta.env.VITE_API_URL;

export const load = async ({ fetch, params }) => {
  const response = await fetch(`${VITE_API_URL}/article-slug/${params.slug}`);
  const article = await response.json();
  return {
    article
  }
}