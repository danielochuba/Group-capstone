import countComments from './commentsCounter.js';

const { JSDOM } = require('jsdom');

// Mock the async function `func` that is passed to `countComments`
const mockFunc = async () => [
  { id: 1, text: 'Comment 1' },
  { id: 2, text: 'Comment 2' },
  { id: 3, text: 'Comment 3' },
];
describe('countComments', () => {
  let originalQuerySelector;

  beforeEach(() => {
    // Set up the JSDOM environment
    const dom = new JSDOM('<body><div class="comment-count"></div></body>');
    global.document = dom.window.document;
    originalQuerySelector = global.document.querySelector;
  });

  afterEach(() => {
    // Restore the original `document.querySelector` function
    global.document.querySelector = originalQuerySelector;
  });

  it('should update the comment count label with the length of commentsData', async () => {
    // Mock the `document.querySelector` function
    global.document.querySelector = jest.fn().mockReturnValue({
      innerHTML: '',
    });

    // Call the `countComments` function
    await countComments(mockFunc, 123);

    // Check if the comment count label is updated correctly
    expect(global.document.querySelector('.comment-count').innerHTML).toBe('3');
  });
});
