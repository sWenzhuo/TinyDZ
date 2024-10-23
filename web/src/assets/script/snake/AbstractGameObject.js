
const GameObjects=[];
export class AbstractGameObj{
    constructor(){
        //构造函数
        GameObjects.push(this);//
        //间隔时间
        this.timedelta = 0;
        this.has_called_start =false;
    }
    start(){
        //第一次挂载
    }

    update(){
        //更新

    }

}

//处理所有的游戏对象
let last_timestamp;
const step=  timestamp =>{
    for(let obj of GameObjects)
    {
        if(!obj.has_called_start){
            obj.has_called_start = true;
            obj.start();

        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step);
}
//执行step
requestAnimationFrame(step);