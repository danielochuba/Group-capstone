const urlAPI = 'https://api.tvmaze.com/shows/1/seasons';

const homePage = async () => {
  try {
    const response = await fetch(`${urlAPI}`);
    const data = await response.json();
    // eslint-disable-next-line no-console
    console.log(data.results);

    // eslint-disable-next-line no-use-before-define
    displayScores(data.results);
  } catch (error) {
    //display error
  }
};

export default homePage;