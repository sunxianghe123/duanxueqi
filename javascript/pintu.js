	//var x_id='aa';
	//var oipc=document.getElementById(x_id);
	function No1(x_id){
		var oipc=document.getElementById(x_id);
		var isDrag=false;//是否开始拖拽 false 不拖拽
		var disX,disY;//图片相对于图片的位置
		//alert(x_id);
	//鼠标按下时
		oipc.onmousedown=function(e){
			isDrag=true;
			this.style.cursor='move';
            e=e||window.event;//兼容性写法
            //鼠标位置
            var x=e.clientX;
            var y=e.clientY;
            //鼠标相对于图片的位置
            disX=x-this.offsetLeft;
            disY=y-this.offsetTop;
		}
 
		//鼠标移动时
		document.onmousemove=function(e){
		  if(!isDrag){
		  	return;
		  }
          e=e||window.event;//兼容性写法
          //鼠标位置
          var x=e.clientX;
          var y=e.clientY;
          //修改图片位置
          oipc.style.left=x-disX+'px';
          oipc.style.top=y-disY+'px';
		}
 
		//鼠标抬起时
		document.onmouseup=function(){
			isDrag=false;
			oipc.style.cursor='default';
			var x;
			var y;
			var z;
			var ming;
			if(x_id=="aa"){
				x=525;y=190;ming="第二题";/*z=document.getElementById("bbb");*/z='../img/village_1.png';
			}
			else if(x_id=="bb"){
				x=225;y=340;ming="第三题";/*z=document.getElementById("ccc");*/z='../img/shier_1.png';
			}
			else if(x_id=="cc"){
				x=225;y=190;ming="第一题";/*z=document.getElementById("aaa");*/z='../img/meihua_1.png';
			}
			else{
				x=525;y=340;ming="第四题";/*z=document.getElementById("ddd");*/z='../img/mifenghou_1.png';
			}
           if(oipc.style.left>=(x-50)+"px"&&oipc.style.left<=(x+150)+"px"&&oipc.style.top>=(y-50)+"px"&&oipc.style.top<=(y+75)+"px"){
			   //alert(ming+"正确！");
			   oipc.style.backgroundImage="url("+z+")";
			   oipc.style.left=x+'px';
			   oipc.style.top=y+'px';
			   oipc.style.width=300+'px';
			   oipc.style.height=150+'px';
			   //z.style.opacity=1;
		   }
		}
	}