import { AbstractGameObj } from "./AbstractGameObject";
import {Cell} from "@/assets/script/snake/Cell";


export class Snake extends AbstractGameObj{
    constructor(info,gamemap)
    {
        super();
        this.info = info;
        this.gamemap = gamemap;
        this.id = info.id;
        this.color = info.color;

        this.x = this.info.col;
        this.y = this.info.row;
        //蛇的身体
        this.cells = [new Cell(this.info.row,this.info.col)];//存放蛇的身体

        this.next_cell = null;//下一个目标的位置

        //移动速度
        this.speed =3;
        //移动方向
        this.direction = -1;
        this.status = "idle"; //idle表示静止,move表示正在移动,die表示死亡

        this.dr = [-1,0,1,0];
        this.dc = [0,1,0,-1];


        this.step =0 ;//回合数
        this.eps = 1e-2;//允许的误差

    }
    set_direction(num)
    {
        console.log(num);
        this.direction = num;
    }
    start(){
        
    }

    check_tail_increasing() {  // 检测当前回合，蛇的长度是否增加
        if (this.step <= 10) return true;
        if (this.step % 3 === 1) return true;
        return false;
    }

    next_step(){
        //下个回合
        const d= this.direction;
        
        this.next_cell = new Cell(this.cells[0].row+this.dr[d],this.cells[0].col+this.dc[d]);//虚拟节点


        console.log(this.next_cell);
        // this.direction = -1;
        // this.direction = -1;//清空
        this.status = "move";
        this.step++;

        const k  =this.cells.length;
        for (let i = k; i > 0; i -- ) {
            this.cells[i] = JSON.parse(JSON.stringify(this.cells[i - 1]));
        }
        if (!this.gamemap.check_valid(this.next_cell)) {  // 下一步操作撞了，蛇瞬间去世
            this.status = "die";
        }


    }



    //蛇的移动
    move(){

        const dx = this.next_cell.x -this.cells[0].x;
        const dy = this.next_cell.y - this.cells[0].y;

        const distance = Math.sqrt(dx*dx+dy*dy);

        if(distance<this.eps)
        {
            this.cells[0]=this.next_cell;
            this.next_cell =null;
            this.status = "idle";
            this.direction = -1;
           

            if (!this.check_tail_increasing()) {  // 蛇不变长
                this.cells.pop();
            }
        
    


        }else{
            const move_distance = this.speed * this.timedelta / 1000;  // 每两帧之间走的距离
            this.cells[0].x += move_distance * dx / distance;
            this.cells[0].y += move_distance * dy / distance;


            if (!this.check_tail_increasing()) {
                const k = this.cells.length;
                const tail = this.cells[k - 1], tail_target = this.cells[k - 2];
                const tail_dx = tail_target.x - tail.x;
                const tail_dy = tail_target.y - tail.y;
                tail.x += move_distance * tail_dx / distance;
                tail.y += move_distance * tail_dy / distance;
            }

        }

    }


    update(){
    
        if(this.status === "move")
        {
            this.move();
        }
        this.render();

    }

    render(){
        const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;
        ctx.fillStyle = this.color;
        if (this.status === "die") {
            ctx.fillStyle = "white";
        }

        for (const cell of this.cells) {
            ctx.beginPath();
            ctx.arc(cell.x * L, cell.y * L, L / 2 * 0.8, 0, Math.PI * 2);
            ctx.fill();
        }

        for (let i = 1; i < this.cells.length; i ++ ) {
            const a = this.cells[i - 1], b = this.cells[i];
            if (Math.abs(a.x - b.x) < this.eps && Math.abs(a.y - b.y) < this.eps)
                continue;
            if (Math.abs(a.x - b.x) < this.eps) {
                ctx.fillRect((a.x - 0.4) * L, Math.min(a.y, b.y) * L, L * 0.8, Math.abs(a.y - b.y) * L);
            } else {
                ctx.fillRect(Math.min(a.x, b.x) * L, (a.y - 0.4) * L, Math.abs(a.x - b.x) * L, L * 0.8);
            }
        }



    }



}