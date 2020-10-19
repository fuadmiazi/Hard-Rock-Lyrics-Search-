const apiUrl = 'https://api.lyrics.ovh/suggest/';
const 

fetch('https://api.lyrics.ovh/suggest/')
.then(res => res.json())
.then(data =>  {
    console.log(data);
})