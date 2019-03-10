class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        int maxSize = Math.min(nums1.length, nums2.length);
        int[] result = new int[maxSize];
        int size = 0;

        for(int i = 0; i< nums1.length; i++) {
            map.put(nums1[i], map.getOrDefault(nums1[i], 0) + 1);
        }

        for(int i = 0; i < nums2.length; i++) {
            int count = map.getOrDefault(nums2[i], 0);
            if(count > 0) {
                map.put(nums2[i], count - 1);
                result[size++] = nums2[i];
            }

        }
        return Arrays.copyOf(result, size);
	}

}