let GAME_OBJECTS = []
export class GameObject{
    constructor(){
        GAME_OBJECTS.push(this);
        this.timeDelta = 0;
        this.isFirstCalled = true;
    }
    start(){

    }
    update(){
    }
    destroy(){
        for (let i in GAME_OBJECTS){
            if (GAME_OBJECTS[i]===this){
                GAME_OBJECTS.splice(i,1);
            }
        }
    }
}


let LAST_TIMESTAMP = 0 ;
let GAME_OBJECT_FRAME = function(timestamp){
    for (let object of GAME_OBJECTS){
        if (object.isFirstCalled){
            object.start();
            object.isFirstCalled = false;
        }else{
            object.timeDelta = timestamp-LAST_TIMESTAMP;
            object.update();
        }
    }
    LAST_TIMESTAMP = timestamp;
    requestAnimationFrame(GAME_OBJECT_FRAME);
}
requestAnimationFrame(GAME_OBJECT_FRAME);
