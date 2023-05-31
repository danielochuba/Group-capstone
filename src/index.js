import './style.css';
import homePage from './modules/home.js';
import getserie from './modules/popup.js';
const addComment = async (commentData) => {
  try {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/gdm/dellsoin6/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });

    if (!response.ok) {
      throw new Error('Failed to add comment');
    }

    const newComment = await response.json();
    return newComment;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};

const displayCommentsPopup = (serieId) => {
  const popupContainer = document.querySelector('.popupContainer');

  const commentForm = document.createElement('div');
  commentForm.className = 'comment-form';

  const closePopupButton = document.createElement('button');
  closePopupButton.className = 'closepopup';
  closePopupButton.innerHTML = '&times;';
  closePopupButton.addEventListener('click', () => {
    popupContainer.removeChild(commentForm);
  });

  const commentList = document.createElement('ul');
  commentList.className = 'comment-list';

  commentForm.appendChild(closePopupButton);
  commentForm.appendChild(commentList);
  popupContainer.appendChild(commentForm);

  const commentButton = document.querySelector(`.commentButton[data-index="${serieId}"]`);
  commentButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const usernameInput = document.querySelector('.username');
    const commentInput = document.querySelector('.comment');

    const username = usernameInput.value.trim();
    const comment = commentInput.value.trim();

    if (username === '' || comment === '') {
      return;
    }

    const commentData = {
      postId: serieId,
      username,
      comment,
    };

    try {
      const newComment = await addComment(commentData);

      const commentItem = document.createElement('li');
      commentItem.className = 'comment-item';
      commentItem.innerHTML = `
        <span class="username">${newComment.username}:</span>
        <span class="comment">${newComment.comment}</span>
      `;

      commentList.appendChild(commentItem);

      usernameInput.value = '';
      commentInput.value = '';
    } catch (error) {
      // Handle error
    }
  });
};

displayCommentsPopup();


homePage();
getserie();