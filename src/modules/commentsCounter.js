const countComments = async (func, id) => {
  const commentsData = await func(id);
  const commetLabel = document.querySelector('.comment-count');
  commetLabel.innerHTML = commentsData.length.toString();
};

export default countComments;