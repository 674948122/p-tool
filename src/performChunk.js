/**
 * @name: 分时函数
 * @param {Array||Number} datas 需要处理的数据，可以是数组，也可以是数字
 * @param {Function} consumer 消费者函数，对数据的处理逻辑
 * @return {void}
 * @example
 * // 1. 传入数组
 * performChunk([1, 2, 3, 4], (item, i) => {
 *    console.log(item, i);
 * }
 * // 2. 传入数字
 * performChunk(10, (item, i) => {
 *   console.log(item, i);
 * }
 */
function performChunk(datas, consumer) {
    // 参数归一化，兼容数字和数组
    if (typeof datas === "number") {
        datas = new Array(datas);
    }

    if (!datas.length) return;

    // console.log(datas);
    let i = 0; // 记录当前处理的索引
    // 执行一块任务
    function _run() {
        if (i === datas.length) return;
        requestIdleCallback((idle) => {
            // 浏览器还有空闲时间
            while (idle.timeRemaining() > 0 && i < datas.length) {
                // 提取出当前要执行的任务
                const item = datas[i];
                consumer && consumer(item, i);
                i++;
            }
            _run();
        });
    }
    _run();
}

export default performChunk;
