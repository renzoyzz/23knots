import { Main } from 'src/main';
import { Entity } from 'src/entity/interfaces'

export class RenderHandler {
    public fpsCounter: HTMLElement = <HTMLElement>document.getElementById('fps-counter');
    public ctx: CanvasRenderingContext2D
    public canvasWidth: number;
    public canvasHeight: number;
    public renderLoop: number;
    public frames: number;
    public currentTime: number;


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
            if (Main.instance.paused) {
                return;
            }
            this.render();
            this.frames++;
        }, 0);
    }

    private clearCanvas() {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
    }

    public render() {
        this.clearCanvas();
        let interpolateVal = (Main.instance.lastTick - new Date().getTime()) / Main.instance.ticks;
        Main.instance.entities.forEach((entity) => {
            this.interpolate(entity, interpolateVal);
        })
        
    }

    private interpolate(entity: Entity, interpolateVal: number) {
        let xPos = (((entity.startXPos - entity.endXPos) * interpolateVal) + entity.startXPos) - (entity.width / 2);
        let yPos = (((entity.startYPos - entity.endYPos) * interpolateVal) + entity.startYPos) - (entity.height / 2);
        this.ctx.beginPath();
        this.ctx.rect(xPos, yPos, entity.width, entity.height);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
    }


}