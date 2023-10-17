/**
 * @name: 获取16进制字符串长度
 * @param {String} hex 16进制字符串
 * @return {Number} 16进制字符串长度
 * @example
 * getHexLength("01020304") => 4
 */
function getHexLength(hex) {
    return hex.length / 2;
}

export default getHexLength;
