import Shapes from './index';
import { Collision } from 'src/entity/physics/collision/index';
export class Circle implements Shapes.Point{
    xPos: number;
    yPos: number;
    radius: number;

    constructor(circleConstructor: CircleConstructor) {
        if (isNaN(circleConstructor.xPos))
            circleConstructor.xPos = 0;
        if (isNaN(circleConstructor.yPos))
            circleConstructor.yPos = 0;
        if (isNaN(circleConstructor.radius))
            circleConstructor.radius = 0;
        this.xPos = circleConstructor.xPos;
        this.yPos = circleConstructor.yPos;
        this.radius = circleConstructor.radius;
    }

    public circIntersects(circle: Circle): boolean{
        return Collision.circsIntersect(this, circle);
    }

    public pointIntersects(point: Shapes.Point){
        return Collision.circPointIntersect(this, point);
    }
}

export interface CircleConstructor {
    xPos?: number;
    yPos?: number;
    radius?: number;
}