import api from './api';

export const experiencesAPI = {
  list: () => api.get('/experiences/'),
  create: (payload) => api.post('/experiences/', payload),
  update: (id, payload) => api.put(`/experiences/${id}/`, payload),
  remove: (id) => api.delete(`/experiences/${id}/`),
};
