/**
 * @name: 16进制字符串转数组
 * @param {String} t 需要转换的16进制字符串
 * @return {Array} 数组
 * @example
 * hexToArray("01020304") => [1, 2, 3, 4]
 */
function hexToArray(t) {
    var e = [],
        r = t.length;
    r % 2 != 0 && (t = p(t, r + 1)), (r = t.length);
    for (var n = 0; n < r; n += 2) e.push(parseInt(t.substr(n, 2), 16));
    return e;
}

export default hexToArray