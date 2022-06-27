import axios from "axios";

 export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
  const {data} = await axios.get((url),{
    headers: {
      'X-RapidAPI-Key' : '3578643ccfmshc89b4095e46a1f0p1c684cjsn421c8942586a',
      'X-RapidAPI-Host' :'bayut.p.rapidapi.com'
    }
  });
  return data;
}