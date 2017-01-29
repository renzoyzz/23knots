export class Key {
    public keyCode: number
    private keyUsed: boolean = false;
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
    
    public setKeyUsed(){
        this.keyUsed = true;
    }

    public getKeyUsed(): boolean {
        if(!this.pressed){
            this.keyUsed = false;
            return false;
        }
        if(this.keyUsed){
            return false;
        }
        this.keyUsed = true;
        return true;
    }

}