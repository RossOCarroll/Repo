def compute_sum(number)
  total = 0
  1.upto(number) {|value| total += value }
  total
end

def compute_product(number)
  total = 1
  1.upto(number) {|value| total *= value }
  total
end


puts ">> Please ener an integer greater than 0"
integer = gets.chomp.to_i


puts ">> Enter 's' to compute the sum, 'p' to compute the product"
answer = gets.chomp.upcase!
  if answer == 'S'
    sum = compute_sum(integer)
    puts "The sum of all the integers between one and #{integer} is #{sum}"
  elsif answer == 'P'
    product = compute_product(integer)
    puts "The product of all the integers between one and #{integer} is #{product}"
  else
    puts "Oops. Unkown operation"
  end




