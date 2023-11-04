// 设置初始分数为0
let scoreDemo=0;
// 设置水管移动速度
let pipeSpeed=3;

// 创建水管
function createPipe(position){
    var pipe={};
    pipe.x=position;
    // 设置上管道的高度为150—250
    pipe.upHeight=parseInt(Math.random()*100)+150;
    // 设置管道之间的距离为100
    // 得出下管道的高度
    pipe.downHeight=500-pipe.upHeight-100;
    // 得出下管道的x坐标
    pipe.downposition=100+pipe.upHeight;

    // 创建上管道
    var upPipe=document.createElement('div');
    // 设置上管道的宽高和绝对定位的位置
    upPipe.style.width='52px';
    upPipe.style.height=pipe.upHeight+'px';
    upPipe.style.position='absolute';
    upPipe.style.background='url(../bird-game/pipe2.png) no-repeat center  bottom'
    upPipe.style.left=pipe.x+'px';
    upPipe.style.top='0px';
    sky.appendChild(upPipe);

    // 创建下管道
    var downPipe=document.createElement('div');
     // 设置下管道的宽高和绝对定位的位置
    downPipe.style.width='52px';
    downPipe.style.height=pipe.downHeight+'px';
    downPipe.style.position='absolute';
    downPipe.style.background='url(../bird-game/pipe1.png) no-repeat center  top'
    downPipe.style.left=pipe.x+'px';
    downPipe.style.top=pipe.downposition+'px';
    sky.appendChild(downPipe);
    let scorePosition=position;
    let  pipeMove=setInterval(()=>{
        setTimeout(()=>{
            if(status==1&&running==true){
                pipe.x-=pipeSpeed;
                scorePosition-=pipeSpeed;
                upPipe.style.left=pipe.x+'px';
                downPipe.style.left=pipe.x+'px';
                // birdElem.style.top=bird.y+'px';这条语句的作用：
                // 如果小鸟和管道碰撞，则游戏结束，
                // 此时小鸟的位置还是碰撞之前的位置，但是小鸟位置在数值上已经发生改变，出现显示上的错误，
                // 因此再次将小鸟纵坐标上的值赋给birdElem.style.top，实现刷新
                birdElem.style.top=bird.y+'px';
               
                // 小鸟的中心X,Y坐标
                let centerX1 = bird.x + birdElem.offsetWidth/2;  
                let centerY1 = bird.y + birdElem.offsetHeight/2; 
                // 上管道的中心X,Y坐标
                let centerX2 = upPipe.offsetLeft + upPipe.offsetWidth / 2;
                let centerY2 = upPipe.offsetTop + upPipe.offsetHeight / 2;
                // 下管道的中心X,Y坐标
                let centerX3 = downPipe.offsetLeft + downPipe.offsetWidth / 2;
                let centerY3 = downPipe.offsetTop + downPipe.offsetHeight / 2;
    
                let disX = Math.abs(centerX1 - centerX2); //小鸟和上管道中心点的横向距离
                let disY = Math.abs(centerY1 - centerY2);//小鸟和上管道中心点的纵向距离
                // 小鸟与上管道是否碰撞
                let upHit=(disX<(birdElem.offsetWidth + upPipe.offsetWidth)/2)&&(disY<(birdElem.offsetHeight + upPipe.offsetHeight)/2);
    
                let disX1 = Math.abs(centerX1 - centerX3);//小鸟和下管道中心点的横向距离
                let disY1 = Math.abs(centerY1 - centerY3);//小鸟和下管道中心点的纵向距离
                // 小鸟与上管道是否碰撞
                let downHit=disX1<(birdElem.offsetWidth + downPipe.offsetWidth)/2&&disY1 < (birdElem.offsetHeight + downPipe.offsetHeight)/2;
    
                if(upHit||downHit){
                    status=2;
                    running=false;
                    hitAudio.play();
                    setTimeout('overAudio.play()',500);
                }        
                // 当管道恰好完全超出窗口时，改变管道位置，实现管道循环出现
                if(pipe.x<-52){    
                    pipe.x=800;
                }
                // 当管道恰好越过小鸟，分数加1
                if(scorePosition<-12){ 
                    scoreDemo++;
                    scorePosition=800;
                    scoreAudio.play();
                }
                score.innerHTML='分数：'+scoreDemo;
            }
        },0);
    },20);
    
}

// 控制水管出现时间
setTimeout(function(){
    createPipe(600);
    createPipe(800);
    createPipe(1000);
    createPipe(1200);
},100);



