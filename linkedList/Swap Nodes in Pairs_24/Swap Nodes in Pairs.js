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
var swapPairs = function (head) {
    let fakeHead = {next: head}
    const result = fakeHead
    while (fakeHead.next && fakeHead.next.next) {
        const first = fakeHead.next
        const second = fakeHead.next.next
        const third = fakeHead.next.next.next

        fakeHead.next = second
        fakeHead.next.next = first
        fakeHead.next.next.next = third
        fakeHead = first
    }

    return result.next

}