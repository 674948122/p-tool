/**
 * @name: 16进制字符串转10进制数字
 * @param {*} hexString 16进制字符串
 * @return {*} 10进制数字
 * @example: hexToDecimal("01020304") => 16909060
 */
function hexToDecimal(hexString) {
    // 将 16 进制字符串转换为对应的整数
    const num = parseInt(hexString, 16);

    // 返回 10 进制数
    return num;
}

export default hexToDecimal;
