const video = document.querySelector('.player__video');
const playBtn = document.querySelector('.play__button');
const volumeBtn = document.querySelector('.volume__button');
const progressBar = document.querySelector('.progress__bar');
const volumeBar = document.querySelector('.volume__bar');

function clickPlay(){
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
    playBtn.classList.toggle('pause');
}

function clickVolume(){
    if(video.volume === 0) {
        video.volume = volumeBar.value / 100;
        volumeBtn.classList.remove('mute');
    } else {
        video.volume = 0;
        volumeBtn.classList.add('mute');
    }
}

function changeProgressBar(e){
    const totalTime = video.duration;
    const value = e.target.value;

    video.currentTime = totalTime / 100 * value;
}

function updateProgressBar(e){
    const totalTime = video.duration;
    const currentTime = e.target.currentTime;

    progressBar.value = currentTime / totalTime * 100;
}

function changeVolumeBar(e){
    const value = e.target.value;

    video.volume = value / 100;

    if(video.volume === 0 && value === 0){
        volumeBtn.classList.add('mute');
    } else {
        volumeBtn.classList.remove('mute');
    }
}

video.addEventListener('timeupdate', updateProgressBar);

playBtn.addEventListener('click', clickPlay);
volumeBtn.addEventListener('click', clickVolume);

progressBar.addEventListener('input', changeProgressBar);
volumeBar.addEventListener('input', changeVolumeBar);