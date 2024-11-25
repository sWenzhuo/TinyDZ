import {GameObject} from "@/assets/script/KOF/GameObject";
import {Controller} from "@/assets/script/KOF/Controller";
import $ from "jquery";


export class GameMap extends GameObject{
    constructor(root){
        super();
        this.root = root;
        this.$canvas = $(`<canvas tabindex="0" width="1280" height="720"></canvas>`)
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas)
        this.$canvas.focus();
        this.controller = new Controller(this.$canvas);
        this.root.$kof.append(`<div class="kof-head">
        <div class="kof-head-hp-0"><div></div></div>
        <div class="kof-head-timer"></div>
        <div class="kof-head-hp-1"><div></div></div>
    </div>`)
        this.timeLeft = 600000;
        this.$timer = this.root.$kof.find(`.kof-head-timer`);
         // 设置父容器的背景为 GIF
         this.root.$kof.css({
            'background-image': 'url("path/to/your/background.gif")',  // GIF 背景路径
            'background-size': 'cover', // 背景自动缩放
            'background-position': 'center', // 背景居中
        });

        this.backgroundGif = new Image();
        this.backgroundGif.src =require(`@/assets/images/KOF/background/0.gif`);
    }
    start(){
    



    }
    update(){
        this.timeLeft -= this.timeDelta;
        if (this.timeLeft<0){
            this.timeLeft = 0;
            let [me,you] = this.root.players;
            if (me.status !== 6 && you.status!==6){
                you.status= me.status = 6;
                you.currentFrameCnt = me.currentFrameCnt = 0;
                me.vx = you.vx = 0;
            }
        }
        this.$timer.text(`${parseInt(this.timeLeft/1000)}`)

        this.render();
    }

    render(){
        this.ctx.clearRect(0,0,1280,720);
        this.ctx.drawImage(this.backgroundGif, 0, 0, 1280, 720);
    }
}
