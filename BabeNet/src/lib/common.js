function animate(ele,obj,time,fn){
    var count = 0 ;
    for(var attr in obj){
        count ++;
        playAnimate(attr);
    }
    function playAnimate(attr){
        // var attr = "width";
        var target = obj[attr];
        target = attr == "opacity"? target*100 : target;
        var timer = attr + "Timer";
        clearInterval(ele[timer]);
        ele[timer] = setInterval(function(){
            var current = getComputedStyle(ele)[attr];
            //将当前值的单位提取出来
            var reg = /[a-z]+$/;
            var unit = current.match(reg);
            unit = unit? unit[0] : '';
            //提取当前值
            current = parseFloat(current);
            current  = attr == "opacity"? current *100 :current;
        
            var speed = (target - current)/10;
            speed = speed>0? Math.ceil(speed):Math.floor(speed);
            current += speed;
            if(current == target){
                clearInterval(ele[timer]);
                count --;
                if(count == 0 && fn && typeof fn == "function"){
                    fn();
                }
                
            }
            current = attr == "opacity"? current/100 : current;
            ele.style[attr] = current + unit;
        }, time)
    }
}