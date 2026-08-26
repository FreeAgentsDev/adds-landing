/**
 * Base URL of the FreeAgents Local clients app (catalog + portal).
 * Apex freeagentsdev.com stays on this landing; the client system lives on the subdomain.
 */
const PRODUCTION_CLIENTS_APP_URL = 'https://local.freeagentsdev.com';

const base = (
  import.meta.env.PUBLIC_CLIENTS_APP_URL ??
  (import.meta.env.PROD ? PRODUCTION_CLIENTS_APP_URL : 'http://localhost:3000')
).replace(/\/$/, '');

export function clientsAppUrl(path = ''): string {
  return `${base}${path}`;
}
