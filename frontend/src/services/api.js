import axios from 'axios';

// Use environment variable for production, fallback to localhost for development
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const matchaSpotAPI = {
  // Get all matcha spots
  getAll: (params = {}) => api.get('/spots/', { params }),

  // Get a single matcha spot by ID
  getById: (id) => api.get(`/spots/${id}/`),

  // Get featured spots
  getFeatured: () => api.get('/spots/featured/'),

  // Get top-rated spots
  getTopRated: () => api.get('/spots/top_rated/'),

  // Create a new matcha spot
  create: (data) => api.post('/spots/', data),

  // Update a matcha spot
  update: (id, data) => api.put(`/spots/${id}/`, data),

  // Delete a matcha spot
  delete: (id) => api.delete(`/spots/${id}/`),
};

export default api;

