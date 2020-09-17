/**
 * Created by 孙祥赫 on 2020/8/19.
 */

document.write("<script language=javascript src='../javascript/sweetalert-dev.js'></script>");


var score = 0;


function plus(){
    var checkInputs = document.querySelectorAll('input:checked'); // 获取选中的input

    var sum = 0;
        for(var i = 0;i<checkInputs.length;i++){
            if(checkInputs[i].value==1){
                sum += +checkInputs[i].value;
            }
        }
    score = sum*20;
}

//var result = "你的得分是："+score+"分";
function  block(){
    document.getElementById("number").innerHTML = score;
    document.getElementById("middle").style.visibility = "visible";
}
