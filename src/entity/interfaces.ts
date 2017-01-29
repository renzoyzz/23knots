export interface Entity {
    startXPos: number;
    startYPos: number;
    endXPos: number;
    endYPos: number;
    width: number;
    height: number;
    tick(): void;
    handleInput(): void;
}