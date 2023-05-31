import getAPIData from './TVmazapi.js';

const showPopup = async () => {
  const popupImg = document.querySelector('.modal--img');
  const popupTitle = document.querySelector('.modal-title');
  const premierDate = document.querySelector('.premier-date');
  const endDate = document.querySelector('.end-date');
  const movieLink = document.querySelector('.movie-link');
  const summaryText = document.querySelector('.summary-text');
  const commentForm = document.querySelector('.modal-form');

  const commentBtns = document.querySelectorAll('.comments-btn');
  commentBtns.forEach((btn, index) => {
    btn.addEventListener('click', async (event) => {
      event.stopPropagation();
      const data = await getAPIData();
      const selectedSerie = data[index];

      popupImg.src = selectedSerie.image.medium;
      popupTitle.innerHTML = selectedSerie.name;
      premierDate.innerHTML = `<h5>Premiered:&nbsp;&nbsp;</h5> ${selectedSerie.premiereDate}`;
      endDate.innerHTML = `<h5>End date: &nbsp;&nbsp;</h5> ${selectedSerie.endDate}`;
      movieLink.href = selectedSerie.url;
      summaryText.innerHTML = selectedSerie.summary;

      // Load comments for the selected item
      const comments = await getComments(selectedSerie.id);
      displayComments(comments);

      // Add submit event listener to the comment form
      commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = commentForm.querySelector('.username').value;
        const comment = commentForm.querySelector('.comment').value;

        // Record the comment in the Involvement API
        await recordComment(selectedSerie.id, username, comment);

        // Refresh the comments after submitting
        const updatedComments = await getComments(selectedSerie.id);
        displayComments(updatedComments);

        // Clear the comment form
        commentForm.reset();
      });
    });
  });
};

// Function to retrieve comments from the Involvement API
const getComments = async (itemId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/Serie/Gardimycharlesdell/comments/${itemId}`);
  const data = await response.json();
  return data;
};

// Function to display comments in the popup
const displayComments = (comments) => {
  const commentContainer = document.querySelector('.comment-container');
  commentContainer.innerHTML = '';
  comments.forEach((comment) => {
    commentContainer.innerHTML += `
      <div class="comment">
        <h6>${comment.username}</h6>
        <p>${comment.text}</p>
      </div>
    `;
  });
};

// Function to record a comment in the Involvement API
const recordComment = async (itemId, username, comment) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/Serie/Gardimycharlesdell/comments/${itemId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      comment,
    }),
  });

  if (response.ok) {
    // console.log('Comment recorded successfully.');
  } else {
    // console.error('Failed to record comment.');
  }
};

export {
  showPopup, getComments, displayComments, recordComment,
};
