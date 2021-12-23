export const ROUTES = {
  main: '/',
  login: '/login',
  dynamic: {
    viewPhone: (id = ':id') => `/${id}`,
  },
};
