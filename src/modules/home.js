import {
  showPopup, getComments, displayComments, recordComment,
} from './popup.js';
import getAPIData from './TVmazapi.js';

const showData = async () => {
  const result = await getAPIData();
  const cardContainer = document.querySelector('#container');
  result.forEach((season) => {
    cardContainer.innerHTML += `
        <div class="card col-lg-4 col-md-6 col-sm-12 gy-3">
            <img src="${season.image.original}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${season.name}</h5>
              <p class="card-text">
                <span class="badge text-bg-secondary ms-2">4</span> Likes

                <button type="button" class="btn btn-outline-info btn-sm ">
                  🤍
                </button>
              </p>
              <div class="description-buttons justify-content-center">
                  <a href="#" class="btn btn-primary btn-sm comments-btn" data-bs-toggle="modal" data-bs-target="#comment-modal">comments</a><br>
                  <a href="#" class="btn btn-primary btn-sm">Reservations</a>
              </div>
            </div>
        </div>
          `;
  });
};
const homePage = async () => {
  await showData();
  await showPopup();
};

export default homePage;