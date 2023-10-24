
/**
 * @name: 二进制数组转16进制字符串
 * @param {Uint8Array} t 需要转换的二进制数组
 * @return {String} 16进制字符串
 * @example
 * parseArrayBufferToHex(new Uint8Array([1, 2, 3, 4])) => "01020304"
 */
function parseArrayBufferToHex(t) {
    return Array.prototype.map
        .call(new Uint8Array(t), function (t) {
            return ("00" + t.toString(16)).slice(-2);
        })
        .join("").toUpperCase();
}

export default parseArrayBufferToHex