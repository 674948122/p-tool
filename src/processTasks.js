/**
 * @name: 可暂停的任务队列
 * @param {...Function} tasks 任务队列,每个任务无参数、异步
 * @return {*}
 */
function processTasks(...tasks) {
    let isRunning = false;
    const result = [];
    let i = 0; // 当前执行的任务索引
    return {
        start() {
            return new Promise(async (resolve, reject) => {
                if (isRunning) {
                    return;
                }
                isRunning = true;
                while (i < tasks.length) {
                    result.push(await tasks[i]());
                    i++;
                    // 如果暂停，跳出循环
                    if (!isRunning) {
                        return;
                    }
                }
                // 所有任务执行完毕
                isRunning = false;
                resolve(result);
            });
        },
        pause() {
            isRunning = false;
        },
    };
}

export default processTasks;
