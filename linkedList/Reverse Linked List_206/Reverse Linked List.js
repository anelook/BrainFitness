/**
 * Reverse a singly linked list.

 Example:

 Input: 1->2->3->4->5->NULL
 Output: 5->4->3->2->1->NULL
 Follow up:

 A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

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
var reverseList = function(head) {
    if(!head || !head.next) {
        return head;
    }
    let node;
    let previous = null;

    while(head) {
        node = new ListNode(head.val);
        node.next = previous;
        previous = node;
        head = head.next;
    }

    return node;
};

/**In place*/
/**Iterative*/
var reverseList = function(head) {
    if(!head || !head.next) {
        return head;
    }
    let newHead = null;

    while(head) {
        const temp = head.next;
        head.next = newHead;
        newHead = head;
        head = temp;
    }

    return newHead;
};

/**recursive*/
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
var reverseList = function(head, newHead) {
    if(!head) {
        return newHead ? newHead : head;
    }

    const temp = head.next;
    head.next = newHead;
    newHead = head;
    head = temp;

    return reverseList(head, newHead)
};
