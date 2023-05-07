const { default: axios } = require('axios');

export async function getData(endpoint) {
  const baseURL = 'https://books-backend.p.goit.global';
  const url = `${baseURL}${endpoint}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
