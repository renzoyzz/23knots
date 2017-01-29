import { Player } from 'src/entity/player/index';
import { DirectionalForce } from 'src/entity/physics/index';
import { Speed } from 'src/entity/properties/index';
import { Entity } from 'src/entity/interfaces';
export class Movement {
    private entitySpeed: Speed;

    constructor(entitySpeed: Speed) {
        this.entitySpeed = entitySpeed;
    }

    public shift(entity: Entity) {
        entity.startXPos = entity.endXPos;
        entity.startYPos = entity.endYPos;
        entity.endXPos += this.entitySpeed.xSpeed;
        entity.endYPos += this.entitySpeed.ySpeed;
    }

}