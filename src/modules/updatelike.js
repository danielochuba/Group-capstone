const updateLikeCount = async (seasonId, count) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${seasonId}/likes/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ likes: count }),
    });

    if (response.ok) {
      likes++;
      button.classList.add('liked');
    } else {
      likes--;
      button.classList.remove('liked');
    }
  } catch (error) {
    console.log('An error occurred while updating the like count:', error);
  }
};

export default updateLikeCount;