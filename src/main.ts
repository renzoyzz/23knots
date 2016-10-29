import { RenderHandler } from './renderHandler/index';
import { Entity } from './entity/index';
import { Block } from './entity/block/index'

export class Main {

    public static instance: Main;
    public canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
    public fpsCounter: HTMLElement = <HTMLElement>document.getElementById('fps-counter');
    public renderHandler: RenderHandler
    public running: boolean = true;
    public ticksPerSec: number = 60;
    public frames: number = 0;
    public interval: number;
    public seconds: number;
    public entities: Map<string, Entity> = new Map();
    public ticks: number = 60;

    constructor() {
        Main.instance = this;
        window.onresize = () => {
            this.canvas.width = (this.canvas.height / 9) * 16;
        }
        this.renderHandler = new RenderHandler();

        this.entities.set('block', new Block(250, 250));



        this.interval = this.getGameLoop();

    }

    getGameLoop(): number {
        setInterval(() => {
            this.fpsCounter.innerText = `FPS:${this.frames}`;
            this.frames = 0;
        }, 1000)
         setInterval(() => {
            this.renderHandler.render();
            this.frames++;
        }, 0);
        let ticks = this.ticks;
        return setInterval(() => {
            this.entities.forEach((entity) => {
                entity.tick();
            })
        },1000/this.ticks);
    }
}

new Main();
