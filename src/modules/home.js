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
    serie: './images/serie1.PNG',
    name: 'lorem',
  },
  {
    serie: './images/serie2.PNG',
    name: 'lorem',
  },
  {
    serie: './images/serie3.PNG',
    name: 'lorem',
  },
  {
    serie: './images/serie4.PNG',
    name: 'lorem',
  },
  {
    serie: './images/serie5.PNG',
    name: 'lorem',
  },
  {
    serie: './images/serie6.PNG',
    name: 'lorem',
  },
  {
    serie: './images/serie7.PNG',
    name: 'lorem',
  },
  {
    serie: './images/serie8.PNG',
    name: 'lorem',
  },
];

const presenter6 = document.getElementById('container');
serieshow.forEach((season) => {
  const allseries = document.createElement('shows');
  allseries.innerHTML = (`
    <div class="cards-display">
        <img class = "card" src="${season.serie}" alt="serie-images">
        <div class="presentation">
            <h3> ${season.name}</h2>
            <div class="like">
            <i class="fa-regular fa-heart"></i>
            <div class="count">
             <p>5</p>
              <p>likes</p>
            </div>
          </div>
        </div>
        <div class="btn">
         <button class="comment">comments</button>
        <button class="Reservation">Reservations</button>
        <div/>
  </div>
    `);
  presenter6.appendChild(allseries);
});

export default homePage;