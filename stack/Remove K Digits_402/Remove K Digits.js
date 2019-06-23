/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    const stack = []

    let remain = k
    let expectedLength = num.length - k

    for (let i = 0; i < num.length; i++) {
        const candidate = num[i]

        const buffer = num.length - i
        while (remain > 0 && stack[stack.length - 1] > candidate) {
            if (stack.length + buffer <= expectedLength) { // stop, because we have not enough remaining items
                break
            }
            stack.pop()
            remain--
        }
        if (stack.length < num.length - k) {
            stack.push(candidate)
        }
    }
    const result = stack.join('').replace(/^0+/, '')
    return result.length > 0 ? result : '0'
}


var removeKdigits = function (num, k) {
    let stack = [], numDigits = num.length
    for (let i = 0; i < numDigits; i++) {
        while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
            stack.pop()
            k--
        }
        stack.push(num[i])
    }
    stack = k > 0 ? stack.slice(0, -k) : stack
    return stack.join('').replace(/^0+/, '') || '0'
}

var removeKdigits = function (num, k) {
    let stack = []
    for (let i = 0; i < num.length; i++) {
        const candidate = num[i]

        while (k > 0 && stack.length && stack[stack.length - 1] > candidate) {

            stack.pop()
            k--
        }

        stack.push(candidate)

    }
    stack = k > 0 ? stack.slice(0, -k) : stack
    return stack.join('').replace(/^0+/, '') || '0'
}