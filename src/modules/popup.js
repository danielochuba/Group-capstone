const popupContainer = document.querySelector('.popupContainer');

const urlAPI = 'https://api.tvmaze.com/shows/1/seasons';

const createPopup = (serie) => {
  const pop = document.createElement('div');
  pop.className = 'popup-container';
  pop.innerHTML = `
      <div class="seriePop">
         <button class='closepopup'>&times;</button>    
        <div class="seriePop-head">
          <h2>${serie.name}</h2> 
          <img class="serie-img" src="${serie.img}" alt="serie image">        
          <ul class="serieInfo">
            <li>name1 : ${serie.name1}</li>
            <li>seasons : ${serie.season} </li>
            <li>episode : ${serie.episode}</li>           
          </ul>
        </div>
        <div class="formPop">
          <h2>Add a Comment</h2>
          <form>
            <input class='username' 
            type="text" 
            name="username" 
            placeholder="Your 
            Name" required>
            <textarea class='comment' 
            id="Comment" placeholder="Your comments" 
            maxlength="600" 
            name="message" required></textarea>
            <button class="commentButton" data-index="${serie.id}">Go</button>
          </form>
        </div>      
      </div>`;

  popupContainer.appendChild(pop);
  const close = document.querySelector('.closepopup');
  close.addEventListener('click', () => {
    popupContainer.removeChild(pop);
  });
};