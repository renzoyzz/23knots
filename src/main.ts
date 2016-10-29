import { RenderHandler } from './renderHandler/index';
import { Entity } from './entity/index';
import { Block } from './entity/block/index'
import { AudioHandler } from './audioHandler/index';

export class Main {

    public static instance: Main;
    public canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
    public renderHandler: RenderHandler;
    public audioHandler: AudioHandler;
    public paused: boolean = false;
    public gameLoop: number;
    public entities: Map<string, Entity> = new Map();
    public ticks: number = 1000 / 60;
    public lastTick: number = new Date().getTime();

    constructor() {
        Main.instance = this;
        window.onresize = () => {
            this.canvas.width = (this.canvas.height / 9) * 16;
        }
        this.renderHandler = new RenderHandler();
        this.audioHandler = new AudioHandler();
        this.entities.set('block', new Block(250, 250));
        this.entities.set('block1', new Block(350, 250));
        this.gameLoop = this.initializeGameLoop();
    }

    initializeGameLoop(): number {
        return setInterval(() => {
            if (this.paused) {
                return;
            }
            this.entities.forEach((entity) => {
                entity.tick();
            })
            this.lastTick = new Date().getTime();
        }, this.ticks);
    }
}

new Main();

