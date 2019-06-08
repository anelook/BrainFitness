/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let slow = head
    let fast = head
    let slowHead = slow
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }

    if (!fast) {
        return slow.next
    }

    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next
    return slowHead;
};