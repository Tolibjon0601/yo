import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options: AxiosRequestConfig = {
  headers: {
    // 'X-Rapidapi-Key': 'c7acb5c060msh87fbc015e4f414ap1dc7c7jsn432a80185445',
    // 'X-Rapidapi-Host': 'youtube-v31.p.rapidapi.com'

    'x-rapidapi-key': '3a03dc42cbmsh958b0726be30899p1d4f35jsnb0ab1cd6f340',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  },
};

export const ApiService = {
  async fetching(url: string) {
    try {
      const response = await axios.get(`${BASE_URL}/${url}`, options);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};
