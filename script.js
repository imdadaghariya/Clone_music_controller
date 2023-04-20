console.log("Hello Spotify");
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName'); 
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: 'Let me love you', filepath:'songs/1.mp3', coverpath:'covers/1.jpg'},
    { songName: 'I dont Know', filepath:'songs/2.mp3', coverpath:'covers/2.jpg'},
    { songName: 'Thunder', filepath:'songs/3.mp3', coverpath:'covers/3.jpg'},
    { songName: 'Beliver', filepath:'songs/4.mp3', coverpath:'covers/4.jpg'},
    { songName: 'Paradise', filepath:'songs/5.mp3', coverpath:'covers/5.jpg'},
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
// audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click', (e)=>{
    if(audioElement.paused || audioElement.currentTime<=0)
        console.log(e.target);
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity =1;
        //<i class="fa-solid fa-pause"></i><i class="fa-regular fa-pause"></i>
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity =0;
    }
})


// Listern 
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   console.log(progress);
   myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value* audioElement.duration/100;
})
 const makeAllPlays =()=>{
    Array.from(document.querySelector('.songItemPlay')).forEach((element)=>{
        element.classList.add('fa-pause');
        element.classList.remove('fa-play');
    })
 }
Array.from(document.querySelectorAll('.songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.remove('fa-pause');
        console.log(e.target);
    })
})
 

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.remove('fa-pause');
})

document.getElementById('previous').addEventListener('click', (e)=>{
    console.log(e.target);
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.remove('fa-pause');
})