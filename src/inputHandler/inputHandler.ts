import { Key, BasicKeys } from './index';
import { Main } from 'src/main';
import { Entity } from 'src/entity/interfaces';

export class InputHandler {
    private entities: Map<string, Entity> = Main.instance.entities;
    public basicKeys: Map<string, Key> = new Map();
    public keyBidings: KeyBindingsJSON;


    constructor() {
        this.loadKeyBindings();

        window.onkeydown = (e: KeyboardEvent) => {
            this.basicKeys.forEach((val, index, map) => {
                let key = this.basicKeys.get(index);
                if (key.keyCode == e.keyCode) {
                    key.setPressed(true);
                    this.executeInput();
                    return;
                }
            });
        }

        window.onkeyup = (e: KeyboardEvent) => {
            this.basicKeys.forEach((val, index, map) => {
                let key = this.basicKeys.get(index);
                if (key.keyCode == e.keyCode) {
                    key.setPressed(false);
                    this.executeInput();
                    return;
                }
            });
        }

        window.onblur = () => {
            this.basicKeys.forEach((val, index, map) => {
                let key = this.basicKeys.get(index);
                key.setPressed(false);
                this.executeInput();
            });
        }

        window.oncontextmenu = (e: PointerEvent) => {
            this.basicKeys.forEach((val, index, map) => {
                let key = this.basicKeys.get(index);
                key.setPressed(false);
                this.executeInput();
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

    public executeInput(): void {
        this.entities.forEach((entity) => {entity.handleInput()})
    }

}

interface KeyBindingsJSON {
    basic: BasicKeyBindings
}

interface BasicKeyBindings {
    [key: string]: number
}

