// 获取bird元素
var birdElem=document.getElementById('bird');

// 设置小鸟初始纵坐标
const beginy=200;
// 将小鸟的绝对定位距离上方和左侧的距离封装到bird对象中，代表bird的x,y坐标
        // 设置小鸟下降的速度
var bird={
    x:birdElem.offsetLeft,
    y:birdElem.offsetTop, 
    ySpeed:0
}

// 小鸟添加重力
let hasEnergy=false;
function  changeSpeed(){
    if (!hasEnergy) {
        bird.ySpeed++;
        bird.y += bird.ySpeed * 0.4;  
    } 
    else {
        bird.ySpeed--;  
        bird.y -= bird.ySpeed * 0.1;   
        if (bird.ySpeed <= 0) {
            hasEnergy = false;   
            }
    }
    
}

// 小鸟振翅飞翔+切换颜色
var j = 0;
let  birdFly=setInterval(()=>{
    setTimeout(()=>{
        birdElem.style.backgroundImage="url(../bird-game/image/bird"+choice+"_" + j + ".png)"
        j++;
        if( j == 3){
            j=0;
        }
    }, 0)
} , 100);

