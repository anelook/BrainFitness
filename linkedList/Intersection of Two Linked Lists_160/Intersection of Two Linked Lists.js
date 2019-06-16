/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) {
        return null;
    }
    let tailA = headA;
    let tailB = headB;

    let lengthA = 1;
    let lengthB = 1;

    while(tailA.next) {
        tailA = tailA.next
        lengthA++
    }
    while(tailB.next) {
        tailB = tailB.next
        lengthB++
    }

    if(lengthA > lengthB) {
        while(lengthA > lengthB) {
            lengthA--
            headA = headA.next
        }
    } else if (lengthB > lengthA) {
        while(lengthB > lengthA) {
            lengthB--
            headB = headB.next
        }
    }


    while(headA !== headB) {
        headA = headA.next
        headB = headB.next
    }

    return headA

};