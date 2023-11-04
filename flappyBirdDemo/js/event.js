//添加键盘监听事件,当按下上下键时切换颜色
var choice=0;
//设置空格按下的次数
let count=0;
document.onkeydown=function(event){     
    // 小鸟改变颜色
    if((event.keyCode==38||event.keyCode==40)){
        changeAudio.play(); 
        choice++;
        if(choice==3) choice=0; 
    }
    // 空格键实现暂停
    if(event.keyCode==32&&status==1){
        if(count%2==0){
            running=false;
            pause.style.display='block';
            clearInterval(landMove);
        }
        else{
            running=true;
            pause.style.display='none';
        }
        count++;
    }
}

var land=document.getElementById('land');
 // 鼠标点击事件
 land.addEventListener('click',function(){
    if(status==0&&running==false){
        status=1;
        running=true;
        start.style.display='none';
    }
    if(status==1&&running==true){ 
        bird.y-=20;         
        flyAudio.play();                      
        hasEnergy = true;
        bird.ySpeed = 2;
    }
    if(status==2&&running==false){
        beginAudio.play();
        setTimeout(function(){
            location.reload();
            status=0;
            bird.y=beginy;          
        },500);             
    }     
});
