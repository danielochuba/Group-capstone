
const urlAPI = 'https://api.tvmaze.com/shows/1/seasons';
const presenter6 = document.getElementById('container');
// create popup with API information
const Popup = (serie1) => {
  const pop = document.createElement('div');
  pop.className = 'popup-container';
  pop.innerHTML = `
      <div class="cardPopup">
        <span class="close">close</span>      
        <div class="popup-header">
          <h2>${serie.name}</h2> 
          <img class="card-img" src="${serie1.img}" alt="serie imgage">        
          <ul class="aboutserie">
            <li>Type : ${serie1.type}</type>
            <li>season : ${serie1.season} </li>
            <li>episode : ${serri.episode}</li>
             </type>            
          </ul>
        </div>
        <div class="cardform">
          <h2>Leave a Comment</h2>
          <form>
            <input class='name' type="text" name="username" placeholder="Your Name" required>
            <textarea class='comment' id="comment" placeholder="Your comments" maxlength="360" name="message" required></textarea>
            <button class="comment">Go</button>
          </form>
        </div>      
      </div>`;

  presenter6.appendChild(pop);
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    presenter6.removeChild(pop);
  });
};
