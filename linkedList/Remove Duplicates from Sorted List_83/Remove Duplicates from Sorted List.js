/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let tail = head;
    while (tail && tail.next) {
        if (tail.val === tail.next.val) {
            tail.next = tail.next.next;
        } else {
            tail = tail.next;
        }
    }

    return head;
};