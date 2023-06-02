const urlAPI = 'https://api.tvmaze.com/shows/7/seasons';

const getAPIData = async () => {
  const response = await fetch(`${urlAPI}`);
  const data = await response.json();
  return data;
};

export default getAPIData;