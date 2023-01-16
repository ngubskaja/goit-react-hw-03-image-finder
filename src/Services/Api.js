import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";
 const params = {
  key: '31322734-692d0c8f8a819df0edc128403',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
  isImageModalOpen: false,
};

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`/?q=${query}&page=${page}`, { params });
  return data;
};