import axios from 'axios';

let apiClient;

const baseURL = 'https://www.googleapis.com/youtube/v3/search';

const handleRequestSent = (config) => {
  console.log(`sent to ${config.url}`);
  return config;
};

const handleRequestError = (error) => {
  console.log('request error');
  return Promise.reject(error);
};

const handleResponseSuccess = (result) => {
  console.log('response OK');
  return result;
};

const handleResponseError = (error) => {
  console.log('response error');
  return Promise.reject(error);
};

export const createApiClient = (config) => {
  if (!apiClient) {
    apiClient = axios.create({
      baseURL,
      ...config,
    });
    apiClient.interceptors.request.use(handleRequestSent, handleRequestError);
    apiClient.interceptors.response.use(
      handleResponseSuccess,
      handleResponseError
    );
  }
  return apiClient;
};
