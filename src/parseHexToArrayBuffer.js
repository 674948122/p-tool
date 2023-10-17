/**
 * @name: 16进制字符串转二进制数组
 * @param {String} hexString 16进制字符串
 * @return {Buffer} 二进制数组
 * @example: parseHexToArrayBuffer("01020304") => new Uint8Array([1, 2, 3, 4])
 */
function parseHexToArrayBuffer(hexString) {
    const hex = hexString.toLowerCase();
    const binary = new Uint8Array(hex.length / 2);

    for (let i = 0; i < hex.length; i += 2) {
        const byte = parseInt(hex.substr(i, 2), 16);
        binary[i / 2] = byte;
    }

    return binary.buffer;
}

export default parseHexToArrayBuffer;
