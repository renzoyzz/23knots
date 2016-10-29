import { KeyBindingsJSON } from './index';

export class InputHandler {
    public pressedKeys: Map<number, boolean>
    public keyBidings: KeyBindingsJSON

    constructor() {
        this.loadKeyBindings();
        window.onkeydown = this.handleKeyDownEvent;
        window.onkeyup = this.handleKeyDownEvent;

    }

    loadKeyBindings() {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', './keybindings.json', false);
        xmlhttp.overrideMimeType('application/json');
        xmlhttp.send();
        this.keyBidings = JSON.parse(xmlhttp.responseText);
        console.log(this.loadKeyBindings);
    }


    handleKeyDownEvent(e: KeyboardEvent) {

    }

    handleKeyUpEvent(e: KeyboardEvent) {

    }

}