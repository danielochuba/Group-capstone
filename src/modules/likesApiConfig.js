const LIKE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nbc4s2TFp5CN6zapCfwg/likes';

export const getLikes = async () => {
  const response = await fetch(LIKE_URL);
  const data = await response.json();
  return data;
};

export const displayLikes = () => {
    const likeBadges = document.querySelectorAll('.like-count');
    getLikes().then((data) => {
        data.forEach((like) => {
            likeBadges.forEach((badge, index) => {
                if (badge.id == like.item_id ) {
                    badge.innerHTML = like.likes;
                }
            });
        });
    });
};


