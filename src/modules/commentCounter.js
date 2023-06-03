const countComments = () => {
  const commentCountSpan = document.querySelector('.comment-count');
  const comments = document.querySelectorAll('.comments-section .comment');

  commentCountSpan.textContent = comments.length.toString();
};

export default countComments;
