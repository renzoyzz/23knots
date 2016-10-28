import { Main } from '../main';


export class RenderHandler {
    public ctx: CanvasRenderingContext2D

    constructor() {
        this.ctx = Main.instance.canvas.getContext('2d');
        this.ctx.webkitImageSmoothingEnabled = false;
    }

    public render() {
        this.ctx.fill
        this.ctx.rect(20, 20, 150, 100);
        this.ctx.stroke();
    }


}