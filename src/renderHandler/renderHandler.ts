import { Main } from '../main';
import { Entity } from '../entity/index'

export class RenderHandler {
    public ctx: CanvasRenderingContext2D
    public canvasWidth: number;
    public canvasHeight: number;


    constructor() {
        this.canvasWidth = Main.instance.canvas.width;
        this.canvasHeight = Main.instance.canvas.height;
        this.ctx = Main.instance.canvas.getContext('2d');
        this.ctx.webkitImageSmoothingEnabled = false;
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