/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let right = 0
    let left = 0
    let res = 0
    let map = new Map()

    while (right < s.length) {
        if (map.has(s[right])) {
            res = Math.max(res, map.size)
            map.clear()
            left = map.get(s[right]) + 1
            right = left
        }
        map.set(s[right], right)
        right++
    }

    return Math.max(res, map.size)
}

var lengthOfLongestSubstring = function (s) {
    let right = 0
    let left = 0
    let res = 0

    while (right < s.length) {
        right++
        var win = s.slice(left, right)
        var index = win.indexOf(s[right])
        if (index != -1) {
            left += index + 1
        }
        res = Math.max(res, win.length)
    }

    return res
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring(' '))
console.log(lengthOfLongestSubstring('aab'))
