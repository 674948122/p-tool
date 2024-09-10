/**
 * @name: 生成浏览器指纹
 * @return {Number} 浏览器指纹
 * @example
 * const fingerprint = useGenerateBrowserFingerprint(); // 1690444253
 */
const useGenerateBrowserFingerprint = () => {
    var fingerprint = "";

    // 检测浏览器的 User Agent
    var userAgent = navigator.userAgent || "";
    fingerprint += userAgent;

    // 检测浏览器的语言
    var language = navigator.language || "";
    fingerprint += language;

    // 检测浏览器的屏幕分辨率
    var screenResolution = window.screen.width + "x" + window.screen.height;
    fingerprint += screenResolution;

    // 检测浏览器的时区
    var timeZone = new Date().getTimezoneOffset();
    fingerprint += timeZone;

    // 检测浏览器的插件信息
    var plugins = "";
    if (navigator.plugins && navigator.plugins.length > 0) {
        for (var i = 0; i < navigator.plugins.length; i++) {
            plugins += navigator.plugins[i].name + ";";
        }
    }
    fingerprint += plugins;

    // 检测浏览器的字体信息
    var fonts = "";
    if (document.fonts && document.fonts.length > 0) {
        for (var j = 0; j < document.fonts.length; j++) {
            fonts += document.fonts[j].family + ";";
        }
    }
    fingerprint += fonts;

    // 使用哈希函数生成指纹
    var hash = 0;
    if (fingerprint.length === 0) return hash;
    for (var k = 0; k < fingerprint.length; k++) {
        var char = fingerprint.charCodeAt(k);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    // 取绝对值
    hash = Math.abs(hash);
    return hash;
};

export default useGenerateBrowserFingerprint;