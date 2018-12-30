// This could be done more intuitively with two stacks.
// but this solution handles both min value and all added values through one stack
// https://leetcode.com/problems/min-stack/discuss/49014/Java-accepted-solution-using-one-stack


/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = Number.MAX_SAFE_INTEGER;
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(x <= this.min) { // careful with <=, just < won't work
        this.stack.push(this.min);
        this.min = x;
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.pop() === this.min) {
        this.min = this.stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */