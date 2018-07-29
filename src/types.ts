
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
export interface IDegreeRadianConverter {
    fromRadian(r: number): number;
    toRadian(d: number): number;
}

export interface IRGBHexConverter {
    fromHex(hex: string): Vector3D;
    toHex(RGB: Vector3D): string;
}

export interface IRgbXyzConverter {
    fromRgb(RGB: Vector3D): Vector3D;
    toRgb(XYZ: Vector3D): Vector3D;
}

export interface INamedIllumninantsMap<T> {
    A: T;   // tungsten lamp
    C: T;   // average daylight
    D50: T; // horizon light
    D55: T; // mid-morning / mid-afternoon daylight
    D65: T; // noon daylight
    D75: T; // north sky daylight
}
export interface IMatrixUtilityFunctions {
    transpose(M: Matrix3D): Matrix3D;
    determinant(M: Matrix3D): number;
    inverse(M: Matrix3D): Matrix3D;
    multiply(M: Matrix3D, v: Vector3D): Vector3D;
    scalar(M: Matrix3D, v: Vector3D): Matrix3D;
    product(M: Matrix3D, N: Matrix3D): Matrix3D;
}
