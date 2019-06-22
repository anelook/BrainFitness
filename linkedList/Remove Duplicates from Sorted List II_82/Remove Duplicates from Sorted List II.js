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
var deleteDuplicates = function (head) {
    let fakeHead = {next: head}
    const result = fakeHead

    while (fakeHead.next) {
        const candidateValue = fakeHead.next.val

        let subHead = fakeHead.next
        let nextDifferent
        while (subHead.next && subHead.next.val === candidateValue) {
            nextDifferent = subHead.next.next
            subHead = subHead.next
        }

        if (nextDifferent === undefined) {
            fakeHead = fakeHead.next
        } else {
            fakeHead.next = nextDifferent
        }
    }

    return result.next
}

var deleteDuplicates = function (head) {
    let fakeHead = {next: head}
    let slow = fakeHead
    let fast = fakeHead.next

    while (fast && slow.next) {
        while (fast.next && fast.next.val === slow.next.val) {
            fast = fast.next
        }

        if (fast === slow.next) {
            fast = fast.next
            slow = slow.next
        } else {
            slow.next = fast.next
        }
    }

    return fakeHead.next
}