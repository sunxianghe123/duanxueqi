/**
 * Created by 孙祥赫 on 2020/8/24.
 */
window.onload = function(){
    var audio = document.getElementById('audio0');
    audio.play();
}
    function play()
    {
        var audio = document.getElementById('audio0');
        var picture = document.getElementById('picture');
        if(audio.paused){
            audio.play();
            picture.style.animationPlayState = "running";
        }else{
            audio.pause();
            picture.style.animationPlayState = "paused";
        }
    }


