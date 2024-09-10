
/**
 * @name: 获取浏览器内核名称及版本号
 * @return {Object} 浏览器内核名称及版本号
 * @example
 *  const browserVersion = getBrowserVersion();
 *  console.log(browserVersion); // { name: 'Chrome', version: '87.0.0.0' }
 */
function getBrowserVersion() {
    const ua = navigator.userAgent;
    const userAgent = navigator.userAgent;
    const isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return {
            name: "Opera",
            version: userAgent.match(/Opera\/([\d.]+)/)[1],
        };
    } else if (ua.indexOf("Firefox") > -1) {
        return {
            name: "Firefox",
            version: userAgent.match(/Firefox\/([\d.]+)/)[1],
        };
    } else if (ua.indexOf("Chrome") > -1) {
        return {
            name: "Chrome",
            version: ua.match(/Chrome\/([\d.]+)/)[1],
        };
    } else if (ua.indexOf("Safari") > -1) {
        return {
            name: "Safari",
            version: userAgent.match(/Safari\/([\d.]+)/)[1],
        };
    } else if (
        ua.indexOf("compatible") > -1 &&
        ua.indexOf("MSIE") > -1 &&
        !isOpera
    ) {
        return {
            name: "IE",
            version: userAgent.match(/MSIE ([\d.]+)/)[1],
        };
    } else {
        return {
            name: "Other",
            version: "",
        };
    }
}

export default getBrowserVersion