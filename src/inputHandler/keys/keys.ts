export class Key {
    public keyCode: number
    private pressed: boolean = false;

    constructor(keyCode: number) {
        this.keyCode = keyCode;
    }

    setPressed(newVal: boolean){
        this.pressed = newVal;
    }

    getPressed(){
        return this.pressed;
    }
}