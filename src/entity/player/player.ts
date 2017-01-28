import { Entity } from '../interfaces';
import { Main } from '../../main';
import { Input, Movement } from './scripts/index';

export class Player implements Entity {
    public startXPos: number;
    public startYPos: number;
    public endXPos: number;
    public endYPos: number;
    public width: number = 100;
    public height: number = 100;
    public acceleration: number = .2;
    public xSpeed: number = 0;
    public ySpeed: number = 0;
    public maxSpeed: number = 10;
    private input: Input = new Input();
    private movement: Movement = new Movement(this);


    constructor(xPos: number, yPos: number) {
        this.endXPos = xPos;
        this.endYPos = yPos;
    }


    tick(): void {
        let dirForce = this.input.getMovementInput(this);
        this.movement.shiftPlayer(dirForce);
    }

}

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
