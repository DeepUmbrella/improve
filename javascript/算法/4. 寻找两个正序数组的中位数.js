/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**
 #给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数 。
 算法的时间复杂度应该为 O(log (m+n)) 。
*/

var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a, b) => a - b)
    console.log(arr)
    var arrlen = arr.length
    return arrlen % 2 === 0
        ? (arr[arrlen / 2 - 1] + arr[arrlen / 2]) / 2
        : arr[Math.floor(arrlen / 2)]
}

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 3], [2, 4]))
console.log(findMedianSortedArrays([-2, -1], [3]))
