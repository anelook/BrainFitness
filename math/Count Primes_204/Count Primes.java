class Solution {
    public int countPrimes(int n) {
        boolean[] isNotPrime = new boolean[n];
        int count = 0;
        for(int i = 2; i<n; i++) {
            if(!isNotPrime[i]) {
                count++;
                for(int k = 2; i*k<n; k++) {
                    isNotPrime[i*k] = true;
                }
            }
        }

        return count;
    }
}