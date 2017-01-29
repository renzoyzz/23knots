export class Force {
    
    private xForce: number = 0;
    private yForce: number = 0;
    private xSeed: number = 0;
    private ySeed: number = 0;

    constructor() {

    }

    public setDirectionalForces(x: number, y: number): void{
        this.xSeed = x;
        this.ySeed = y;
        this.calculateForces();
    }

    public getXForce(): number{
        return this.xForce;
    }

    public getYForce(): number{
        return this.yForce;
    }

    public calculateForces(){
        let angle = Math.atan2(this.ySeed, this.xSeed);
        this.xForce = Math.cos(angle);
        this.yForce = Math.sin(angle);
    }

}