import './style.css';
import homePage from './modules/home.js';
import showPopup from './modules/popup.js';
import countItems from './modules/itemsCounter.js';

const app = async () => {
  await homePage();
  countItems();
};

app();

window.document.addEventListener('DOMContentLoaded', () => {
  showPopup();
});