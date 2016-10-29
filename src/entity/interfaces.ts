export interface Entity {
    xPos: number;
    yPos: number;
    width: number;
    height: number;
    tick(): void;
}