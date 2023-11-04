var changeAudio=document.getElementById('change-audio');
var flyAudio=document.getElementById('fly-audio');
var hitAudio=document.getElementById('hit-audio');
var scoreAudio=document.getElementById('score-audio');
var overAudio=document.getElementById('over-audio');
var beginAudio=document.getElementById('begin-audio');
 
 // 设置游戏的状态 0:未开始 1:进行中  2:失败
  let status=0;
  // 判断游戏进行还是暂停
  let running=false
  setInterval(()=>{  
      setTimeout(()=>{
        if(status==0&&running==false){ 
            // land不动
            clearInterval(landMove);
          }
        if(status==1&&running==true){ 
            // 小鸟不断下降
            changeSpeed();
            birdElem.style.top=bird.y+'px'; 
            // land移动
            landMove=setInterval(landMoving(),30);
    
        }
        if(status==2&&running==false){
            end.style.display='block';
            // 小鸟不振翅
            clearInterval(birdFly);
            // land不动
            clearInterval(landMove);
        }  
        if(bird.y<0||(bird.y+birdElem.offsetHeight>500)){            
            hitAudio.play();
            setTimeout('overAudio.play()',500);
            status=2;
            running=false;
            bird.y=beginy;
            clearInterval(birdFly);
            clearInterval(landMove);   
        }
      },0);
},30)
