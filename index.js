const searchPlayers = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    if (searchText == '') {
        alert('pls erite something');
    }
    // else if (typeof (searchText) !== 'string') {
    //     alert('pls erite something');
    // }
    else {
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;
        fetch(url).then(res => res.json()).then(data => displayPlayer(data.player));
    }
    searchField.value = '';
}
const displayPlayer = (players) => {
    const cardContainer = document.getElementById('card-container');
    players.forEach(player => {
        console.log(player);
        const div = document.createElement('div');
        div.classList.add = ('col');
        div.innerHTML = ` 
        <div onclick="localdetail(${player.idPlayer})" class="card p-3">
              <img src="${player.strThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${player.strPlayer}</h5>
                  <p class="card-text">${player.strDescriptionEN.slice(0, 250)}</p>
              </div>
        </div>
    `;
        cardContainer.appendChild(div);

    });
};


const localdetail = playerID => {

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerID}`;

    fetch(url).then(res => res.json()).then(data => console.log(data)).catch(error => console.log(error));

}



