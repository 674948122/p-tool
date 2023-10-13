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

export const executor = new FunctionExecutor();
