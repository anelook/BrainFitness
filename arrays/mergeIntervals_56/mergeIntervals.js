/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * Given a collection of intervals, merge all overlapping intervals.

 Example 1:

 Input: [[1,3],[2,6],[8,10],[15,18]]
 Output: [[1,6],[8,10],[15,18]]
 Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 Example 2:

 Input: [[1,4],[4,5]]
 Output: [[1,5]]
 Explanation: Intervals [1,4] and [4,5] are considerred overlapping.

 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(!intervals || intervals.length < 2) {
        return intervals;
    }
    intervals.sort((i1, i2) => i1.start === i2.start ? i1.end - i2.end : i1.start - i2.start );

    const result = [];
    let candidate = intervals[0];

    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i].start >= candidate.start && intervals[i].start <= candidate.end) {
            candidate.end = Math.max(intervals[i].end, candidate.end);
        } else {
            result.push({...candidate});
            candidate = intervals[i];
        }
    }
    result.push(candidate);
    return result;
};

// Tried to make the solution shorter...
var merge = function(intervals) {
    if (!intervals || intervals.length < 2) {
        return intervals;
    }
    intervals.sort((i1, i2) => i1.start === i2.start ? i1.end - i2.end : i1.start - i2.start);

    return intervals.reduce((result, interval) => {
        let last = result[result.length - 1];
        if (last && interval.start >= last.start  && interval.start <= last.end) {
            last.end = Math.max(interval.end, last.end);
        }
        else {
            result.push(interval)
        }
        return result;
    }, []);
};