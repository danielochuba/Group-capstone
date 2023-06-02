import updateLikeCount from './updatelike.js';

const handleLike = async (button, season, threshold) => {
  const likeCount = button.querySelector('.like-count');
  let likes = parseFloat(likeCount.textContent);

  // Increase or decrease likes based on the current state
  if (button.classList.contains('liked')) {
    likes--;
    button.classList.remove('liked');
  } else {
    likes++;
    button.classList.add('liked');
  }

  likeCount.textContent = formatLikes(likes); // Format likes for display

  // Update the like count via the Involvement API and calculate remaining likes
  const remainingLikes = await updateLikeCount(season.id, likes, threshold);
  if (remainingLikes !== null) {
    console.log(`Remaining likes until threshold: ${remainingLikes}`);
  } else {
    console.log('Failed to update like count.');
  }
};

const formatLikes = (likes) => {
  if (likes >= 1000) {
    // Format the number using K for thousands
    return `${(likes / 1000).toFixed(1)}K`;
  }
  return likes.toString();
};

export default handleLike;


// import updateLikeCount from './updatelike.js';

// const handleLike = (button, season) => {
//   const likeCount = button.querySelector('.like-count');
//   let likes = parseFloat(likeCount.textContent);

//   // Increase or decrease likes based on the current state
//   if (button.classList.contains('liked')) {
//     likes--;
//     button.classList.remove('liked');
//   } else {
//     likes++;
//     button.classList.add('liked');
//   }

//   likeCount.textContent = formatLikes(likes); // Format likes for display

//   // Update the like count via the Involvement API
//   updateLikeCount(season.id, likes);
// };

// const formatLikes = (likes) => {
//   if (likes >= 1000) {
//     // Format the number using K for thousands
//     return `${(likes / 1000).toFixed(1)}K`;
//   }
//   return likes.toString();
// };

// export default handleLike;
