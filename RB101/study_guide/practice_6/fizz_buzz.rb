def fizzbuzz(first_num, end_num)
  fizzbuzz_array = []
  (first_num..end_num).to_a.each do |element|
    if element % 3 == 0 && element % 5 == 0
      fizzbuzz_array << "FizzBuzz"
    elsif element % 3 == 0
      fizzbuzz_array << 'Fizz'
    elsif element % 5 == 0
      fizzbuzz_array << "Buzz"
    else
      fizzbuzz_array << element
    end
  end
  fizzbuzz_array.join(', ')
end

puts fizzbuzz(1, 15)