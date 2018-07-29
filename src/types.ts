
export type Vector3D<T = number> = [T, T, T];
export type Matrix3D = Vector3D<Vector3D>;

export interface IXYCoordinate {
    x: number;
    y: number;
}

export type TIlluminant = Vector3D;

export interface IWorkspace {
    r: IXYCoordinate;
    g: IXYCoordinate;
    b: IXYCoordinate;
    gamma: IColorSpaceEncoder;
}

export interface IColorSpaceEncoder {
    decode: (v: number) => number;
    encode: (v: number) => number;
}

export interface IColorSpaceConverter {
    fromRgb: (RGB: Vector3D) => Vector3D;
    toRgb: (XYZ: Vector3D) => Vector3D;
}
