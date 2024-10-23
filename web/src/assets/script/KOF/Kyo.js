import {Player} from "@/assets/script/KOF/Play";
import {GIF} from "@/assets/script/KOF/utils/Gif";

export class Kyo extends Player {
    constructor(root,info){
        super(root,info)
        this.initAnimations();
    }
    initAnimations(){
        let outer = this ;
        let offsets = [0,-22,-22,-140,0,0,0];
        for (let i = 0 ;i<7;i++){
            let gif = GIF()
            gif.load(require(`@/assets/images/KOF/Player/kyo/${i}.gif`));
            this.animations.set(i,{
                gif: gif,
                frame_cnt: 0,
                frame_rate: 5,
                offsetY : offsets[i],
                loaded: false,
                scale : 2,
            })
            gif.onload= function(){
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded= true;
                if (i===3){
                    obj.frame_rate = 4;
                }
            }
        }
    }
}
