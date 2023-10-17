import leftPad from "./leftPad.js";
/**
 * @name: 10进制数字转16进制字符串
 * @param {Number} decimal 10进制数字
 * @param {Number} length 16进制字符串长度
 * @return {String} 16进制字符串
 * @example
 * decimalToHex(16909060) => "01020304"
 */
function decimalToHex(decimal, length = 4) {
    const num = parseInt(decimal, 10);
    let hexString = num.toString(16);
    return leftPad(hexString, length);
}
export default decimalToHex;
