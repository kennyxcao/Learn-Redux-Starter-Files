import Raven from 'raven-js';

const sentry_key = '4a98d038a35f459c8910f511b9bd4406';
const sentry_app = '1162565';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
