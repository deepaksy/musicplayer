const toggleSwitch = document.querySelector('.switch-theme');//Selects element for ThemeSwitch
var time = new Date();//Create object Date.
var getHour = time.getHours(); // Get Hours
localStorage.setItem('theme','light'); // Sets initial theme to light
if(getHour<12 || getHour>=19){
  document.documentElement.setAttribute('data-theme','dark'); 
  localStorage.setItem('theme','dark');//Sets to dark theme when time is more than 20 hours..
}
function switchTheme() {
    if (localStorage.getItem('theme')=='light') {
        document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');

    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
      
      localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('click', switchTheme);
const musicPlayer = document.querySelector("#music-main");
musicPlayer.src="";
function playSong(){
  if(musicPlayer.paused){
    musicPlayer.play();
    document.getElementById('play').innerHTML='<i  class="fas fa-pause"></i>';
  }
  else{
    musicPlayer.pause();
    document.getElementById('play').innerHTML='<i  class="fas fa-play"></i>';
  }
}

document.getElementById("play").addEventListener('click',playSong);

document.querySelector('#song-namea').innerHTML="Cold Heart";

// MEDIA SESSION NAVIGATOR

let mediaSession = navigator.mediaSession;

if("mediaSession" in navigator){
  navigator.mediaSession.metadata = new MediaMetadata({
    title : "Cold Heart",
    artist : "Elton John, Dua Lipa",
    album : "PAUN Remix",
    artwork: [{src: "music-banner.jpg"}]
  })
}

navigator.mediaSession.setActionHandler('play',()=>{
  musicPlayer.play();
});
navigator.mediaSession.setActionHandler('pause',()=>{
  musicPlayer.pause()
});
navigator.mediaSession.setActionHandler('seekbackward',()=>{musicPlayer.fastSeek(-20)});
navigator.mediaSession.setActionHandler('seekforward',()=>{musicPlayer.fastSeek(20)});