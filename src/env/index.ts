export const PRODUCTION = import.meta.env.PROD;

export const APP_NAME = 'My App';
export const API_DOMAIN = PRODUCTION ? 'https://api.domain.com' : 'https://localhost:5000';
