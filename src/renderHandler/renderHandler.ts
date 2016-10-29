import { Main } from '../main';
import { Entity } from '../entity/index'

export class RenderHandler {
    public fpsCounter: HTMLElement = <HTMLElement>document.getElementById('fps-counter');
    public ctx: CanvasRenderingContext2D
    public canvasWidth: number;
    public canvasHeight: number;
    public renderLoop: number;
    public frames: number;


    constructor() {
        this.canvasWidth = Main.instance.canvas.width;
        this.canvasHeight = Main.instance.canvas.height;
        this.ctx = Main.instance.canvas.getContext('2d');
        this.ctx.webkitImageSmoothingEnabled = false;
        this.initializeRenderLoop();
    }

    initializeRenderLoop() {
        setInterval(() => {
            this.fpsCounter.innerText = `FPS:${this.frames}`;
            this.frames = 0;
        }, 1000)
        this.renderLoop = setInterval(() => {
            if(Main.instance.paused){
                return;
            }
            this.render();
            this.frames++;
        }, 0);
    }


    public render() {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
        Main.instance.entities.forEach((entity) => {
            this.ctx.beginPath();
            this.ctx.rect(entity.xPos, entity.yPos, entity.width, entity.height);
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        })
    }


}