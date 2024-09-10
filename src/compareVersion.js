/** 
 * @name: 比较两个版本号
 * @param {String} v1 需要比较的版本号
 * @param {String} v2 最低要求的版本号
 * @return {Boolean} 是否满足最低要求的版本号
 * @example
 * compareVersion("1.0.0", "2.0.0") => false
 * compareVersion("2.0.0", "1.0.1") => true
 */
function compareVersion(v1, v2) {
    v1 = v1.split(".");
    v2 = v2.split(".");
    const len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
        v1.push("0");
    }
    while (v2.length < len) {
        v2.push("0");
    }

    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i]);
        const num2 = parseInt(v2[i]);
        if (num1 > num2) {
            return true;
        } else if (num1 < num2) {
            return false;
        }
    }
    return true;
}

export default compareVersion;