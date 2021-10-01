var next = document.getElementById("next");
var previous =  document.getElementById("previous");
var musicList = ["ColdHeart.mp3","scooty.mp3"];
document.getElementById('music-main').src=musicList[0];
 var duration="0:00";
 console.log (musicPlayer.duration);
musicPlayer.addEventListener('timeupdate',(e)=>{
    const currentTime  = e.target.currentTime;
     duration = e.target.duration;
     if(isNaN(duration)){
       duration="0:00";
     }
    document.getElementById("duration").innerHTML=musicPlayer.duration=="NaN"?"0:00":timeformat(duration);
    document.getElementById("current_time").innerHTML=timeformat(currentTime);
    progressWidth = (currentTime/duration)*100;
    //console.log(progressWidth);
    document.getElementById("progress").style.width= `${progressWidth}%`;
});



function timeformat(e){
  let mainDuration = e;
  let totalMin  = Math.floor(mainDuration /60);
  let totalSec = Math.floor(mainDuration%60);
  if( totalSec<10){
    totalSec = `0${totalSec}`;
  }
  if(totalSec==NaN){
    totalMin=0;
    totalSec=0;
  }
  var musicDuration = `${totalMin}:${totalSec}`;
  return musicDuration;
}

var musicIndex=0;
function nextSong(){
  musicIndex=1;
  musicPlayer.src=musicList[musicIndex];
  musicPlayer.play();
  console.log(musicList.length);
}

function previousSong(){
  musicIndex=0;
  musicPlayer.src=musicList[musicIndex];
  musicPlayer.play();
  console.log(musicList.length);
}
//Event trigger for next
previous.addEventListener('click',previousSong);
next.addEventListener('click',nextSong);


//ProgressArea seek

var progressArea = document.querySelector('#progress_div');

progressArea.addEventListener("click",(e)=>{
  let progressWidth = progressArea.clientWidth;
  let clickedOffsetX=e.offsetX;
  let songDuration = musicPlayer.duration;

  musicPlayer.currentTime = (clickedOffsetX/progressWidth)*songDuration;
  if(!musicPlayer.paused){
    musicPlayer.play();
  }
});


var progressBar = document.querySelector('#progress');

progressBar.style.onhouver
