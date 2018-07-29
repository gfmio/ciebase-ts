
import { IXYCoordinate, TIlluminant } from "./types";

export const xyCoodinateToXYZTuple: ({ x, y }: IXYCoordinate) => TIlluminant = ({ x, y }) => [
    // X
    100 * (x / y),
    // Y
    100,
    // Z
    100 * (1 - x - y) / y,
];

export const sign = (n: number) => isNaN(n) ? NaN : n > 0 ? 1 : n < 0 ? -1 : 0;

export const helpers = { xyCoodinateToXYZTuple, sign };
