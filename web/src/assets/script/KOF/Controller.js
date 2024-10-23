

export class Controller {
    constructor($canvas){
        this.$canvas = $canvas;
        this.pressedKeys = new Set();
        this.start();
    }


    start(){
        let outer = this ;
        this.$canvas.keydown(function(e){
            outer.pressedKeys.add(e.key);
        });
        this.$canvas.keyup(function(e){
            outer.pressedKeys.delete(e.key);
        });
    }
}
