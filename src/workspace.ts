
import { IColorSpaceEncoder, IWorkspace } from "./types";

const {abs, pow } = Math;

const sign = (n: number) => isNaN(n) ? NaN : n > 0 ? 1 : n < 0 ? -1 : 0;

export const sRgbGamma: IColorSpaceEncoder = {
    decode: (v) => (v <= 0.04045 ? v / 12.92 : pow((v + 0.055) / 1.055, 2.4)),
    encode: (v) => (v <= 0.0031308 ? 12.92 * v : 1.055 * pow(v, 1 / 2.4) - 0.055),
};

export const proPhotoGamma: IColorSpaceEncoder = {
    decode: (v) => (v < 16 * 0.001953125 ? v / 16 : pow(v, 1.8)),
    encode: (v) => (v < 0.001953125 ? 16 * v : pow(v, 1 / 1.8)),
};

export const simpleGamma: (g: number) => IColorSpaceEncoder = (g) => ({
    decode: (v) => sign(v) * pow(abs(v), g),
    encode: (v) => sign(v) * pow(abs(v), 1 / g),
});

// tslint:disable:object-literal-sort-keys
export const workspaces: {
    sRGB: IWorkspace;
    AdobeRGB: IWorkspace;
    WideGamutRGB: IWorkspace;
    ProPhotoRGB: IWorkspace;
} = {
    sRGB: {
        r: {x: 0.64, y: 0.33},
        g: {x: 0.30, y: 0.60},
        b: {x: 0.15, y: 0.06},
        gamma: sRgbGamma,
    },
    AdobeRGB: {
        r: {x: 0.64, y: 0.33},
        g: {x: 0.21, y: 0.71},
        b: {x: 0.15, y: 0.06},
        gamma: simpleGamma(2.2),
    },
    WideGamutRGB: {
        r: {x: 0.7347, y: 0.2653},
        g: {x: 0.1152, y: 0.8264},
        b: {x: 0.1566, y: 0.0177},
        gamma: simpleGamma(563 / 256),
    },
    ProPhotoRGB: {
        r: {x: 0.7347, y: 0.2653},
        g: {x: 0.1596, y: 0.8404},
        b: {x: 0.0366, y: 0.0001},
        gamma: proPhotoGamma,
    },
};

export default workspaces;
