const showPopup = () => {
  const popupContainer = document.querySelector('.popupContainer');
  const urlAPI = 'https://api.tvmaze.com/shows/7/seasons';

  fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((serie) => {
        const pop = document.createElement('div');
        pop.className = 'popup-container';
        pop.innerHTML = `
          <div class="seriePop">
            <button class='closepopup'>&times;</button>    
            <div class="seriePop-head">
              <h2>${serie.name}</h2> 
              <img class="serie-img" src="${serie.image.medium}" alt="serie image">        
              <ul class="serieInfo">
                <li>Language: ${serie.language}</li>
                <li>Premiered: ${serie.premiered}</li>
                <li>Summary: ${serie.summary}</li>           
              </ul>
            </div>
            <div class="formPop">
              <h2>Add a Comment</h2>
              <form>
                <input class='username' 
                  type="text" 
                  name="username" 
                  placeholder="Your Name" required>
                <textarea class='comment' 
                  id="Comment" placeholder="Your insights" 
                  maxlength="600" 
                  name="message" required></textarea>
                <button class="commentButton" data-index="${serie.id}">comment</button>
              </form>
            </div>      
          </div>`;

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
};

// Call the showPopup function to fetch data and display popups
showPopup();
