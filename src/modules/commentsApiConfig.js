const COMMENTS_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nbc4s2TFp5CN6zapCfwg/comments?item_id=';
const commentsContainer = document.querySelector('.comments');

const getSpecificComment = async (id) => {
  const response = await fetch(`${COMMENTS_URL}${id}`);
  const data = await response.json();
  return data;
};

const postComment = async (id, name, comment) => {
  const response = await fetch(COMMENTS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
  });
  return response.json();
};

const displayComments = async (id) => {
  const comments = await getSpecificComment(id);
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

const countComments = async (id) => {
  const commentsData = await getSpecificComment(id);
  const commetLabel = document.querySelector('.comment-count');
  commetLabel.innerHTML = commentsData.length.toString();
};

const submitComments = () => {
  const commentBtn = document.querySelector('.commentButton');
  const nameInput = document.querySelector('.name-input');
  const commentInput = document.querySelector('.comment-input');

  commentBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const { id } = commentBtn;
    const name = nameInput.value;
    const comment = commentInput.value;
    if (name !== '' && comment !== '') {
      postComment(id, name, comment);
      nameInput.value = '';
      commentInput.value = '';
      await displayComments(id);
      countComments(id);
    }
  });
};

export {
  displayComments, submitComments, getSpecificComment,
};