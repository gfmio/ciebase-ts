// 3x3 matrices operations
// tslint:disable:max-line-length

import { Matrix3D, Vector3D } from "./types";

function transpose(M: Matrix3D) {
    return (
        [[M[0][0], M[1][0], M[2][0]],
         [M[0][1], M[1][1], M[2][1]],
         [M[0][2], M[1][2], M[2][2]]]
    );
}

function determinant(M: Matrix3D) {
    return (
        M[0][0] * (M[2][2] * M[1][1] - M[2][1] * M[1][2]) +
        M[1][0] * (M[2][1] * M[0][2] - M[2][2] * M[0][1]) +
        M[2][0] * (M[1][2] * M[0][1] - M[1][1] * M[0][2])
    );
}

function inverse(M: Matrix3D) {
    const c = 1 / determinant(M);
    return (
        [[(M[2][2] * M[1][1] - M[2][1] * M[1][2]) * c, (M[2][1] * M[0][2] - M[2][2] * M[0][1]) * c, (M[1][2] * M[0][1] - M[1][1] * M[0][2]) * c],
         [(M[2][0] * M[1][2] - M[2][2] * M[1][0]) * c, (M[2][2] * M[0][0] - M[2][0] * M[0][2]) * c, (M[1][0] * M[0][2] - M[1][2] * M[0][0]) * c],
         [(M[2][1] * M[1][0] - M[2][0] * M[1][1]) * c, (M[2][0] * M[0][1] - M[2][1] * M[0][0]) * c, (M[1][1] * M[0][0] - M[1][0] * M[0][1]) * c]]
    );
}

function multiply(M: Matrix3D, v: Vector3D) {
    return (
        [M[0][0] * v[0] + M[0][1] * v[1] + M[0][2] * v[2],
         M[1][0] * v[0] + M[1][1] * v[1] + M[1][2] * v[2],
         M[2][0] * v[0] + M[2][1] * v[1] + M[2][2] * v[2]]
    );
}

function scalar(M: Matrix3D, v: Vector3D) {
    return (
        [[M[0][0] * v[0], M[0][1] * v[1], M[0][2] * v[2]],
         [M[1][0] * v[0], M[1][1] * v[1], M[1][2] * v[2]],
         [M[2][0] * v[0], M[2][1] * v[1], M[2][2] * v[2]]]
    );
}

function product(M: Matrix3D, N: Matrix3D) {
    return (
        [[M[0][0] * N[0][0] + M[0][1] * N[1][0] + M[0][2] * N[2][0], M[0][0] * N[0][1] + M[0][1] * N[1][1] + M[0][2] * N[2][1], M[0][0] * N[0][2] + M[0][1] * N[1][2] + M[0][2] * N[2][2]],
         [M[1][0] * N[0][0] + M[1][1] * N[1][0] + M[1][2] * N[2][0], M[1][0] * N[0][1] + M[1][1] * N[1][1] + M[1][2] * N[2][1], M[1][0] * N[0][2] + M[1][1] * N[1][2] + M[1][2] * N[2][2]],
         [M[2][0] * N[0][0] + M[2][1] * N[1][0] + M[2][2] * N[2][0], M[2][0] * N[0][1] + M[2][1] * N[1][1] + M[2][2] * N[2][1], M[2][0] * N[0][2] + M[2][1] * N[1][2] + M[2][2] * N[2][2]]]
    );
}

export default {
    determinant,
    inverse,
    multiply,
    product,
    scalar,
    transpose,
};
