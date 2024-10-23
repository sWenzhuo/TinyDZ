import {AbstractGameObj} from "@/assets/script/snake/AbstractGameObject";

//墙
export class Wall extends AbstractGameObj{
    constructor(r,c,gamemap) {
        super();

        this.r = r;
        this.c = c;
        this.gamemap = gamemap;
        this.color = "#B37226";
    }


    update() {
        this.render();
    }

    render(){
        const  L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.color;

        ctx.fillRect(this.c*L,this.r*L,L,L);
    }

}