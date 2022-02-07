const player = document.querySelector('.player');
const video = document.querySelector('.player__video');
const poster = document.querySelector('.player__poster');
const playerBtn = document.querySelector('.player__btn');
const playBtn = document.querySelector('.play__button');
const volumeBtn = document.querySelector('.volume__button');
const progressBar = document.querySelector('.progress__bar');
const volumeBar = document.querySelector('.volume__bar');
const fullscreenBtn = document.querySelector('.fullscreen__button');

function clickPlay() {
    const isOpacity = poster.style.opacity;

    if(!isOpacity) {
        poster.style.opacity = '0';
    }

	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
	playerBtn.classList.toggle('player__btn-d_none');
	playBtn.classList.toggle('pause');
}

function clickVolume() {
	const value = Number(volumeBar.value);

	if (video.volume === 0 && volumeBtn.classList.contains('mute')) {
		video.volume = value / 100;
		volumeBtn.classList.remove('mute');
	} else {
		video.volume = 0;
		volumeBtn.classList.add('mute');
	}
}

function changeProgressBar(e) {
	const totalTime = video.duration;
	const value = e.target.value;
    if(value === '100') {
        playerBtn.classList.toggle('player__btn-d_none');
        playBtn.classList.toggle('pause');
    }

    this.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${value}%, #fff ${value}%, white 100%)`;
	video.currentTime = (totalTime / 100) * value;
}

function updateProgressBar(e) {
	const totalTime = video.duration;
	const currentTime = e.target.currentTime;
    if(currentTime === totalTime) {
        playerBtn.classList.toggle('player__btn-d_none');
        playBtn.classList.toggle('pause');
    }
    const value = ((currentTime / totalTime) * 100).toFixed(0);

    progressBar.style.background = `
            linear-gradient(to right, #BDAE82 0%, #BDAE82 ${value}%, #fff ${value}%, white 100%)
        `;
    progressBar.value = value;
}

function changeVolumeBar(e) {
	const value = Number(e.target.value);
    this.style.background = `
            linear-gradient(to right, #BDAE82 0%, #BDAE82 ${value}%, #fff ${value}%, white 100%)
        `;
	video.volume = value / 100;

	if (video.volume === 0 && value === 0) {
		volumeBtn.classList.add('mute');
	} else {
		volumeBtn.classList.remove('mute');
	}
}

function clickFullScreen() {
	this.classList.toggle('close');
	toggleFullscreen();
}

function toggleFullscreen() {
	if (!document.fullscreenElement) {
		player.requestFullscreen().catch((err) => {
			alert(
				`Error attempting to enable full-screen mode: ${err.message} (${err.name})`
			);
		});
	} else {
		document.exitFullscreen();
	}
}

video.addEventListener('click', clickPlay);
video.addEventListener('timeupdate', updateProgressBar);

playerBtn.addEventListener('click', clickPlay);

playBtn.addEventListener('click', clickPlay);
volumeBtn.addEventListener('click', clickVolume);

progressBar.addEventListener('input', changeProgressBar);
volumeBar.addEventListener('input', changeVolumeBar);

fullscreenBtn.addEventListener('click', clickFullScreen);