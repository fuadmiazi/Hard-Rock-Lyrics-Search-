
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
    //var songArray = songList.length;
    //var paraParent, songPara, songName;
    
    // songName.innerHTML = "";
    // albumName.innerHTML = "";

    // songName.innerHTML = "";
    // albumName.innerHTML = "";
    // middleText = "";

    for(i=0; i<5; i++){
        var paraParent = document.getElementById("search-result");
        var songPara = document.createElement("p");
        songPara.setAttribute("class", "author lead");
        paraParent.appendChild(songPara);
        var songName = document.createElement("strong");
        songPara.appendChild(songName);
        var middleText = document.createTextNode(" By ");
        songPara.appendChild(middleText);
        var albumName = document.createElement("strong");
        songPara.appendChild(albumName);
        var lyricsButton = document.createElement("button");
        lyricsButton.setAttribute("class", "btn btn-success");
        lyricsButton.setAttribute("id", `lyrics-${i}`);
        lyricsButton.setAttribute("onclick", `myFunction(${i},'${searchWord}')`);
        lyricsButton.innerHTML = "Get Lyrics";
        songPara.appendChild(lyricsButton);
        songName.innerHTML = songList[i].title;
        albumName.innerHTML = songList[i].artist.name;
    }
    
})


})

function myFunction(number, word){
    //console.log("It's working!" + number + word);
    fetch(`${apiUrl}${word}`)
    .then(res => res.json())
    .then(datas => {
        const songList = datas.data;
        const songHeadline = document.getElementById("songTitle");
        const artistName = songList[number].artist.name;
        const songTitle = songList[number].title;
        songHeadline.innerHTML = songTitle  + " - " + artistName;
    })
}


//const artistName =  