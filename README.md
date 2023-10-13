# pdg-tool

## pdg的工具函数

### 函数列表

- arrayToHex - 数组转16进制字符串
- arrayToUtf8 - 数组转普通字符串
- hexToArray - 16进制字符串转数组
- leftPad - 字符串左侧补位0
- parseArrayBufferToHex - 二进制转16进制字符串
- parseHexToArrayBuffer - 16进制字符串转二进制
- parseUtf8StringToHex - 普通字符串转16进制字符串
- hexToDecimal - 16进制字符串转10进制数字
- decimalToHex - 10进制数字转16进制字符串
- getHexLength - 获取16进制字符串字节数
- reverseHex - 16进制字符串反转
- executor - Promise函数执行器

### 用法示例

```js
import {
    arrayToHex,
    arrayToUtf8,
    hexToArray,
    leftPad,
    parseArrayBufferToHex,
    parseHexToArrayBuffer,
    parseUtf8StringToHex,
    hexToDecimal,
    decimalToHex,
    getHexLength,
    reverseHex,
    executor,
} from "pdg-tool";

let utf8Str = "hello你好";

console.log("普通字符串", utf8Str);

utf8Str = leftPad(utf8Str, 10);

console.log("左边补齐10位", utf8Str);

const hexStr = parseUtf8StringToHex(utf8Str);

console.log("普通字符串转hex字符串", hexStr);

const arr = hexToArray(hexStr);

console.log("hex字符串转数组", arr);

const utf8Str2 = arrayToUtf8(arr);

console.log("数组转普通字符串", utf8Str2);

const hexStr2 = arrayToHex(arr);

console.log("数组转hex字符串", hexStr2);

const ab = parseHexToArrayBuffer(hexStr2);

console.log("hex字符串转二进制", ab);

const hexStr3 = parseArrayBufferToHex(ab);

console.log("二进制转hex字符串", hexStr3);

const dec = hexToDecimal("0x123");

console.log("hex字符串转十进制", dec);

const hexStr4 = decimalToHex(5);

console.log("十进制转hex字符串", hexStr4);

const len = getHexLength("30303068656c6c6fe4bda0e5a5bd");

console.log("hex字符串长度", len);

const hexStr5 = reverseHex("30303068656c6c6fe4bda0e5a5bd");

console.log(
    "调整16进制字符串的字节顺序， 低位在前，高位在后",
    hexStr5
);

function getUserinfo(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (params.id == 2) {
                reject();
                return;
            }
            resolve({
                name: "张三",
                age: 18,
                ...params,
            });
        }, 2000);
    });
}

executor
    .execute(getUserinfo, { id: 1 })
    .then((res) => {
        console.log("executor1", res);
    })
    .catch((err) => {});
executor
    .execute(getUserinfo, { id: 2 })
    .then((res) => {
        console.log("executor2", res);
    })
    .catch((err) => {});
executor
    .execute(getUserinfo, { id: 3 })
    .then((res) => {
        console.log("executor3", res);
    })
    .catch((err) => {});
```