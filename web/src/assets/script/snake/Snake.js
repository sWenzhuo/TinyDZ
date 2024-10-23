import { AbstractGameObj } from "./AbstractGameObject";


export class Snake extends AbstractGameObj{
    constructor(info,gamemap)
    {
        super();
        this.info = info;
        this.gamemap = gamemap;
        this.id = info.id;
        this.color = info.color;
    }
    start(){
        
    }

    draw(color,x,y)
    {
        let  L =this.gamemap.L;
        this.gamemap.ctx.fillStyle = this.color;
        this.gamemap.ctx.beginPath();
        this.gamemap.ctx.arc(x * L + L / 2, y * L + L / 2, L * 0.5, 0, Math.PI * 2);
        this.gamemap.ctx.fill();
        this.gamemap.ctx.closePath();
    }

    //蛇的移动
    move(){

    }


    update(){
        this.render();


    }

    render(){
         //初始化蛇的位置
        let x=this.info.col;
        let y=this.info.row;
        this.draw(this.color,x,y);

    }



}