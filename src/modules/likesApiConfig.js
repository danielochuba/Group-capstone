const LIKE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nbc4s2TFp5CN6zapCfwg/likes';
const likeBtns = document.querySelectorAll('.like-btn');
const likeBadges = document.querySelectorAll('.like-count');

export const getLikes = async () => {
  const response = await fetch(LIKE_URL);
  const data = await response.json();
  return data;
};

export const displayLikes = () => {
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

export const postLikes = async (id) => {
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

export const submitLikes = () => {
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      const { id } = btn;
      postLikes(id);
      displayLikes();
    });
  });
};
