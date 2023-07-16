const VITE_API_URL = import.meta.env.VITE_API_URL;

export const load = async ({ params, fetch }) => {
  const { code } = params;
  const response = await fetch(`${VITE_API_URL}/articles?language=${code}`);
  const articles = await response.json();
  return {
    articles: articles.list
  }
}