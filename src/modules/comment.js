const showCommentsInPopup = (comments) => {
  // Get the popup element or container where the comments will be displayed
  const popup = document.querySelector('.popup-container');

  // Create a comments container element to hold the comments
  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'comments-container';

  // Iterate over the comments and create HTML elements to display each comment
  comments.forEach((comment) => {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment-item';
    commentElement.innerHTML = `
      <div class="comment-header">
        <h3>${comment.username}</h3>
        <span>${comment.date}</span>
      </div>
      <p>${comment.message}</p>
    `;

    // Append each comment element to the comments container
    commentsContainer.appendChild(commentElement);
  });

  // Append the comments container to the popup
  popup.appendChild(commentsContainer);
};

export default showCommentsInPopup;