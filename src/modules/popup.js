import getAPIData from './TVmazapi.js';

const showPopup = async () => {
  const popupImg = document.querySelector('.modal--img');
  const popupTitle = document.querySelector('.modal-title');
  const premierDate = document.querySelector('.premier-date');
  const endDate = document.querySelector('.end-date');
  const movieLink = document.querySelector('.movie-link');
  const summaryText = document.querySelector('.summary-text');

        popupContainer.appendChild(pop);
        const close = pop.querySelector('.closepopup');
        close.addEventListener('click', () => {
          popupContainer.removeChild(pop);
        });
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  });
};

// Call the showPopup function to fetch data and display popups
showPopup();
