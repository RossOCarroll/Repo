def format(input)
  puts '==> ' + input
end

format("Enter the first number:")
first = gets.chomp.to_i

format("Enter the second number:")
second = gets.chomp.to_i

add = first + second
subtract = first - second
multiply = first * second
divide = first / second
remainder = first % second
power = first ** second

format("#{first} + #{second} = #{add}")
format("#{first} - #{second} = #{subtract}")
format("#{first} * #{second} = #{multiply}")
format("#{first} / #{second} = #{divide}")
format("#{first} % #{second} = #{remainder}")
format("#{first} ** #{second} = #{power}")
