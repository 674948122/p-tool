

/**
 * @name: 使用正则表达式过滤不可见字符
 * @param {*} input 需要处理的字符串
 * @return {*} 处理后的字符串
 */
function filterInvisibleCharsRegex(input) {
  var pattern = /[\x00-\x1F\x7F]/g;
  return input.replace(pattern, "");
}

export default filterInvisibleCharsRegex