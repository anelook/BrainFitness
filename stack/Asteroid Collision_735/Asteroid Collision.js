/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const stack = []
    for (let i = 0; i < asteroids.length; i++) {
        stack.push(asteroids[i])

        while (stack.length > 1 && (stack[stack.length - 1] < 0 && stack[stack.length - 2] > 0)) {
            const current = stack.pop()
            const last = stack.pop()
            if (Math.abs(current) === Math.abs(last)) {
                break
            }
            if (Math.abs(current) > Math.abs(last)) {
                stack.push(current)
            } else {
                stack.push(last)
            }
        }
    }

    return stack
}