    // 获取land元素
    var land=document.getElementById('land');
    // 设置背景移动的速度
    let landSpeed=5;
    // 定义landbac对象，添加属性x，x相当于land元素的背景图片的横坐标
    var landbac={
        x:0
    }

   
    // 设置循环定时器使land背景循环移动
    var landMove=setInterval(()=>{
        setTimeout("landMoving()", 0);
    },30);

    function landMoving(){
        // land背景向左移动 
        landbac.x-=landSpeed;
        if(landbac.x<-200) landbac.x=0;
        // 实现真正的背景图片的移动
        land.style.backgroundPositionX=landbac.x+'px';
    }
