import { Force } from 'src/entity/physics/index';

export class Speed {
    public xSpeed: number;
    public ySpeed: number;   
    public maxSpeed: number;
    public acceleration: number;

    constructor(xSpeed: number = 0, ySpeed: number = 0, maxSpeed: number = 0, acceleration: number = 0){
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.maxSpeed = maxSpeed;
        this.acceleration = acceleration;
    }

    public applyDirectionalForce(force: Force){
         this.xSpeed += ((force.getXForce() * this.maxSpeed) - this.xSpeed) * this.acceleration;
        this.ySpeed += ((force.getYForce() * this.maxSpeed) - this.ySpeed) * this.acceleration;  
    }
}