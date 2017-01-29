import { Key, BasicKeys } from './index';
import { Main } from 'src/main';

export class InputHandler {
    public basicKeys: Map<string, Key> = new Map();
    public keyBidings: KeyBindingsJSON;

    constructor() {
        this.loadKeyBindings();

        window.onkeydown = (e: KeyboardEvent) => {
            this.basicKeys.forEach((val, index, map) => {
                let key = this.basicKeys.get(index);
                if (key.keyCode == e.keyCode) {
                    key.setPressed(true);
                    return;
                }
            });
        }

        window.onkeyup = (e: KeyboardEvent) => {
            this.basicKeys.forEach((val, index, map) => {
                let key = this.basicKeys.get(index);
                if (key.keyCode == e.keyCode) {
                    key.setPressed(false);
                    return;
                }
            });

        }

        window.onblur = () => {
            this.basicKeys.forEach((val, index, map) => {
                let key = this.basicKeys.get(index);
                key.setPressed(false);
            });
        }

        window.oncontextmenu = (e: PointerEvent) => {
            this.basicKeys.forEach((val, index, map) => {
                let key = this.basicKeys.get(index);
                key.setPressed(false);
            });
        }
    }

    private loadKeyBindings(): void {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', '/config/keybindings.json', false);
        xmlhttp.overrideMimeType('application/json');
        xmlhttp.send();
        this.keyBidings = JSON.parse(xmlhttp.responseText);
        for (let binding in this.keyBidings.basic) {
            let keyCode = this.keyBidings.basic[binding];
            this.basicKeys.set(binding, new Key(keyCode));
        }
    }

    public isBasicKeyPressed(key: string): boolean {
        return this.basicKeys.get(key).getPressed();
    }

    public isBasicKeyPressedAndUnused(key: string): boolean {
        return this.basicKeys.get(key).getKeyUsed();
    }

}

interface KeyBindingsJSON {
    basic: BasicKeyBindings
}

interface BasicKeyBindings {
    [key: string]: number
}

