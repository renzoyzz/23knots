import Shapes from './index';
import { Range, Collision } from 'src/entity/physics/collision/index';


export class Rectangle implements Shapes.Point {
    public xPos: number;
    public yPos: number;
    public rotation: number;
    public width: number;
    public height: number;

    constructor(squareConstructor: SquareConstructor) {
        if (isNaN(squareConstructor.xPos))
            squareConstructor.xPos = 0;
        if (isNaN(squareConstructor.yPos))
            squareConstructor.yPos = 0;
        if(isNaN(squareConstructor.rotation))
            squareConstructor.rotation = 0
        if (isNaN(squareConstructor.width))
            squareConstructor.width = 0;
        if (isNaN(squareConstructor.height))
            squareConstructor.height = 0;
        this.xPos = squareConstructor.xPos;
        this.yPos = squareConstructor.yPos;
        this.width = squareConstructor.width;
        this.height = squareConstructor.height;
    }

    public rectIntersect(rect: Rectangle): boolean {
        return Collision.rectIntersects(this, rect)
    }

    public getXRange(): Range {
        let halfWidth = this.width / 2;
        return new Range(this.width - halfWidth, this.width + halfWidth);
    }

    public getYRange(): Range {
        let halfHeight = this.height / 2;
        return new Range(this.height - halfHeight, this.height + halfHeight)
    }


}

interface SquareConstructor {
    xPos: number;
    yPos: number;
    rotation: number;
    width: number;
    height: number;
}

