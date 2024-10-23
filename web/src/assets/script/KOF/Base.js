import {GameMap} from "@/assets/script/KOF/GameMap";
import {Kyo} from "@/assets/script/KOF/Kyo";
import $ from "jquery";
export class KOF{
    constructor(element){
     
        this.$kof = $(element);


        this.gameMap = new GameMap(this);
    


        this.players = [
            new Kyo(this,{
                id: 0,
                speedx:400,
                speedy:1000,
                x: 200,
                y: 100 ,
                height:215,
                width: 130,
            }),
            new Kyo(this,{
                id:1,
                speedx:400,
                speedy:1000,
                x:900,
                y:100,
                height: 215,
                width: 130,
            })
        ]
    }
}