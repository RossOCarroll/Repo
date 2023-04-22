odd_numbers = (1..99).select {|x| x % 2 != 0}

numbers = [1..99]

odd_numbers2 = numbers.each {|x| x % 2 != 0}

puts odd_numbers2



