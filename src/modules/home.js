import showPopup from './popup.js';
import getAPIData from './TVmazapi.js';
import handleLike from './like.js';

const showData = async () => {
  const result = await getAPIData();
  const cardContainer = document.querySelector('#container');
  result.forEach((season) => {
    const card = document.createElement('div');
    card.className = 'card col-lg-4 col-md-6 col-sm-12 gy-3';
    card.innerHTML = `
      <img src="${season.image.original}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${season.name}</h5>
        <p class="card-text">
          Likes
          <button type="button" class="btn btn-outline-info btn-sm like-btn">
            🤍 <span class="like-count">0</span>
          </button>
        </p>
        <div class="description-buttons justify-content-center">
          <a href="#" class="btn btn-primary btn-sm comments-btn" data-bs-toggle="modal" data-bs-target="#comment-modal">comments</a><br>
          <a href="#" class="btn btn-primary btn-sm">Reservations</a>
        </div>
      </div>
    `;

    const likeButton = card.querySelector('.like-btn');
    likeButton.addEventListener('click', () => handleLike(likeButton, season));

    cardContainer.appendChild(card);
  });
};

const homePage = async () => {
  await showData();
  await showPopup();
};

export default homePage;