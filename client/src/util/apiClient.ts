import axios from 'axios';

// TODO: Incorporate env URLs with env files
const BASE_URL = 'http://localhost:3005';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define common API methods
const _get = (url: string, config = {}) => {
  return apiClient.get(url, config);
};

const _delete = (url: string, config = {}) => {
  return apiClient.delete(url, config);
};

const _put = (url: string, data = {}, config = {}) => {
  return apiClient.put(url, data, config);
};

const _post = (url: string, data = {}, config = {}) => {
  return apiClient.post(url, data, config);
};

// Export API methods
export { _get, _delete, _put, _post };
