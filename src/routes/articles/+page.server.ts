const VITE_API_URL = import.meta.env.VITE_API_URL;

export const load = async ({ fetch }) => {
  const response = await fetch(`${VITE_API_URL}/articles?page=1&pageSize=10`);
  const articles = await response.json();
  return {
    articles: articles.list
  }
}