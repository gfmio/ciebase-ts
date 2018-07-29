
import { illuminants } from "./illuminant";
import matrix from "./matrix";
import { IWorkspace, Matrix3D, TIlluminant, Vector3D } from "./types";
import { workspaces } from "./workspace";

// http://www.brucelindbloom.com/Eqn_RGB_XYZ_Matrix.html
export function Converter(rgbSpace: IWorkspace = workspaces.sRGB, whitePoint: TIlluminant = illuminants.D65) {
    const primaries = [rgbSpace.r, rgbSpace.g, rgbSpace.b];

    const M_P: Matrix3D = matrix.transpose(primaries.map(({x, y}) => [
        // X
        x / y,
        // Y
        1,
        // Z
        (1 - x - y) / y,
    ]) as Matrix3D) as Matrix3D;

    const gamma = rgbSpace.gamma;
    const M_S: Vector3D = matrix.multiply(
        matrix.inverse(M_P as Matrix3D) as Matrix3D,
        whitePoint,
    ) as Vector3D;
    const M_RGB_XYZ: Matrix3D = matrix.scalar(M_P, M_S) as Matrix3D;
    const M_XYZ_RGB: Matrix3D = matrix.inverse(M_RGB_XYZ) as Matrix3D;

    return {
        fromRgb(RGB: Vector3D) {
            return matrix.multiply(M_RGB_XYZ, RGB.map(gamma.decode) as Vector3D);
        },
        toRgb(XYZ: Vector3D) {
            return matrix.multiply(M_XYZ_RGB, XYZ).map(gamma.encode);
        },
    };
}
