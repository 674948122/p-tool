/**
 * @name: 并发任务执行器
 * @return {*}
 * @example:
 * function getUserinfo(params) {
 *     return new Promise((resolve, reject) => {
 *        setTimeout(() => {
 *            if (params.id == 2) {
 *                reject();
 *                return;
 *            }
 *            resolve({
 *                name: "张三",
 *                age: 18,
 *               ...params,
 *            });
 *        }, 2000);
 *    });
 * }
 * const superTask = new SuperTask(1);
 * superTask
 *     .add(() => {
 *         return getUserinfo({ id: 1 });
 *     })
 *     .then(() => {
 *        console.log(111);
 *     });
 * superTask
 *     .add(() => {
 *         return getUserinfo({ id: 1 });
 *     })
 *     .then(() => {
 *         console.log(222);
 *     });
 */
class SuperTask {
    constructor(paralleCount = 2) {
        this.paralleCount = paralleCount; // 并发任务数量
        this.tasks = []; // 任务队列
        this.runingCount = 0; // 正在执行的任务数量
    }
    // 添加任务
    add(task) {
        return new Promise((resolve, reject) => {
            this.tasks.push({
                task,
                resolve,
                reject,
            });
            this._run();
        });
    }
    // 执行任务
    _run() {
        while (this.runingCount < this.paralleCount && this.tasks.length > 0) {
            const { task, resolve, reject } = this.tasks.shift();
            this.runingCount++;
            task()
                .then(resolve, reject)
                .finally(() => {
                    this.runingCount--;
                    this._run();
                });
        }
    }
}

export default SuperTask;
