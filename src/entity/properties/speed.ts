import { Force } from 'src/entity/physics/directionalForce';

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

    public applyDirectionalForce(dirForce: Force){
         this.xSpeed += ((dirForce.getXForce() * this.maxSpeed) - this.xSpeed) * this.acceleration;
        this.ySpeed += ((dirForce.getYForce() * this.maxSpeed) - this.ySpeed) * this.acceleration;  
    }
}