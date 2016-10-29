import { Entity } from '../index'

export class Block implements Entity {
    public xPos: number;
    public yPos: number;
    public width: number = 50;
    public height: number = 50;
    public speed: number = 1;
    private ticks: number = 0;
    private direction: Direction = Direction.RIGHT;

    constructor(xPos: number, yPos: number) {
        this.xPos = xPos;
        this.yPos = yPos;
    }


    tick(): void {
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
                    this.direction = Direction.UP;
                    break;
                default:
                    this.direction = Direction.RIGHT
                    break;
            }
            this.ticks = 0;
        }

        switch (this.direction) {
            case Direction.UP:
                this.shift(0, this.speed * -1)
                break;
            case Direction.RIGHT:
                this.shift(this.speed, 0)
                break;
            case Direction.DOWN:
                this.shift(0, this.speed)

                break;
            case Direction.LEFT:
                this.shift(this.speed * -1, 0)
                break;
            default:
                this.shift(this.speed, 0);
                break;
        }
        this.ticks++;
    }

    public shift(xDelta: number, yDelta: number) {
        this.xPos += xDelta;
        this.yPos += yDelta;
    }




}

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}