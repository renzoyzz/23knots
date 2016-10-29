import { Entity } from '../index'
import { Main } from '../../main'

export class Player implements Entity {
    public startXPos: number;
    public startYPos: number;
    public endXPos: number;
    public endYPos: number;
    public width: number = 200;
    public height: number = 200;
    public speed: number = 1;
    private ticks: number = 0;
    private direction: Direction = Direction.RIGHT;


    constructor(xPos: number, yPos: number) {
        this.endXPos = xPos;
        this.endYPos = yPos;
    }


    tick(): void {
        let inputHandler = Main.instance.inputHandler;

        if (this.ticks > 180) {
            switch (this.direction) {
                case Direction.UP:
                    this.direction = Direction.RIGHT;
                    break;
                case Direction.RIGHT:
                    this.direction = Direction.DOWN;
                    break;
                case Direction.DOWN:
                    this.direction = Direction.LEFT;
                    break;
                case Direction.LEFT:
                    this.direction = Direction.UPRIGHT;
                    break;
                case Direction.UPRIGHT:
                    this.direction = Direction.DOWNRIGHT;
                    break;
                case Direction.DOWNRIGHT:
                    this.direction = Direction.DOWNLEFT;
                    break;
                case Direction.DOWNLEFT:
                    this.direction = Direction.UPLEFT;
                    break;
                default:
                    this.direction = Direction.RIGHT;
                    break;
            }
            this.ticks=0;
        }
        switch (this.direction) {
            case Direction.UP:
                this.shift(0, this.speed * -1);
                break;
            case Direction.RIGHT:
                this.shift(this.speed, 0);
                break;
            case Direction.DOWN:
                this.shift(0, this.speed);
                break;
            case Direction.LEFT:
                this.shift(this.speed * -1, 0);
                break;
            case Direction.UPRIGHT:
                this.shift(this.speed * Math.sqrt(2), this.speed * Math.sqrt(2) * -1);
                break;
            case Direction.UPLEFT:
                this.shift(this.speed * Math.sqrt(2) * -1, this.speed * Math.sqrt(2) * -1);
                break;
            case Direction.DOWNLEFT:
                this.shift(this.speed * Math.sqrt(2) * -1, this.speed * Math.sqrt(2));
                break;
            case Direction.DOWNRIGHT:
                this.shift(this.speed * Math.sqrt(2), this.speed * Math.sqrt(2));
                break;
            default:
                this.shift(this.speed, 0);
                break;
        }
        this.ticks++;
    }

    public shift(xDelta: number, yDelta: number) {
        this.startXPos = this.endXPos;
        this.startYPos = this.endYPos;
        this.endXPos += xDelta;
        this.endYPos += yDelta;
    }

}

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    UPRIGHT,
    UPLEFT,
    DOWNRIGHT,
    DOWNLEFT
}