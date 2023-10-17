/**
 * @name: 数组转16进制字符串
 * @param {Array} t 需要转换的数组
 * @return {String} 16进制字符串
 * @example <caption>数组转16进制字符串</caption>
 * arrayToHex([1, 2, 3, 4]) => "01020304"
 */
function arrayToHex(t) {
    for (var e = [], r = 0, n = 0; n < 2 * t.length; n += 2)
        (e[n >>> 3] |= parseInt(t[r], 10) << (24 - (n % 8) * 4)), r++;
    for (var i = [], o = 0; o < t.length; o++) {
        var s = (e[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
        i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16));
    }
    return i.join("");
}

export default arrayToHex