export const ROUTES = {
  HOME: '/',
  ARCHIVE: '/archive',
  RESULTS: '/results',
  POST: '/post',
} as const;

export type RoutePaths = (typeof ROUTES)[keyof typeof ROUTES];
