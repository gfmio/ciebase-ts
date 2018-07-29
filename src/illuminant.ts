
import { IXYCoordinate, TIlluminant } from "./types";

// CIE 15-2004 Colorimetry, 3rd Edition
export const coordinates = {
    A: {x: 0.44758, y: 0.40745},    // tungsten lamp
    C: {x: 0.31006, y: 0.31616},    // average daylight
    D50: {x: 0.34567, y: 0.35851},  // horizon light
    D55: { x: 0.33243, y: 0.34744 },  // mid-morning / mid-afternoon daylight
    D65: {x: 0.31272, y: 0.32903},  // noon daylight
    D75: {x: 0.29903, y: 0.31488},   // north sky daylight
};

export const xyCoodinateToXYZTuple: ({ x, y }: IXYCoordinate) => TIlluminant = ({x, y}) => [
    // X
    100 * (x / y),
    // Y
    100,
    // Z
    100 * (1 - x - y) / y,
];

export const illuminants = {
    A: xyCoodinateToXYZTuple(coordinates.A),     // tungsten lamp
    C: xyCoodinateToXYZTuple(coordinates.C),     // average daylight
    D50: xyCoodinateToXYZTuple(coordinates.D50), // horizon light
    D55: xyCoodinateToXYZTuple(coordinates.D55), // mid-morning / mid-afternoon daylight
    D65: xyCoodinateToXYZTuple(coordinates.D65), // noon daylight
    D75: xyCoodinateToXYZTuple(coordinates.D75), // north sky daylight
};
