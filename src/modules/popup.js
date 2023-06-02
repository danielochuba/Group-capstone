import getAPIData from './TVmazapi.js';
import { getSpecificComment, displayComments, submitComments } from './commentsApiConfig.js';

const showPopup = async () => {
  const popupImg = document.querySelector('.modal--img');
  const popupTitle = document.querySelector('.modal-title');
  const premierDate = document.querySelector('.premier-date');
  const endDate = document.querySelector('.end-date');
  const movieLink = document.querySelector('.movie-link');
  const summaryText = document.querySelector('.summary-text');
  let commentSumitBtn;

  const commentBtns = document.querySelectorAll('.comments-btn');
  commentBtns.forEach((btn, index) => {
    btn.addEventListener('click', async (event) => {
      event.stopPropagation();
      const data = await getAPIData();
      popupImg.src = data[index].image.medium;
      popupTitle.innerHTML = data[index].name;
      premierDate.innerHTML = `<h5>Premiered:&nbsp;&nbsp;</h5> ${data[index].premiereDate}`;
      endDate.innerHTML = `<h5>End date: &nbsp;&nbsp;</h5> ${data[index].endDate}`;
      movieLink.href = data[index].url;
      summaryText.innerHTML = data[index].summary;
      commentSumitBtn = document.querySelector('.commentButton');
      commentSumitBtn.id = data[index].number;
      getSpecificComment(commentSumitBtn.id);
      displayComments(commentSumitBtn.id);
      submitComments();
    });
  });
};

// Call the showPopup function to fetch data and display popups
export default showPopup;