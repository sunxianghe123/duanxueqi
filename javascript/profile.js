/**
 * Created by 孙祥赫 on 2020/7/3.
 */
//    function black(){
//    //var questions = document.getElementsByClassName("radio_type");
//    var checkInputs = document.querySelectorAll('input:checked'); // 获取选中的input
//
//    for(var i = 0;i<checkInputs.length;i++){
//        var v = checkInputs[i].value;
//    }
//
//    var sum = 0;
//    for(var i = 0;i<checkInputs.length;i++){
//        if(checkInputs[i].checked.value==1){
//            sum += +checkInputs[i].value;
//        }
//    }
//    var score = sum*25;
//    //document.getElementById("endScore").innerHTML = score.toString();
//    alert(score);
//}

function add(){
    var checkInputs = document.querySelectorAll('input:checked'); // 获取选中的input

    for(var i = 0;i<checkInputs.length;i++){
        var v = checkInputs[i].value;
    }

    var sum = 0;
    for(var i = 0;i<checkInputs.length;i++){
        if(v==1){
            sum += +checkInputs[i].value;
        }
    }

    score = sum*25;
}

function  block(){
        alert("你的得分是："+score+"分");
}





