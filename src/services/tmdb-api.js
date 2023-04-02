import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '909c04d45dd4c126cd2df97943bce308';

export default async function getImgs(inputData, page) {
  try {
    const config = {
      method: 'GET',
      url: BASE_URL,
      params: {
        key: API_KEY,
        q: inputData,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: 12,
      },
    };
    const response = await axios(config);
    // console.log(response.data);
    // console.log(response.data.totalHits);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
