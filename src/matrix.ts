// 3x3 matrices operations
// tslint:disable:max-line-length

import { IMatrixUtilityFunctions, Matrix3D, Vector3D } from "./types";

const transpose: (M: Matrix3D) => Matrix3D = (M) => [
    [M[0][0], M[1][0], M[2][0]],
    [M[0][1], M[1][1], M[2][1]],
    [M[0][2], M[1][2], M[2][2]],
];

const determinant: (M: Matrix3D) => number = (M) =>
    M[0][0] * (M[2][2] * M[1][1] - M[2][1] * M[1][2]) +
    M[1][0] * (M[2][1] * M[0][2] - M[2][2] * M[0][1]) +
    M[2][0] * (M[1][2] * M[0][1] - M[1][1] * M[0][2]);

const inverse: (M: Matrix3D) => Matrix3D = (M) => {
    const c = 1 / determinant(M);
    return [
        [(M[2][2] * M[1][1] - M[2][1] * M[1][2]) * c, (M[2][1] * M[0][2] - M[2][2] * M[0][1]) * c, (M[1][2] * M[0][1] - M[1][1] * M[0][2]) * c],
        [(M[2][0] * M[1][2] - M[2][2] * M[1][0]) * c, (M[2][2] * M[0][0] - M[2][0] * M[0][2]) * c, (M[1][0] * M[0][2] - M[1][2] * M[0][0]) * c],
        [(M[2][1] * M[1][0] - M[2][0] * M[1][1]) * c, (M[2][0] * M[0][1] - M[2][1] * M[0][0]) * c, (M[1][1] * M[0][0] - M[1][0] * M[0][1]) * c],
    ];
};

const multiply: (M: Matrix3D, v: Vector3D) => Vector3D = (M, v) => [
    M[0][0] * v[0] + M[0][1] * v[1] + M[0][2] * v[2],
    M[1][0] * v[0] + M[1][1] * v[1] + M[1][2] * v[2],
    M[2][0] * v[0] + M[2][1] * v[1] + M[2][2] * v[2],
];

const scalar: (M: Matrix3D, v: Vector3D) => Matrix3D = (M, v) => [
    [M[0][0] * v[0], M[0][1] * v[1], M[0][2] * v[2]],
    [M[1][0] * v[0], M[1][1] * v[1], M[1][2] * v[2]],
    [M[2][0] * v[0], M[2][1] * v[1], M[2][2] * v[2]],
];

const product: (M: Matrix3D, N: Matrix3D) => Matrix3D = (M, N) => [
    [M[0][0] * N[0][0] + M[0][1] * N[1][0] + M[0][2] * N[2][0], M[0][0] * N[0][1] + M[0][1] * N[1][1] + M[0][2] * N[2][1], M[0][0] * N[0][2] + M[0][1] * N[1][2] + M[0][2] * N[2][2]],
    [M[1][0] * N[0][0] + M[1][1] * N[1][0] + M[1][2] * N[2][0], M[1][0] * N[0][1] + M[1][1] * N[1][1] + M[1][2] * N[2][1], M[1][0] * N[0][2] + M[1][1] * N[1][2] + M[1][2] * N[2][2]],
    [M[2][0] * N[0][0] + M[2][1] * N[1][0] + M[2][2] * N[2][0], M[2][0] * N[0][1] + M[2][1] * N[1][1] + M[2][2] * N[2][1], M[2][0] * N[0][2] + M[2][1] * N[1][2] + M[2][2] * N[2][2]],
];

export const matrix: IMatrixUtilityFunctions = {
    determinant,
    inverse,
    multiply,
    product,
    scalar,
    transpose,
};
