export const APP_NAME = 'React TypeScript App';
export const APP_VERSION = '1.0.0';

export const API_ENDPOINTS = {
  USERS: '/api/users',
  PRODUCTS: '/api/products',
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '*',
} as const;
