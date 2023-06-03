const involvement = 'Nbc4s2TFp5CN6zapCfwg';

const getComments = async (itemId) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvement}/comments?item_id=${itemId}`);
    const comments = await response.json();

    const commentsSection = document.querySelector('.comments-section');
    commentsSection.innerHTML = '';

    comments.forEach((comment) => {
      const commentElement = document.createElement('div');
      commentElement.innerHTML = `
      <div class="comment">
        <span class="comment-date">${comment.creation_date} &nbsp;</span>
        <span class="comment-name"><strong>${comment.username} :</strong></span>
        <span class="comment-text">${comment.comment}</span>
      </div>`;
      commentsSection.appendChild(commentElement);
    });
  } catch (error) {
    const commentsSection = document.querySelector('.comments-section');
    commentsSection.innerHTML = 'Error loading comments.';
  }
};

const addComment = async (itemId, username, comment) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvement}/comments`, {
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
    await getComments(itemId); // Reload comments after successful addition
    return 'Comment added.';
  }
  throw new Error('Failed to add comment.');
};

export { addComment, getComments };
