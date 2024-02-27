window.onload = function() {
    currentSongIndex = 0;
    playSong();
  };

const audio = document.createElement('audio');
const playBtn = document.querySelector('#play-btn');
const pauseBtn = document.querySelector('#pause-btn');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const progressBar = document.querySelector('.progress-bar');
const songTitle = document.querySelector('#song-title');
const artistName = document.querySelector('#artist-name');

let currentSongIndex = 0;

const songs = [
    { src: 'song1.mp3', title: 'Alors on Dance', artist: 'song 1' },
    { src: 'song2.mp3', title: 'Laxed', artist: 'song 2' },
    { src: 'song3.mp3', title: 'Savage Love', artist: 'song 3' },
    // { src: 'song4.mp3', title: 'Song 4', artist: 'Artist 4' },
    // { src: 'song5.mp3', title: 'Song 5', artist: 'Artist 5' },
    // Add more songs here
  ];

function playSong() {
  audio.src = songs[currentSongIndex].src;
  audio.play();
  songTitle.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].artist;
}

playBtn.addEventListener('click', playSong);

pauseBtn.addEventListener('click', () => {
  audio.pause();
});

prevBtn.addEventListener('click', () => {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }
  playSong();
});

nextBtn.addEventListener('click', () => {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }
  playSong();
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

audio.addEventListener('loadedmetadata', () => {
  progressBar.style.width = '0%';
});

window.onload = function() {
  playSong();
};