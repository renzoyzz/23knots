import { Circle, Point } from 'src/entity/physics/collision/shapes/index';
import { Collision } from 'src/entity/physics/collision/index'

export class Debug {

    constructor() {
        let circle1 = new Circle({xPos: 1, yPos: 1,  radius: 1});
        let circle2 = new Circle({xPos: 1, yPos: 1,  radius: 0});
        let point = new Point();
        circle1
        console.log(Collision.circsIntersect(circle2, circle1));
        console.log(circle1.circIntersects(circle2));
        console.log(circle1.pointIntersects(circle2));
    }
}