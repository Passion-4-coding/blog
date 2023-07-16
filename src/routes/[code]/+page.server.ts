const VITE_API_URL = import.meta.env.VITE_API_URL;
import * as Sentry from '@sentry/sveltekit';

export const load = async ({ params, fetch }) => {
  const transaction = Sentry.startTransaction({
    name: 'Debug blog issue'
  });

  Sentry.configureScope((scope) => {
    scope.setSpan(transaction);
  });

  try {
    const { code } = params;
    const response = await fetch(`${VITE_API_URL}/articles?language=${code}`);
    const articles = await response.json();
    return {
      articles: articles.list
    }
  } finally {
    transaction.finish();
  }
}