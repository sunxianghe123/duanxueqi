/**
 * Created by 孙祥赫 on 2020/8/22.
 */

window.onload = function(){
    var audio = document.getElementById('music');
    audio.pause();//打开页面时无音乐
}
function play() {
    var audio = document.getElementById('music');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;//音乐从头播放
    }
}

