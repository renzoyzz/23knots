import Shapes from './shapes/index';

export class Collision {
    public static circsIntersect(c0: Shapes.Circle, c1: Shapes.Circle):boolean {
        let combinedRadii = c0.radius + c1.radius;
        let distance = Collision.getDistance(c1, c0);
        return distance <= combinedRadii;  
    }

    public static circPointIntersect(circle: Shapes.Circle, point: Shapes.Point): boolean{
        return Collision.getDistance(circle, point) <= circle.radius;
    }

    public static getDistance(point0: Shapes.Point, point1: Shapes.Point): number{
        return Math.sqrt((point1.xPos - point0.xPos)*(point1.xPos - point0.xPos) + (point1.yPos - point0.yPos)*(point1.yPos - point0.yPos));
    }

}