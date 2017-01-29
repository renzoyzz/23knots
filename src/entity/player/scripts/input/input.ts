import { Main } from 'src/main';
import { BasicKeys } from 'src/inputHandler/basicKeys/index';
import { Player } from 'src/entity/player/index';
import { Force } from 'src/entity/physics/index';

export class Input {
    private inputHandler = Main.instance.inputHandler;

    public applyMovementInput(player: Player): void {
        let force = new Force();
        let up = this.inputHandler.isBasicKeyPressed(BasicKeys.UP)
        let down = this.inputHandler.isBasicKeyPressed(BasicKeys.DOWN);
        let left = this.inputHandler.isBasicKeyPressed(BasicKeys.LEFT);
        let right = this.inputHandler.isBasicKeyPressed(BasicKeys.RIGHT);

        if (up || down || left || right) {
            let xChange = 0;
            let yChange = 0;
            if (up) {
                yChange--;
            }
            if (down) {
                yChange++;
            }
            if (right) {
                xChange++;
            }
            if (left) {
                xChange--;
            }
            force.setDirectionalForces(xChange, yChange)
        }
        player.speed.applyDirectionalForce(force);
    }
}

