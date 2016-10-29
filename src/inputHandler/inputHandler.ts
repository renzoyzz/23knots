import { Key, BasicKeys } from './index';

export class InputHandler {
    public basicKeys: Map<string, Key> = new Map();
    public keyBidings: KeyBindingsJSON;

    constructor() {
        this.loadKeyBindings();
        window.onkeydown = this.handleKeyDownEvent;
        window.onkeyup = this.handleKeyDownEvent;
    }

    loadKeyBindings() {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', '/config/keybindings.json', false);
        xmlhttp.overrideMimeType('application/json');
        xmlhttp.send();
        this.keyBidings = JSON.parse(xmlhttp.responseText);
        for(let binding in this.keyBidings.basic){
            let keyCode = this.keyBidings.basic[binding];
            this.basicKeys.set(binding, new Key(keyCode));
        }
    }

    isBasicKeyPressed(key:string){
        return this.basicKeys.get(key).getPressed();
    }



    handleKeyDownEvent(e: KeyboardEvent) {
        for(let val in this.basicKeys){
            let key = this.basicKeys.get(val);
            if(key.keyCode == e.keyCode){
                key.setPressed(true);
            }
        }
    }

    handleKeyUpEvent(e: KeyboardEvent) {
        for(let val in this.basicKeys){
            let key = this.basicKeys.get(val);
            if(key.keyCode == e.keyCode){
                key.setPressed(false);
            }
        }
    }
}

interface KeyBindingsJSON {
    basic: BasicKeyBindings
}

interface BasicKeyBindings {
    [key: string]: number
}

