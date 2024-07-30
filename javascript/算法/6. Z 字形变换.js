/**
 * 
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    var res = new Array(numRows).fill('')
    if (numRows == 1) return s
    let row = 0,
        flg = 0
    for (let i = 0; i < s.length; i++) {
        res[row] += s[i]

        if (i % (numRows - 1) == 0) {
            flg = !flg
        }

        if (!flg) {
            row--
        } else {
            row++
        }
    }
    return res.join('')
}

console.log(
    convert('PAYPALISHIRING', 3),
    convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR'
)
