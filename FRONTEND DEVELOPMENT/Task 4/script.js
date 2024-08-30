// script.js
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');

let isPlaying = false;
let currentTrackIndex = 0;

const tracks = [
    { title: 'Song One', artist: 'Artist One', src: 'song1.mp3' },
    { title: 'Song Two', artist: 'Artist Two', src: 'song2.mp3' },
    { title: 'Song Three', artist: 'Artist Three', src: 'song3.mp3' },
];

function loadTrack(index) {
    const track = tracks[index];
    audioPlayer.src = track.src;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
}

function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) audioPlayer.play();
}

function playPrevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) audioPlayer.play();
}

playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNextTrack);
prevBtn.addEventListener('click', playPrevTrack);

// Load the first track initially
loadTrack(currentTrackIndex);
