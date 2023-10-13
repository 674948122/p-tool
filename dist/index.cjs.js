'use strict';

/**
 * @name: 数组转16进制字符串
 * @param {*} t 需要转换的数组
 * @return {*} 16进制字符串
 * @example: arrayToHex([1, 2, 3, 4]) => "01020304"
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

/**
 * @name: 数组转普通字符串
 * @param {*} t 需要转换的数组
 * @return {*} 普通字符串
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

/**
 * @name: 16进制字符串转数组
 * @param {*} t 需要转换的16进制字符串
 * @return {*} 数组
 * @example: hexToArray("01020304") => [1, 2, 3, 4]
 */
function hexToArray(t) {
    var e = [],
        r = t.length;
    r % 2 != 0 && (t = p(t, r + 1)), (r = t.length);
    for (var n = 0; n < r; n += 2) e.push(parseInt(t.substr(n, 2), 16));
    return e;
}

/**
 * @name: 字符串左侧补位0
 * @param {*} t 需要补位的字符串
 * @param {*} e 补位后的长度
 * @return {*} 补位后的字符串
 * @example: leftPad("hello", 10) => "00000hello"
 */
function leftPad(t, e) {
    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
}

/**
 * @name: 二进制数组转16进制字符串
 * @param {*} t 需要转换的二进制数组
 * @return {*} 16进制字符串
 * @example: parseArrayBufferToHex(new Uint8Array([1, 2, 3, 4])) => "01020304"
 */
function parseArrayBufferToHex(t) {
    return Array.prototype.map
        .call(new Uint8Array(t), function (t) {
            return ("00" + t.toString(16)).slice(-2);
        })
        .join("");
}

/**
 * @name: 16进制字符串转二进制数组
 * @return {*} 二进制数组
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

/**
 * @name: 10进制数字转16进制字符串
 * @param {*} decimal 10进制数字
 * @param {*} length 16进制字符串长度
 * @return {*} 16进制字符串
 * @example: decimalToHex(16909060) => "01020304"
 */
function decimalToHex(decimal, length = 4) {
    const num = parseInt(decimal, 10);
    let hexString = num.toString(16);
    return leftPad(hexString, length);
}

/**
 * @name: 获取16进制字符串长度
 * @param {*} hex 16进制字符串
 * @return {*} 16进制字符串长度
 * @example: getHexLength("01020304") => 4
 */
function getHexLength(hex) {
    return hex.length / 2;
}

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

/**
 * @name: Promise函数执行器，用于执行Promise函数，保证每次执行的结果按顺序返回，不会并行任务
 * @param {*} Promise Promise函数
 * @param {array} args 参数数组
 * @return {*} Promise对象
 * @example:
 * executor.execute(getUserinfo, { id: 123 }).then(res=>{}).catch(err=>{});
 */
class FunctionExecutor {
    constructor() {
        this.previousExecution = Promise.resolve();
    }

    execute(func, ...args) {
        const currentExecution = this.previousExecution
            .then(() => {
                return func(...args); // 将参数展开传递给函数调用
            })
            .catch(() => {
                // 重置上一次执行的结果为 resolve
                return Promise.resolve();
            });

        this.previousExecution = currentExecution;
        return currentExecution;
    }
}

const executor = new FunctionExecutor();

exports.arrayToHex = arrayToHex;
exports.arrayToUtf8 = arrayToUtf8;
exports.decimalToHex = decimalToHex;
exports.executor = executor;
exports.getHexLength = getHexLength;
exports.hexToArray = hexToArray;
exports.hexToDecimal = hexToDecimal;
exports.leftPad = leftPad;
exports.parseArrayBufferToHex = parseArrayBufferToHex;
exports.parseHexToArrayBuffer = parseHexToArrayBuffer;
exports.parseUtf8StringToHex = parseUtf8StringToHex;
exports.reverseHex = reverseHex;
