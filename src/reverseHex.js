/**
 * @name: 调整16进制字符串的字节顺序， 低位在前，高位在后
 * @param {*} hex 16进制字符串
 * @return {*} 调整后的16进制字符串
 * @example: reverseHex("01020304") => "04030201"
 */
function reverseHex(hex) {
    if (!hex || hex.length % 2 !== 0) {
        return hex;
    }
    const arr = hex.match(/.{2}/g);
    arr.reverse();
    return arr.join("");
}

export default reverseHex;
