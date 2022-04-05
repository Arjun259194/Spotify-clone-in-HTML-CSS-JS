console.log("Connected");

//*Initialize the variables
var masterPlay = document.getElementById("masterPlay");
var songIdex = 0;
var audioElement = new Audio("songs/1.mp3");
var myProgressBar = document.getElementById("myProgressBar");
var gif = document.getElementById("gif");
var songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "song-1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "song-2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "song-3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "song-4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "song-5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "song-6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "song-7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "song-8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "song-9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "song-10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
];

songItem.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

//*Handle play/pause click

masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
});

//*Listen to events
audioElement.addEventListener("timeupdate", () => {
    // console.log("timeUpdate");
    //*Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        // console.log(e.target);
        makeAllPlays();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = "songs/3.mp3";
        audioElement.play();
        audioElement.currentTime = 0;
    });
});
