const LIKE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nbc4s2TFp5CN6zapCfwg/likes';
let likeBtns;
let likeBadges;

const getLikes = async () => {
  const response = await fetch(LIKE_URL);
  const data = await response.json();
  return data;
};

const displayLikes = () => {
  likeBadges = document.querySelectorAll('.like-count');
  getLikes().then((data) => {
    data.forEach((like) => {
      likeBadges.forEach((badge) => {
        if (Number(badge.id) === Number(like.item_id)) {
          badge.innerHTML = like.likes;
        }
      });
    });
  });
};

const postLikes = async (id) => {
  const response = await fetch(LIKE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return response.json();
};

const submitLikes = () => {
  likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      event.stopPropagation();
      // eslint-disable-next-line prefer-destructuring
      const id = btn.id;
      postLikes(id);
      displayLikes();
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  submitLikes();
});

export {
  displayLikes, submitLikes, getLikes, postLikes,
};
