const COMMENTS_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nbc4s2TFp5CN6zapCfwg/comments?item_id=';

const getSpecificComment = async (id) => {
  const response = await fetch(`${COMMENTS_URL}${id}`);
  const data = await response.json();
  return data;
};

const displayComments = async (id) => {
  const comments = await getSpecificComment(id);
  const commentsContainer = document.querySelector('.comments');
  commentsContainer.innerHTML = '';
  comments.forEach((comment) => {
    commentsContainer.innerHTML += `
            <div class="comment">
                <span class="comment-date">${comment.creation_date} &nbsp;</span>
                <span class="comment-name"><strong>${comment.username} :</strong></span>
                <span class="comment-text">${comment.comment}</span>
            </div>
            `;
  });
};

export {
  displayComments, getSpecificComment,
};