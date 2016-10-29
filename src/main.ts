import { RenderHandler } from './renderHandler/index';
import { Entity } from './entity/index';
import { Block } from './entity/block/index'

export class Main {

    public static instance: Main;
    public canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
    public renderHandler: RenderHandler
    public paused: boolean = false;
    public gameLoop: number;
    public entities: Map<string, Entity> = new Map();
    public ticks: number = 60;

    constructor() {
        Main.instance = this;
        window.onresize = () => {
            this.canvas.width = (this.canvas.height / 9) * 16;
        }
        this.renderHandler = new RenderHandler();
        this.entities.set('block', new Block(250, 250));
        this.gameLoop = this.initializeGameLoop();

    }

    initializeGameLoop(): number {

        let ticks = this.ticks;
        return setInterval(() => {
            if (this.paused) {
                return;
            }
            this.entities.forEach((entity) => {
                entity.tick();
            })

        }, 1000 / this.ticks);
    }
}

new Main();
