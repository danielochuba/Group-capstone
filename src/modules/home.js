const urlAPI = 'https://api.tvmaze.com/shows/1/seasons';

const homePage = async () => {
  try {
    const response = await fetch(`${urlAPI}`);
    const data = await response.json();
    // eslint-disable-next-line no-console
    console.log(data.results);

    // eslint-disable-next-line no-use-before-define
    // displayScores(data.results);
  } catch (error) {
    // display error
  }
};

const serieshow = [
  {
    serie: 'https://shorturl.at/coBWZ',
    name: 'lorem',
  },
  {
    serie: 'https://shorturl.at/coBWZ',
    name: 'lorem',
  },
  {
    serie: 'https://shorturl.at/coBWZ',
    name: 'lorem',
  },
  {
    serie: 'https://shorturl.at/coBWZ',
    name: 'lorem',
  },

];

const cardContainer = document.getElementById('container');
serieshow.forEach((season) => {
  cardContainer.innerHTML += (`
  <div class="card col-lg-4 col-md-6 col-sm-12 gy-3">
      <img src="${season.serie}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${season.name}</h5>
        <p class="card-text">
          <span class="badge text-bg-secondary ms-2">4</span> Likes

          <button type="button" class="btn btn-outline-info btn-sm ">
            🤍
          </button>
        </p>
        <div class="description-buttons justify-content-center">
            <a href="#" class="btn btn-primary btn-sm comments">comments</a><br>
            <a href="#" class="btn btn-primary btn-sm">Reservations</a>
        </div>
      </div>
  </div>
    `);
});

export default homePage;