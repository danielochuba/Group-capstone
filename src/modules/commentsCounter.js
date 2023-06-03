const countComments = async (func, id) => {
  const commentsData = await func(id);
  const commetLabel = document.querySelector('.comment-count');
  if (!commentsData) {
    commetLabel.innerHTML = 0;
  } else if (commentsData.length === 0) {
    commetLabel.innerHTML = 0;
  } else {
    commetLabel.innerHTML = commentsData.length;
  }
};

export default countComments;