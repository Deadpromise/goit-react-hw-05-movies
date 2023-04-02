import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '909c04d45dd4c126cd2df97943bce308';

export async function getTrendingMovie() {
  const endpoint = '/trending/movie/day';
  try {
    const config = {
      method: 'GET',
      url: BASE_URL + endpoint,
      params: {
        api_key: API_KEY,
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

export async function getMovieById(id) {
  const endpoint = `/movie/${id}`;
  try {
    const config = {
      method: 'GET',
      url: BASE_URL + endpoint,
      params: {
        api_key: API_KEY,
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

export async function getMovieCredits(id) {
  const endpoint = `/movie/${id}/credits`;
  try {
    const config = {
      method: 'GET',
      url: BASE_URL + endpoint,
      params: {
        api_key: API_KEY,
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

export async function getMovieReviews(id) {
  const endpoint = `/movie/${id}/reviews`;
  try {
    const config = {
      method: 'GET',
      url: BASE_URL + endpoint,
      params: {
        api_key: API_KEY,
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

export async function getMovieByQuery(query) {
  const endpoint = `/search/movie`;
  try {
    const config = {
      method: 'GET',
      url: BASE_URL + endpoint,
      params: {
        api_key: API_KEY,
        query,
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

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '909c04d45dd4c126cd2df97943bce308';

// export default async function getImgs(inputData, page) {
//   try {
//     const config = {
//       method: 'GET',
//       url: BASE_URL,
//       params: {
//         key: API_KEY,
//         q: inputData,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//         page: page,
//         per_page: 12,
//       },
//     };
//     const response = await axios(config);
//     // console.log(response.data);
//     // console.log(response.data.totalHits);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
