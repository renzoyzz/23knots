export class Range {
    private min: number;
    private max: number;

    constructor(min: number = 0, max: number = 0) {
        this.min = min;
        this.max = max;
    }

    public rangesIntersect(range: Range): boolean {
        return this.max >= range.min && this.min <= range.max;
    }

    public static rangesIntersect(r0: Range, r1: Range): boolean {
        return r0.max >= r1.min && r0.min <= r1.max;
    }
}