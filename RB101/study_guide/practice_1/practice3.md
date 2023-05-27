```ruby
total = 0
[1, 2, 3].each do |number|
  total += number
end
puts total # 6
```
In this code snipet on line one we have the local varible total assigned to the integer 0. This varible is initalized on the out scope and is accesble throughout the program. 

On line 2 we have the .each method invoked on the array [1, 2, 3]. A block (which serves as a argument for the .each method) with a do..end from lines 2 through 4. Within that block we have the |number| varible that acts as a varible alise for each object in the array. On line 3 we have the total varible being reassigned to number plus number using the operator += This operater is creates a more concise syntax for total = total + number. The .each method then iterates through the array [1, 2, 3] adding each number together and assigning it to the total varible. 

On line 5 we have the puts method called upon the varible total which outputs 6 the sum of each character in the array and returns nil. The puts method always returns nil.