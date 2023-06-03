import './style.css';
import homePage from './modules/home.js';
import showPopup from './modules/popup.js';

homePage();

window.document.addEventListener('DOMContentLoaded', () => {
  showPopup();
});
