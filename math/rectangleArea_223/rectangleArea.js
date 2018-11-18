/**
 * Find the total area covered by two rectilinear rectangles in a 2D plane.

 Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

 Rectangle Area

 Example:

 Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
 Output: 45
 Note:

 Assume that the total area is never beyond the maximum possible value of int.
 
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */

const calcGap = function(A, B, C, D, E, F, G, H) {
    const width = (Math.min(C, G) - Math.max(A, E));
    const height = (Math.min(D, H) - Math.max(B, F));

    if (width > 0 && height > 0) {
        return width * height
    }
    return 0;
}
var computeArea = function(A, B, C, D, E, F, G, H) {
    return (C - A) * (D - B) + (G - E) * (H - F) - calcGap(A, B, C, D, E, F, G, H);
};