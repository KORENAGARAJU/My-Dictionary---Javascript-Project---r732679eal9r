const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
let searchValue = undefined;
let SearchInput = document.querySelector('.main-input');
let SearchButton = document.querySelector('.search-icon');
SearchButton.addEventListener('click', () => {
    searchValue = SearchInput.value
    async function fetchData(url) {
        let fetchedData = await fetch(url + searchValue);
        let jsonValue = await fetchedData.json();
        let result = jsonValue[0].meanings[0].definitions[0].definition;
        const resultComponent = document.querySelector('.result-info');
        resultComponent.innerHTML = result;
        //console.log(result);
        localStorageHistroy(result);
    }
    fetchData(url);
});
//local storage
let localStorageItems = 3;
let localStorageKey;
function localStorageHistroy(result) {
    localStorageKey = searchValue + localStorageItems
    localStorage.setItem(localStorageKey, result);
    localStorageItems--;
    if (localStorageItems === 0) {
        localStorageItems = 3;
    }
    // }
}
document.querySelector('.nav-bar-history').addEventListener('click', () => {
    let HistoryContainerCard = document.querySelector('#history-view');
    HistoryContainerCard.innerHTML = '';
    for (let i = 3; i >= 1; i--) {
        console.log(localStorage.getItem(i));
        let card = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${searchValue}</h5>
        <p class="card-text">${localStorage.getItem(i)}</p>
        <a href="#" class="btn btn-primary">Delete</a>
        </div>
       </div>
      `
        console.log(card);
        HistoryContainerCard.innerHTML += card;
    }
})
