import { Main } from '../../../../main';
import { BasicKeys } from '../../../../inputHandler/basicKeys/index';
import { Player } from '../../player';
import { DirectionalForce } from '../movement/directionalForce';

export class Input {
    private inputHandler = Main.instance.inputHandler;

    constructor() {

    }


    getMovementInput(player: Player): DirectionalForce {
        let result = new DirectionalForce;
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
            result.setDirectionalForces(xChange, yChange)
        }
        return result;
    }

}

