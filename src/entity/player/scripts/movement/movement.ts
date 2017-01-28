import { Player } from '../../player';
import { DirectionalForce } from './directionalForce'
export class Movement {
    private player: Player

    constructor(player: Player) {
        this.player = player;
    }

    public shiftPlayer(dirForce: DirectionalForce) {
        this.player.xSpeed += ((dirForce.getXForce() * this.player.maxSpeed) - this.player.xSpeed) * this.player.acceleration;
        this.player.ySpeed += ((dirForce.getYForce() * this.player.maxSpeed) - this.player.ySpeed) * this.player.acceleration;        
        this.shift();
    }
    
    private shift() {
        this.player.startXPos = this.player.endXPos;
        this.player.startYPos = this.player.endYPos;
        this.player.endXPos += this.player.xSpeed;
        this.player.endYPos += this.player.ySpeed;
    }

}