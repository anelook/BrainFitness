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
var mergeTwoLists = function(l1, l2) {
    const head = new ListNode();
    let tail = head;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            tail.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        tail = tail.next;
    }

    if (l1 || l2) {
        tail.next = l1 || l2;
    }
    return head.next;
};
