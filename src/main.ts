import { RenderHandler } from './renderHandler/index';

export class Main {

    public static instance:Main;
    public canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
    public fpsCounter: HTMLElement = <HTMLElement>document.getElementById('fps-counter');
    public renderHandler: RenderHandler
    public running: boolean = true;
    public ticksPerSec: number = 60;
    public frames: number = 0;    
    public interval: number;
    public seconds: number;

    constructor() {
        Main.instance = this;
        window.onresize = () => {
            this.canvas.width = (this.canvas.height/9) * 16;
        }

        

        this.renderHandler = new RenderHandler();
        this.interval = this.getGameLoop();
    }

    getGameLoop(): number {
        this.seconds = Math.floor(new Date().getTime()/1000); 
        return setInterval(() => {
            let time = Math.floor(new Date().getTime()/1000);
            
            if(this.seconds < time){
                this.seconds = time;
                this.fpsCounter.innerText = `FPS:${this.frames}`;
                this.frames = 0;
            }
            this.renderHandler.render();
            this.frames++;
        }, 0);
    }
}

new Main();
