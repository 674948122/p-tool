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

export default leftPad