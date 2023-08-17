def arrows(string)
  puts ">> " + string
end

def sum(input)
  array = []
  1.upto(input) {|num| array << num}
  array.sum
end

def product(input)
  array = []
  1.upto(input) {|num| array << num}
  array.inject(:*)
end

integer = ''

loop do
arrows("Please enter an integer greater than 0")
integer = gets.chomp.to_i
  if integer < 0
    puts "Invalid integer"
  else
    break
  end
end


loop do
  arrows("Enter 's' to compute the sum and 'p' to compute the product:")
  operator = gets.chomp.upcase
    if operator == 'S'
      arrows("The sum of the integers between 1 and #{integer} is #{sum(integer)}")
      break
    elsif operator == 'P'
      arrows("The sum of the integers between 1 and #{integer} is #{product(integer)}")
      break
    else
      puts "Invalid input"
    end
 end
  