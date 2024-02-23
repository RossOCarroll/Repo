=begin

Merge Intervals: Write a Ruby method that takes an array of intervals, where each interval is represented by a 
pair of integers [start, end], and merges overlapping intervals. The method should return an array of the merged 
intervals in sorted order.
ruby

input:
  -A nested array of two integer pair arrays

Output
  -A nested array with all the overlaping intervals removed

Data Structure:
  -integers
  -Arrays

Algorithm:
  -Sort the intevals by first element
  -iterate over the input array
  -




def merge_intervals(intervals)
  # Your implementation here
end

# Test cases
p merge_intervals([[1,3],[2,6],[8,10],[15,18]]) # Expected output: [[1,6],[8,10],[15,18]]
p merge_intervals([[1,4],[4,5]]) # Expected output: [[1,5]]