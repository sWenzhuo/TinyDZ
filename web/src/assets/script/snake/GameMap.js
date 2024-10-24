import { AbstractGameObj } from "./AbstractGameObject";
import {Wall} from "@/assets/script/snake/Wall";
import { Snake } from "./Snake";

export class GameMap extends AbstractGameObj{
    constructor(ctx,parent){
        super();
        //画布
        this.ctx = ctx;
        //父组件
        this.parent  = parent;
        this.L = 0 ;//每个小方格的长度
        //行数
        this.rows = 18;
        //列数
        this.cols = 18;
        //墙的个数
        this.inner_walls_count =20;
        this.walls = [];

        //蛇
        this.snakes = [
            new Snake({id:0,row:this.rows-2,col:1,color:"#4876EC"},this),
            new Snake({id:1,row:1,col:this.cols-2,color:"#F94848"},this)
        ]
    }



    //两个蛇同时移动才动
    check_ready()
    {
        for(const snake of this.snakes){
          
            if(snake.status !=="idle")return false;
            if(snake.direction ===-1)return false;
        }
        return true;
    }


    check_connectivity(g, sx, sy, tx, ty) {
        if (sx == tx && sy == ty) return true;
        g[sx][sy] = true;

        let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];
        for (let i = 0; i < 4; i ++ ) {
            let x = sx + dx[i], y = sy + dy[i];
            if (!g[x][y] && this.check_connectivity(g, x, y, tx, ty))
                return true;
        }

        return false;
    }

       //是否合法
    check_valid(cell) {  // 检测目标位置是否合法：没有撞到两条蛇的身体和障碍物
        for (const wall of this.walls) {
            if (wall.r === cell.row && wall.c === cell.col)
                return false;
        }

        for (const snake of this.snakes) {
            let k = snake.cells.length;
            if (!snake.check_tail_increasing()) {  // 当蛇尾会前进的时候，蛇尾不要判断
                k -- ;
            }
            for (let i = 0; i < k; i ++ ) {
                if (snake.cells[i].r === cell.row && snake.cells[i].c === cell.col)
                    return false;
            }
        }
        return true;
    }

    create_walls() {
        let x =this.cols;
        let y = this.rows;


        const g = [];
        for (let r = 0; r < this.rows; r ++ ) {
            g[r] = [];
            for (let c = 0; c < this.cols; c ++ ) {
                g[r][c] = false;
            }
        }

        //画上面和下面的墙
        for(let i=0;i<x;i++){
            g[0][i] = g[y-1][i] = true;
          
        }

        //画左边和右边的墙
        for(let i=0;i<y;i++)
        {
            g[i][0] = g[i][x-1] = true;
       
        }

        //随机化墙
         // 创建随机障碍物
         for (let i = 0; i < this.inner_walls_count / 2; i ++ ) {
            for (let j = 0; j < 1000; j ++ ) {
                let r = parseInt(Math.random() * this.rows);
                let c = parseInt(Math.random() * this.cols);
                if (g[r][c] || g[c][r]) continue;
                if (r == this.rows - 2 && c == 1 || r == 1 && c == this.cols - 2)
                    continue;

                g[r][c] = g[c][r] = true;
                break;
            }
        }

        const copy_g = JSON.parse(JSON.stringify(g));
        if (!this.check_connectivity(copy_g, this.rows - 2, 1, 1, this.cols - 2))return false;

        for (let r = 0; r < this.rows; r ++ ) {
            for (let c = 0; c < this.cols; c ++ ) {
                if (g[r][c]) {
                    this.walls.push(new Wall(r, c, this));
                }
            }
        }
        return true;
    }

    add_listening_events() {
        this.ctx.canvas.focus();

        const [snake0, snake1] = this.snakes;

    // this.ctx.canvas
        window.addEventListener("keydown", e => {
            if (e.key === 'w') snake0.set_direction(0);
            else if (e.key === 'd') snake0.set_direction(1);
            else if (e.key === 's') snake0.set_direction(2);
            else if (e.key === 'a') snake0.set_direction(3);
            else if (e.key === 'ArrowUp') snake1.set_direction(0);
            else if (e.key === 'ArrowRight') snake1.set_direction(1);
            else if (e.key === 'ArrowDown') snake1.set_direction(2);
            else if (e.key === 'ArrowLeft') snake1.set_direction(3);
        });
    }


    start() {
        for (let i = 0; i < 1000; i ++ )
            if (this.create_walls())break;
        this.add_listening_events();
    }

    update_size() {
        this.L = parseInt(Math.min(this.parent.clientWidth / this.cols, this.parent.clientHeight / this.rows));
        this.ctx.canvas.width = this.L * this.cols;
        this.ctx.canvas.height = this.L * this.rows;
    }


    next_step(){

        for(const snake of this.snakes)snake.next_step();
    }

    update(){
        this.update_size();//动态调整大小

        if(this.check_ready())
        {
            this.next_step();
        }
        this.render();
    }

    

    render(){
        //画地图
        const color_even = "#AAD751", color_odd = "#A2D149";

        for(let r=0;r<this.rows;r++)
            for(let c=0;c<this.cols;c++)
            {
                if((r+c)%2==0)
                {
                    this.ctx.fillStyle = color_even;
                }
                else{
                    this.ctx.fillStyle = color_odd;
                }
                this.ctx.fillRect(c*this.L,r*this.L,this.L,this.L);

            }
    
    }




}