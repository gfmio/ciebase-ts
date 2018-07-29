
const {round} = Math;

export function fromHex(hex: string) {
    if (hex[0] === "#") {
        hex = hex.slice(1);
    }
    if (hex.length < 6) {
        hex = hex.split("").map((v) => v + v).join("");
    }
    return hex.match(/../g).map((v) => parseInt(v, 16) / 255);
}

export function toHex(RGB: [number, number, number]) {
    const hex = RGB.map((v: number) => {
        const vString: string = round(255 * v).toString(16);
        return vString.length < 2 ? "0" + v : v;
    }).join("");
    return "#" + hex;
}

export default { fromHex, toHex };
