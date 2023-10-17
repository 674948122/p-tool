/**
 * @name: 并发队列
 * @param {Array} tasks 需要处理的任务队列
 * @param {Number} paralleCount 并发数，默认为2
 * @return {Promise} 返回一个Promise对象
 */
function paralleTasks(tasks, paralleCount = 2) {
    return new Promise((resolve) => {
        if (tasks.length === 0) {
            resolve();
            return;
        }
        let nextIndex = 0; // 记录当前执行的索引
        let finshCount = 0; // 记录已经完成的任务数
        function _run() {
            // 从任务队列中取出一个任务
            const task = tasks[nextIndex];
            nextIndex++;
            task().then(() => {
                // 任务执行完毕，继续执行下一个任务
                if (nextIndex < tasks.length) {
                    _run();
                } else if (finshCount === tasks.length) {
                    // 所有任务执行完毕，返回
                    resolve();
                }
            });
        }
        for (let i = 0; i < paralleCount && i < tasks.length; i++) {
            _run();
        }
    });
}

export default paralleTasks;
