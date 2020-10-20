
const apiUrl = 'https://api.lyrics.ovh/suggest/';
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () =>{
    const searchWord = document.getElementById('search').value;
    //console.log(searchWord);

    fetch(`${apiUrl}${searchWord}`)
    .then(res => res.json())
    .then(data =>  {
    console.log(data);
})
})

