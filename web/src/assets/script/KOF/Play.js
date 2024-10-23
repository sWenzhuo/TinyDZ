import {GameObject} from "@/assets/script/KOF/GameObject";
export class Player extends GameObject{
    constructor(root,info){
        super();
        this.root = root ;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width
        this.height = info.height
        this.vx = 0;
        this.vy = 0;
        this.gravity = 50
        this.speedx = info.speedx;
        this.speedy = info.speedy;
        this.ctx = this.root.gameMap.ctx;
        this.id = info.id;
        this.direction = 1;
        this.pressedKeys = this.root.gameMap.controller.pressedKeys;
        this.status = 3 ;
        this.animations = new Map();
        this.currentFrameCnt =0 ;
        this.hp = 100;
        this.$hp = this.root.$kof.find(`.kof-head-hp-${this.id}>div`)
    }
    start(){

    }
    update(){
        this.update_control();
        this.update_move();
        this.update_direction();
        this.update_attack();
        this.render();
    }
    render(){
        let status = this.status
        if (status === 1 && this.vx *this.direction < 0){
            status = 2 ;
        }
        let obj  = this.animations.get(status )
        if (obj && obj.loaded){
            let k = parseInt(this.currentFrameCnt/obj.frame_rate)%obj.frame_cnt;
            let image = obj.gif.frames[k].image
            if (this.direction > 0 ){
                this.ctx.drawImage(image,this.x,this.y+obj.offsetY,image.width * obj.scale, image.height * obj.scale)
            }else{
                this.ctx.save();
                this.ctx.scale(-1,1);
                this.ctx.translate(-this.root.gameMap.$canvas.width(),0)
                this.ctx.drawImage(image, this.root.gameMap.$canvas.width() - this.x - this.width, this.y + obj.offsetY, image.width * obj.scale, image.height * obj.scale);
                this.ctx.restore()
            }
        }
        if (status ===4  || status ===5 || status ===6 ){
            if(parseInt((this.currentFrameCnt+1)/obj.frame_rate)=== obj.frame_cnt-1){
                if (status !== 6){
                    this.status = 0 ;
                }else{
                    this.currentFrameCnt --;
                }
            }
        }
        this.currentFrameCnt++;
    }
    update_direction(){
        if (this.status === 6){
            return
        }
        let players = this.root.players
        if (players[0] && players[1]){
            let me = players[this.id],you = players[1-this.id]
            if (me.x< you.x)this.direction = 1;
            else this.direction = -1;
        }
    }
    update_move(){
        this.vy += this.gravity
        this.y += this.vy *this.timeDelta/1000;
        if(this.y>450){
            this.y=450;
            this.vy = 0;
            if (this.status === 3){
                this.status = 0;
            }
        }
        this.x += this.vx*this.timeDelta/1000;
        if (this.x <0) {
            this.x = 0 ;
        }else if (this.x + this.width >  this.root.gameMap.$canvas.width() ){
            this.x= this.root.gameMap.$canvas.width() - this.width
        }
    }
    update_control(){
        let w,a,d,space ;
        if (this.id === 0){
            w = this.pressedKeys.has('w')
            a = this.pressedKeys.has('a')
            d = this.pressedKeys.has('d')
            space = this.pressedKeys.has(' ')
        }else{
            w = this.pressedKeys.has('ArrowUp')
            a = this.pressedKeys.has('ArrowLeft')
            d = this.pressedKeys.has('ArrowRight')
            space = this.pressedKeys.has('Enter')
        }
        if (this.status === 0 || this.status ===1){
            if (space){
                this.status = 4;
                this.vx = 0;
                this.currentFrameCnt =0 ;
            }
            else if (w){
                if (a){
                    this.vx = -this.speedx
                }else if (d){
                    this.vx = this.speedx
                }else {
                    this.vx = 0;
                }
                this.vy = -this.speedy;
                this.status = 3 ;
                this.currentFrameCnt = 0;
            }else if (a){
                this.vx = -this.speedx
                this.status = 1;
            }else if (d){
                this.vx = this.speedx
                this.status = 1 ;
            }else{
                this.vx = 0 ;
                this.status = 0 ;
            }
        }
    }
    update_attack(){
        if (this.status === 4 && this.currentFrameCnt === 18 ){
            let you = this.root.players[1-this.id];
            let r1;
            if (this.direction > 0){
                r1 = {
                    // this.x+this.width,this.y+45,95 ,20
                    x1:this.x+this.width,
                    y1:this.y+45,
                    x2:this.x+this.width+95,
                    y2:this.y+45+20,
                }
            }else{
                r1 = {
                    //this.x-95,this.y+45,95,20
                    x1:this.x-95,
                    y1:this.y+45,
                    x2:this.x-95+95,
                    y2:this.y+45+20,
                }
            }
            let r2 = {
                x1: you.x,
                y1: you.y,
                x2: you.x+you.width,
                y2: you.y+you.height,
            }
            if (this.isCollision(r1,r2)){
                you.isAttacked();
            }
        }
    }
    isCollision(r1,r2){
        if (Math.max(r1.x1,r2.x1)>Math.min(r1.x2,r2.x2))return false;
        if (Math.max(r1.y1,r2.y1)>Math.min(r1.y2,r2.y2))return false;
        return true;
    }
    isAttacked(){
        if (this.status === 6){
            return
        }
        this.status = 5;
        this.currentFrameCnt =0  ;
        this.hp = Math.max(0,this.hp-10);
        this.$hp.animate({
            width:this.$hp.parent().width()*this.hp/100,
        })
        if (this.hp === 0 ){
            this.status = 6
            this.currentFrameCnt =0 ;
            this.vx = 0;
        }
    }
}