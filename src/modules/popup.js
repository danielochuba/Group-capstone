import getAPIData from './TVmazapi.js';

const showPopup = async () => {
  const popupImg = document.querySelector('.modal--img');
  const popupTitle = document.querySelector('.modal-title');
  const premierDate = document.querySelector('.premier-date');
  const endDate = document.querySelector('.end-date');
  const movieLink = document.querySelector('.movie-link');
  const summaryText = document.querySelector('.summary-text');

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

      // Load comments for the selected item
      loadComments(data[index].id);
    });
  });
};

// Call the showPopup function to fetch data and display popups
export default showPopup;