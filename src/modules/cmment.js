const involvement = 'Nbc4s2TFp5CN6zapCfwg';

// Function to get comments for an item
const getComments = async (itemId) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/series/${involvement}/comments?item_id=${itemId}`);
    const comments = await response.json();

    const commentsSection = document.querySelector('.comments-section');
    commentsSection.innerHTML = '';

    comments.forEach((comment) => {
      const commentElement = document.createElement('div');
      commentElement.innerHTML = `<p><strong>${comment.username}</strong>: ${comment.comment}</p>`;
      commentsSection.appendChild(commentElement);
    });
  } catch (error) {
    const commentsSection = document.querySelector('.comments-section');
    commentsSection.innerHTML = 'Error loading...... ';
  }
};

// Function to add a comment
const addComment = async (itemId, username, comment) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/series/${involvement}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
  });

  if (response.ok) {
    // Comment added successfully, reload comments
    await getComments(itemId);
    return 'Comment added.';
  }
  throw new Error('Failed to add comment.');
};

export { addComment, getComments };
