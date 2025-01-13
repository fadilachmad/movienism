const BASE_URL = "https://api.themoviedb.org/3";
const BASEIMG_URL = "https://image.tmdb.org/t/p/original";
const apiKey = "47729e301f7647f7a51ce1ef31314c48";

export const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}?api_key=${apiKey}`);
  const data = await response.json();
  return data;
};
