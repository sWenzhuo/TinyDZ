import { AbstractGameObj } from "./AbstractGameObject";
import {Wall} from "@/assets/script/snake/Wall";

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

    start() {
        for (let i = 0; i < 1000; i ++ )
            if (this.create_walls())break;
    }

    update_size() {
        this.L = parseInt(Math.min(this.parent.clientWidth / this.cols, this.parent.clientHeight / this.rows));
        this.ctx.canvas.width = this.L * this.cols;
        this.ctx.canvas.height = this.L * this.rows;
    }

    update(){
        this.update_size();//动态调整大小
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