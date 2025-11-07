import api from './api';

export const authAPI = {
  register: (payload) => api.post('/auth/register/', payload),
  login: (payload) => api.post('/auth/login/', payload),
  fetchCurrentUser: () => api.get('/auth/user/'),
};
