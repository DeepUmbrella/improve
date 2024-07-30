/**
 *
 * 最长递增子序列
 */

const longestIncreasingSubsequence = (nums) => {
    const result = []

    for (let i = 0; i < nums.length; i++) {
        let index = i + 1
        let left = nums[i]
        result[i] = [left]
        while (index < nums.length) {
            if (nums[index] > left) {
                result[i].push(nums[index])
                left = nums[index]
            }
            if (nums[i] < nums[index] && nums[index] < left) {
                left = nums[index]
                result[i][result[i].length - 1] = nums[index]
            }

            index++
        }
    }
    result.sort((a, b) => b.length - a.length)
    return {
        length: result[0].length,
        value: result[0],
    }
}

/**
 * example
 * [10, 9, 2, 5, 3, 7, 101, 18] -> [2, 3, 7, 101]
 */

console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 4, 7, 101, 18]))
console.log(longestIncreasingSubsequence([4, 5, 1, 2, 7, 3, 6, 9]))
