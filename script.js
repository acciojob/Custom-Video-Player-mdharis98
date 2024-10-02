/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.textContent = '❚ ❚'; // Change to pause symbol
    } else {
        video.pause();
        toggle.textContent = '►'; // Change to play symbol
    }
}

// Function to update progress bar as the video plays
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
}

// Function to scrub through the video
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Function to skip ahead or back
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Function to handle volume and playback speed changes
function handleRangeUpdate() {
    video[this.name] = this.value; // Set volume or playbackRate based on the slider
}

// Event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', scrub);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));