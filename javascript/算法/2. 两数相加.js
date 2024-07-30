/**
 * Definition for singly-linked list.
 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(0)
    let cur = head
    let carry = 0
    while (l1 || l2 || carry) {
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
        carry = Math.floor(sum / 10)
        cur.next = new ListNode(sum % 10)
        cur = cur.next
        l1 = l1?.next
        l2 = l2?.next
    }

    return head.next
}
let m = addTwoNumbers(l1, l2)
let s = []

while (m) {
    s.push(m.val)
    m = m.next
}

console.log(m, s)
