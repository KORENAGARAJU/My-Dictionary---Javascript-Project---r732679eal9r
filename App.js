const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
let card = `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title"></h5>
  <p class="card-text"></p>
  <a href="#" class="btn btn-primary">Delete</a>
</div>
</div>
`
let SearchInput = document.querySelector('.main-input');
let SearchButton = document.querySelector('.search-icon');
SearchButton.addEventListener('click', () => {
    let searchValue = SearchInput.value
    async function fetchData(url) {
        let fetchedData = await fetch(url + searchValue);
        let jsonValue = await fetchedData.json();
        let result = jsonValue[0].meanings[0].definitions[0].definition;
        const resultComponent = document.querySelector('.result-info');
        resultComponent.innerHTML = result;
        console.log(result);
    }
    fetchData(url);
});
