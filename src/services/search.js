import { createApiClient } from './apiClient';

let apiClient = createApiClient();

const searchApiParams = {
  part: 'snippet',
  key: 'YOUR_API_KEY',
  maxResults: '30',
  type: 'video',
  q: null,
};

export const getSearch = async (queryString) => {
  const response = await apiClient.get('', {
    params: {
      ...searchApiParams,
      q: queryString,
    },
  });
  return response.data;
};
