const countComments = require('./commentCounter.js');

describe('countComments', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <span class="comment-count"></span>
        <div class="comments-section">
          <div class="comment"></div>
          <div class="comment"></div>
          <div class="comment"></div>
        </div>
      </div>
    `;
  });

  test('updates comment count span correctly', () => {
    countComments();
    const commentCountSpan = document.querySelector('.comment-count');
    expect(commentCountSpan.textContent).toBe('3');
  });

  test('handles empty comments section', () => {
    document.querySelector('.comments-section').innerHTML = '';
    countComments();
    const commentCountSpan = document.querySelector('.comment-count');
    expect(commentCountSpan.textContent).toBe('0');
  });
});
