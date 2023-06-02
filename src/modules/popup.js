import getAPIData from './TVmazapi.js';
import { addComment, getComments } from './cmment.js';

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

      const commentForm = document.querySelector(`form[data-index="${index}"]`);
      const commentButton = commentForm.querySelector('.commentButton');
      const commentInput = commentForm.querySelector('.comment');
      const commentsSection = document.querySelector('.comments-section');

      commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const comment = commentInput.value;
        addComment(comment);

        // Display the comment in the comments section
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');
        commentItem.innerHTML = `<p>${comment}</p>`;
        commentsSection.appendChild(commentItem);

        commentInput.value = '';
      });
    });
  });
};

await getComments();

const comment = 'This is a new comment';
addComment(comment);

// Call the showPopup function to fetch data and display popups
export default showPopup;