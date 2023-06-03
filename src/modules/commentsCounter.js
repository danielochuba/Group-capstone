// eslint-disable-next-line import/no-cycle
import { getSpecificComment } from './commentsApiConfig.js';

const countComments = async (id) => {
  const commentsData = await getSpecificComment(id);
  const commetLabel = document.querySelector('.comment-count');
  commetLabel.innerHTML = commentsData.length.toString();
};

export default countComments;