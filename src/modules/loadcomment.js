const loadComments = async (itemId) => {
  try {
    // Make a GET request to fetch the comments for the selected item
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/movies/gdmtiga/comments?item_id=${itemId}`);
    const comments = await response.json();

    // Display the comments
    const commentContainer = document.querySelector('.comment-container');
    commentContainer.innerHTML = '';

    comments.forEach((comment) => {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = `
        <div class="comment-username">${comment.username}</div>
        <div class="comment-text">${comment.comment}</div>
      `;
      commentContainer.appendChild(commentElement);
    });
  } catch (error) {
    console.error('Failed to load comments:', error);
  }
};

export default loadComments;