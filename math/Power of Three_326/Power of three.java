class Solution {
    public boolean isPowerOfThree(int n) {
        double d = n;
        while (d > 1) {
            d = d/3;
        }
        return d == 1;
    }
}

//https://leetcode.com/problems/power-of-three/discuss/77876/**-A-summary-of-all-solutions-(new-method-included-at-15%3A30pm-Jan-8th)