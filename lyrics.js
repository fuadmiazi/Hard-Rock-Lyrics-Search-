
const apiUrl = 'https://api.lyrics.ovh/suggest/';
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () =>{
    const searchWord = document.getElementById('search').value;
    //console.log(searchWord);

    fetch(`${apiUrl}${searchWord}`)
    .then(res => res.json())
    .then(datas =>  {
    const songList = datas.data;
    console.log(songList);
    var songArray = songList.length;
    var paraParent, songPara, songName;
    
    // songName.innerHTML = "";
    // albumName.innerHTML = "";

    for(i=0; i<songArray; i++){
        var paraParent = document.getElementById("search-result");
        var songPara = document.createElement("p");
        paraParent.appendChild(songPara);
        var songName = document.createElement("strong");
        songPara.appendChild(songName);
        var middleText = document.createTextNode(" Album By ");
        songPara.appendChild(middleText);
        var albumName = document.createElement("strong");
        songPara.appendChild(albumName);
        songName.innerHTML = songList[i].title;
        albumName.innerHTML = songList[i].album.title;
    }
    
})
})