/**
 * @param {number[]} nums
 * @return {number}
 */

// the way this shouldn't be done...
let missingNumber = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === i) {
            continue;
        }
        let j = i;
        let value = nums[j];

        while(value !== j && value !== -1) {
            const next = nums[value]; //remember next
            if(next === undefined) {
                if( nums[j] !== j) {
                    nums[j] = -1;
                }

                break;
            }
            nums[value] = value; //assign current value to next
            const temp = j // remember current position

            if(nums[temp] !== temp) { // if value in the current position is not correct
                nums[temp] = -1;
            }
            j = value; //change current position
            value = next; //update the current value to the next one
        }
    }

    const missing = nums.findIndex(v =>v === -1);
    return missing === -1 ? nums.length : missing;
}