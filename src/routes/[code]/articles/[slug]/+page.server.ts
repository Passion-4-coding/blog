const VITE_API_URL = import.meta.env.VITE_API_URL;

export const load = async ({ params, fetch }) => {
  const { code, slug } = params;
  const response = await fetch(`${VITE_API_URL}/articles?language=${code}&slug=${slug}`);
  const articles = await response.json();
  return {
    article: articles.list[0]
  }
}