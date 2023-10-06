import * as Sentry from '@sentry/sveltekit';

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const load = async ({ fetch }) => {
  const transaction = Sentry.startTransaction({
    name: 'Debug blog issue'
  });

  Sentry.configureScope((scope) => {
    scope.setSpan(transaction);
  });

  try {
    const response = await fetch(`${VITE_API_URL}/articles?page=1&pageSize=3`);
    const articles = await response.json();
    return {
      articles: articles.list
    }
  } finally {
    transaction.finish();
  }
}