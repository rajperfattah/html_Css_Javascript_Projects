

let songIndex=0;
let audioElement = new Audio('song1.m4a');
let masterPlay = document.getElementById('masterplay');

let myProgressBar = document.getElementById('range');

let gf= document.getElementById('gf');

let songItems= Array.from(document.getElementsByClassName(".songItems"))



let songs=[{
    songName:"chal chaleya tu bandeya os gali m ... ",
    filePath:"song1.m4a",
    coverPath:"cover1.jpg"
},
{
    songName:"Agar tum sath ho ...",
    filePath:"song2.m4a",
    coverPath:"cover2.jpg"
},
{
    songName:"Where are you now ...",
    filePath:"song3.m4a",
    coverPath:"cover3.jpg"
},
{
    songName:"Apna bana le peya ...",
    filePath:"song4.m4a",
    coverPath:"cover4.jpg"
},
{
    songName:"love you so ...",
    filePath:"song5.m4a",
    coverPath:"cover5.jpg"
},
{
    songName:"hy ishq mera sarfira fasana ...",
    filePath:"song6.m4a",
    coverPath:"cover6.jpg"
},
{
    songName:"falak tk chal sath mere ...",
    filePath:"song7.m4a",
    coverPath:"cover7.jpg"
},
{
    songName:"Ek tarfa hogaya ...",
    filePath:"song8.m4a",
    coverPath:"cover8.jpg"
},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("song1")[0].src=songs[i].coverPath;

    element.getElementsByClassName("textline")[0].innerHTML=songs[i].songName;
})




// playing songe
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        gf.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gf.style.opacity=0;

    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');

    // update seekbar   
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
}
)