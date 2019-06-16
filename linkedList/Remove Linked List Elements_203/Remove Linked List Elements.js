/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let tail = head

    while (tail) {
        if (tail.next && tail.next.val === val) {
            tail.next = tail.next.next
        } else {
            tail = tail.next
        }
    }

    return head && head.val === val ? head.next : head
}