/**
 * @name: 数组转16进制字符串
 * @param {Array} t 需要转换的数组
 * @return {String} 16进制字符串
 * @example <caption>数组转16进制字符串</caption>
 * arrayToHex([1, 2, 3, 4]) => "01020304"
 */
function arrayToHex(t) {
    for (var e = [], r = 0, n = 0; n < 2 * t.length; n += 2)
        (e[n >>> 3] |= parseInt(t[r], 10) << (24 - (n % 8) * 4)), r++;
    for (var i = [], o = 0; o < t.length; o++) {
        var s = (e[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
        i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16));
    }
    return i.join("").toUpperCase();
}

/**
 * @name: 数组转普通字符串
 * @param {Array} t 需要转换的数组
 * @return {String} 普通字符串
 * @example
 * arrayToUtf8([1, 2, 3, 4]) => "1234"
 */
function arrayToUtf8(t) {
    for (var e = [], r = 0, n = 0; n < 2 * t.length; n += 2)
        (e[n >>> 3] |= parseInt(t[r], 10) << (24 - (n % 8) * 4)), r++;
    try {
        for (var i = [], o = 0; o < t.length; o++) {
            var s = (e[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
            i.push(String.fromCharCode(s));
        }
        return decodeURIComponent(escape(i.join("")));
    } catch (t) {
        throw new Error("Malformed UTF-8 data");
    }
}

/**
 * @name: 16进制字符串转数组
 * @param {String} t 需要转换的16进制字符串
 * @return {Array} 数组
 * @example
 * hexToArray("01020304") => [1, 2, 3, 4]
 */
function hexToArray(t) {
    var e = [],
        r = t.length;
    r % 2 != 0 && (t = p(t, r + 1)), (r = t.length);
    for (var n = 0; n < r; n += 2) e.push(parseInt(t.substr(n, 2), 16));
    return e;
}

/**
 * @name: 字符串左侧补位0
 * @param {String} t 需要补位的字符串
 * @param {Number} e 补位后的长度
 * @return {String} 补位后的字符串
 * @example
 * leftPad("hello", 10) => "00000hello"
 */
function leftPad(t, e) {
    return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
}

/**
 * @name: 二进制数组转16进制字符串
 * @param {Uint8Array} t 需要转换的二进制数组
 * @return {String} 16进制字符串
 * @example
 * parseArrayBufferToHex(new Uint8Array([1, 2, 3, 4])) => "01020304"
 */
function parseArrayBufferToHex(t) {
    return Array.prototype.map
        .call(new Uint8Array(t), function (t) {
            return ("00" + t.toString(16)).slice(-2);
        })
        .join("").toUpperCase();
}

/**
 * @name: 16进制字符串转二进制数组
 * @param {String} hexString 16进制字符串
 * @return {Buffer} 二进制数组
 * @example
 * parseHexToArrayBuffer("01020304") => new Uint8Array([1, 2, 3, 4])
 */
function parseHexToArrayBuffer(hexString) {
    const hex = hexString.toLowerCase();
    const binary = new Uint8Array(hex.length / 2);

    for (let i = 0; i < hex.length; i += 2) {
        const byte = parseInt(hex.substr(i, 2), 16);
        binary[i / 2] = byte;
    }

    return binary.buffer;
}

/**
 * @name: 普通字符串转16进制字符串
 * @param {String} t 需要转换的字符串
 * @return {String} 16进制字符串
 * @example
 * parseUtf8StringToHex("你好hello") => "e4bda0e5a5bd68656c6c6f"
 */
function parseUtf8StringToHex(t) {
    for (
        var e = (t = unescape(encodeURIComponent(t))).length, r = [], n = 0;
        n < e;
        n++
    )
        r[n >>> 2] |= (255 & t.charCodeAt(n)) << (24 - (n % 4) * 8);
    for (var i = [], o = 0; o < e; o++) {
        var s = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
        i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16));
    }
    return i.join("").toUpperCase();
}

/**
 * @name: 16进制字符串转10进制数字
 * @param {String} hexString 16进制字符串
 * @return {Number} 10进制数字
 * @example
 * hexToDecimal("01020304") => 16909060
 */
function hexToDecimal(hexString) {
    // 将 16 进制字符串转换为对应的整数
    const num = parseInt(hexString, 16);

    // 返回 10 进制数
    return num;
}

/**
 * @name: 10进制数字转16进制字符串
 * @param {Number} decimal 10进制数字
 * @param {Number} length 16进制字符串长度
 * @return {String} 16进制字符串
 * @example
 * decimalToHex(16909060) => "01020304"
 */
function decimalToHex(decimal, length = 4) {
    const num = parseInt(decimal, 10);
    let hexString = num.toString(16);
    return leftPad(hexString, length);
}

/**
 * @name: 获取16进制字符串长度
 * @param {String} hex 16进制字符串
 * @return {Number} 16进制字符串长度
 * @example
 * getHexLength("01020304") => 4
 */
function getHexLength(hex) {
    return hex.length / 2;
}

/**
 * @name: 调整16进制字符串的字节顺序， 低位在前，高位在后
 * @param {String} hex 16进制字符串
 * @return {String} 调整后的16进制字符串
 * @example
 * reverseHex("01020304") => "04030201"
 */
function reverseHex(hex) {
    if (!hex || hex.length % 2 !== 0) {
        return hex;
    }
    const arr = hex.match(/.{2}/g);
    arr.reverse();
    return arr.join("");
}

/**
 * @name: 分时函数
 * @param {Array|Number} datas 需要处理的数据，可以是数组，也可以是数字
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

/**
 * @name: 并发队列
 * @param {Function[]} tasks 需要处理的任务队列
 * @param {Number} paralleCount 并发数，默认为2
 * @return {Promise} 返回一个Promise对象
 * @example
 * async function mockAsync1() {
 *      await new Promise((resolve, reject) => {
 *          setTimeout(() => {
 *              resolve();
 *          }, 1000);
 *      });
 *      console.log("paralleTasks111");
 * }
 * async function mockAsync2() {
 *      await new Promise((resolve, reject) => {
 *          setTimeout(() => {
 *              resolve();
 *          }, 1000);
 *      });
 *      console.log("paralleTasks222");
 * }
 * paralleTasks([mockAsync1, mockAsync2], 1).then(() => {
 *      console.log("执行完毕");
 * });
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
            // console.log("开始执行任务", task);
            task().then(() => {
                finshCount++;
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

/**
 * @name: 并发任务执行器
 * @param {Number} paralleCount 并发任务数量
 * @return {SuperTask{}} 返回一个SuperTask实例
 * @example
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
    // 重置任务
    reset() {
        this.tasks = [];
        this.runingCount = 0;
    }
}

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

export { SuperTask, arrayToHex, arrayToUtf8, decimalToHex, getHexLength, hexToArray, hexToDecimal, leftPad, paralleTasks, parseArrayBufferToHex, parseHexToArrayBuffer, parseUtf8StringToHex, performChunk, processTasks, reverseHex };
