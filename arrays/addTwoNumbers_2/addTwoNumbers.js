/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let tail = new ListNode();
    const head = tail;
    let curry = 0;
    while(l1 || l2 || curry) {
        let sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + curry;
        curry = sum > 9 ? 1 : 0;
        sum = curry ? sum - 10 : sum;

        tail = tail.next = new ListNode(sum);
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return head.next;
};