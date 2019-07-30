/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let fives = 0
    let tens = 0

    for (let i = 0; i < bills.length; i++) {
        let bill = bills[i]
        if (bill === 5) {
            fives++
            continue
        }
        else if (bill === 10) {
            fives--
            tens++
        }
        else if (bill === 20) {
            if (tens > 0) {
                tens--
                fives--
            } else {
                fives -= 3
            }
        }
        if (fives < 0) {
            return false
        }
    }
    return true
    //test
}