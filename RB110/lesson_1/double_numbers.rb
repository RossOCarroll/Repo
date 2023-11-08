
def double_numbers!(numbers)
  numbers.map! {|num| num * 2}
end

my_numbers = [1, 4, 3, 7, 2, 6]
double_numbers!(my_numbers) # => [2, 8, 6, 14, 4, 12]

def double_odd_index(numbers)
  doubled_numbers = []
  counter = 0

  loop do
    break if counter == numbers.size

    current_number = numbers[counter]
    current_number *= 2 if counter.odd?
    doubled_numbers << current_number

    counter += 1
  end

  doubled_numbers
end


my_numbers = [1, 4, 3, 7, 2, 6]
double_odd_index(my_numbers)   # => [2, 8, 6, 14, 4, 12]

my_numbers                    # => [2, 8, 6, 14, 4, 12]


def multiply(array, multiple)
  multiplied_numbers = []
  counter = 0

  loop do
    break if counter == array.size

    current_number = array[counter]
    current_number *= multiple
    multiplied_numbers << current_number

    counter += 1
  end

  multiplied_numbers
end


my_numbers = [1, 4, 3, 7, 2, 6]
p multiply(my_numbers, 3) # => [3, 12, 9, 21, 6, 18]