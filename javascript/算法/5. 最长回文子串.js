/*
给你一个字符串 s，找到 s 中最长的回文子串
。

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
*/
/**
 * @param {string} s
 * @return {string}
 */

function getPalindrome(s, i, j) {
    while (i >= 0 && i < s.length) {
        if (s[i] === s[j]) {
            i--
            j++
        } else {
            break
        }
    }
    return s.slice(i + 1, j)
}

var longestPalindrome = function (s) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        let s1 = getPalindrome(s, i, i)
        let s2 = getPalindrome(s, i, i + 1)
        res = res.length > s1.length ? res : s1
        res = res.length > s2.length ? res : s2
    }
    return res
}
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
