const handleFormSubmit = (event) => {
  event.preventDefault();

  // Get the form values
  const username = document.querySelector('.username').value;
  const comment = document.querySelector('.comment').value;
  const serieId = event.target.dataset.index;

  const newComment = {
    username,
    comment,
    serieId,
  };

  // Call a function to post the comment to the Involvement API (you'll need to implement this function)
  postComment(newComment);

  // Clear the form inputs
  document.querySelector('.username').value = '';
  document.querySelector('.comment').value = '';
};

// Function to post the comment to the Involvement API
const postComment = async (comment) => {
  try {
    // Make a POST request to the Involvement API with the comment data
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/movies/gdmtiga/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });

    // Check if the comment was successfully posted
    if (response.ok) {
      // Refresh the popup to show the updated comments (you'll need to implement this function)
      refreshPopup();
    } else {
      // Handle the error if the comment was not posted
      console.error('Failed to post comment:', response.status);
    }
  } catch (error) {
    console.error('Failed to post comment:', error);
  }
};

// Function to refresh the popup and show the updated comments
const refreshPopup = () => {
  // Close the modal
  const modal = document.querySelector('#comment-modal');
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();

  // Clear the existing comments
  const commentContainer = document.querySelector('.comment-container');
  commentContainer.innerHTML = '';

  // Reload the popup to fetch and display the updated comments (you'll need to implement this function)
  showPopup();
};

// Function to initialize the comment functionality
const initializeComment = () => {
  // Add an event listener to the comment form submit button
  const commentForm = document.querySelector('.modal-form');
  commentForm.addEventListener('submit', handleFormSubmit);
};

export default initializeComment;
