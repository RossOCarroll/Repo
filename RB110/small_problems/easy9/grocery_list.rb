=begin
Write a method which takes a grocery list (array) of fruits with quantities and converts it 
into an array of the correct number of each fruit.

Input:
  -Neste3d array with an item and the quatity

Output:
  - An array with the correct number of each

Rules:

Ouestions:
  -returning a new array?

Test cases / exsamples:

buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
  ["apples", "apples", "apples", "orange", "bananas","bananas"]


Data structure:
  -Array

Algorithm:
  -Set a result array to an empty array
  -Sorten array so its not nested
  -Iterate over array
    -For the amount of times
      -For each element append the fruit 

  -return result
=end

def buy_fruit(array)
  groceries = []
  array.each do |item|
    item[1].times {|_| groceries << item[0]}
    

  end
  groceries
end



p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
  ["apples", "apples", "apples", "orange", "bananas","bananas"]