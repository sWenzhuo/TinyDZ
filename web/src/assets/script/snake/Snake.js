

export class Snake extends AbortController{
    constructor(info,gamemap)
    {
        super();
        this.gamemap = gamemap;
        this.id = info.id;
        this.color = info.color;
    }

    start(){
        //初始化蛇的位置
        
    }

    //蛇的移动
    move(){

    }


    update(){

        this.render();

    }

    render(){

    }



}