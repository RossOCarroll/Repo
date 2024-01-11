=begin
  
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

input:
  -Array of strings representing peoples names

Output:
  -A string proclaiming this person likes this 

Implicit requirments:
  -An empty array should outpuit that "no one likes this"

Questions?

Test cases / exsamples
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Data Structure:
  -Array
  -Strings

Algorithim:
  -Determine the count of the input array
  -If input array is empty
    -Ouput "no one likes this"
  -If input array iss equal to 1
    -Return at index 0 followed by ..likes this
  -If input array is equal to 2
    -Return index 0 'and' index 1 ..like this
  if input array is equal to 3
    -return index 0 ',' index 1 and index 2 like this
  -If input array is greater then 3
    -return index 1 ',' index 2 and the size of the array minus 2 like this


=end


def likes(names)
  count = names.size - 2

  case 
  when names.empty? then "no one likes this"
  when names.length == 1 then "#{names[0]} likes this"
  when names.length == 2 then "#{names[0]} and #{names[1]} like this"
  when names.length == 3 then "#{names[0]}, #{names[1]} and #{names[2]} like this"
  when names.length > 3 then "#{names[0]}, #{names[1]} and #{count} others like this"
  end

end


p likes([])                               ==  "no one likes this"
p likes(["Peter"])                        ==  "Peter likes this"
p likes(["Jacob", "Alex"])                ==  "Jacob and Alex like this"
p likes(["Max", "John", "Mark"])          ==  "Max, John and Mark like this"
p likes(["Alex", "Jacob", "Mark", "Max"]) ==  "Alex, Jacob and 2 others like this"