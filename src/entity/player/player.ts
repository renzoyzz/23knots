import { Entity } from 'src/entity/interfaces';
import { Main } from 'src/main';
import { Input } from './scripts/index';
import { Speed } from 'src/entity/properties/index';
import { Movement } from 'src/entity/movement/index';

export class Player implements Entity {
    public startXPos: number;
    public startYPos: number;
    public endXPos: number;
    public endYPos: number;
    public width: number = 100;
    public height: number = 100;
    public acceleration: number = .2;
    public speed: Speed = new Speed(0, 0, 10, .2);
    private input: Input = new Input();
    private movement: Movement = new Movement(this.speed);


    constructor(xPos: number, yPos: number) {
        this.endXPos = xPos;
        this.endYPos = yPos;
    }

    tick(): void {
        this.input.applyMovementInput(this);
        this.movement.shift(this);
    }
}

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
