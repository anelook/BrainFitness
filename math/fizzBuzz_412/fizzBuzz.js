/**
 * Write a program that outputs the string representation of numbers from 1 to n.

 But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

 Example:

 n = 15,

 Return:
 [
 "1",
 "2",
 "Fizz",
 "4",
 "Buzz",
 "Fizz",
 "7",
 "8",
 "Fizz",
 "Buzz",
 "11",
 "Fizz",
 "13",
 "14",
 "FizzBuzz"
 ]

 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.from({length: n}).map((_,i,arr) => {
        if((i+1)%15 === 0)
            return arr[i] = 'FizzBuzz';
        if((i+1)%3 === 0)
            return arr[i] = 'Fizz';
        if((i+1)%5 === 0)
            return arr[i] = 'Buzz';
        return  arr[i] = (i+1).toString();
    });
};