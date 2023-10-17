/**
 * @name: 数组转普通字符串
 * @param {Array} t 需要转换的数组
 * @return {String} 普通字符串
 * @example: arrayToUtf8([1, 2, 3, 4]) => "1234"
 */
function arrayToUtf8(t) {
    for (var e = [], r = 0, n = 0; n < 2 * t.length; n += 2)
        (e[n >>> 3] |= parseInt(t[r], 10) << (24 - (n % 8) * 4)), r++;
    try {
        for (var i = [], o = 0; o < t.length; o++) {
            var s = (e[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
            i.push(String.fromCharCode(s));
        }
        return decodeURIComponent(escape(i.join("")));
    } catch (t) {
        throw new Error("Malformed UTF-8 data");
    }
}

export default arrayToUtf8