const video = document.querySelector('.player__video');
const playBtn = document.querySelector('.play__button');
const volumeBtn = document.querySelector('.volume__button');
const progressBar = document.querySelector('.progress__bar');
const volumeBar = document.querySelector('.volume__bar');

// console.dir(video);

function togglePlay(){
    if(video.paused) {
        video.play();
        playBtn.classList.remove('play');
        playBtn.classList.add('pause');

    } else {
        video.pause();
        playBtn.classList.add('play');
        playBtn.classList.remove('pause');
    }
}
function toggleVolume(){
    if(video.volume === 0) {
        video.volume = 1;
        volumeBtn.classList.remove('mute');
        volumeBtn.classList.add('volume');

        volumeBar.value = 100;
    } else {
        video.volume = 0;
        volumeBtn.classList.add('mute');
        volumeBtn.classList.remove('volume');

        volumeBar.value = 0;
    }
}

function clickProgressBar(e){
    const totalTime = video.duration;
    const value = e.target.value;

    video.currentTime = totalTime / 100 * value;
}

function updateProgressBar(e){
    const totalTime = video.duration;
    const currentTime = e.target.currentTime;

    progressBar.value = currentTime / totalTime * 100;
}

function clickVolumeBar(e){

    const value = e.target.value;
    video.volume = value / 100;

    console.log(value);
    console.log(video.volume);

}

video.addEventListener('timeupdate', updateProgressBar);

playBtn.addEventListener('click', togglePlay);
volumeBtn.addEventListener('click', toggleVolume);

progressBar.addEventListener('click', clickProgressBar);
volumeBar.addEventListener('click', clickVolumeBar);

progressBar.addEventListener('input', clickProgressBar);
volumeBar.addEventListener('input', clickVolumeBar);