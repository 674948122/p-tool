
/**
 * @name: 普通字符串转16进制字符串
 * @param {*} t 需要转换的字符串
 * @return {*} 16进制字符串
 * @example: parseUtf8StringToHex("你好hello") => "e4bda0e5a5bd68656c6c6f"
 */
function parseUtf8StringToHex(t) {
    for (
        var e = (t = unescape(encodeURIComponent(t))).length, r = [], n = 0;
        n < e;
        n++
    )
        r[n >>> 2] |= (255 & t.charCodeAt(n)) << (24 - (n % 4) * 8);
    for (var i = [], o = 0; o < e; o++) {
        var s = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
        i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16));
    }
    return i.join("");
}

export default parseUtf8StringToHex;