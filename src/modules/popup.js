import getAPIData from './TVmazapi.js';
import { addComment, getComments } from './cmment.js';

const showPopup = async () => {
  const popupImg = document.querySelector('.modal--img');
  const popupTitle = document.querySelector('.modal-title');
  const premierDate = document.querySelector('.premier-date');
  const endDate = document.querySelector('.end-date');
  const movieLink = document.querySelector('.movie-link');
  const summaryText = document.querySelector('.summary-text');
  const commentsSection = document.querySelector('.comments-section');
  const commentForm = document.querySelector('.modal-form');

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

      // Fetch and display comments
      commentsSection.innerHTML = '';
      const comments = await getComments(data[index].id);
      comments.forEach((comment) => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
          <p>${comment.username}: ${comment.message}</p>
        `;
        commentsSection.appendChild(commentElement);
      });

      // Submit comment form
      commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const usernameInput = document.querySelector('.username');
        const commentInput = document.querySelector('.comment');
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
          const newComment = {
            username: usernameInput.value,
            message: commentText,
          };
          await addComment(data[index].id, newComment);
          commentInput.value = '';
        }
      });
    });
  });
};

export default showPopup;
