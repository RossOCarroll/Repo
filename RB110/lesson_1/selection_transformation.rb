# # Selection using loop

# alphabet = 'abcdefghijklmnopqrstuvwxyz'
# selected_chars = ''
# counter = 0

# loop do 
#   current_char = alphabet[counter]

#   if current_char == 'g'
#     selected_chars << current_char
#   end

#   counter += 1
#   break if counter == alphabet.size

# end

# selected_chars

# # Transformation using loop

# fruits = ['apple', 'banana', 'pear']
# transformed_elements = []
# counter = 0

# loop do
#   current_element = fruits[counter]

#   transformed_elements << (current_element + 's')

#   counter += 1
#   break if counter == fruits.size

# end

# # p transformed_elements
# # p fruits

# #Extracting to methods

# def select_vowels(str)
#   selected_chars = ''
#   counter = 0

#   loop do
#     current_char = str[counter]

#     if 'aeiouAEIOU'.include?(current_char)
#       selected_chars << current_char
#     end

#     counter += 1
#     break if str.size == counter
#   end
#   selected_chars

# end

# # puts select_vowels('the quick brown fox')      # => "euioo"

# # sentence = 'I wandered lonely as a cloud'
# # puts select_vowels(sentence)                   # => "Iaeeoeaaou"



# produce = {
#   'apple' => 'Fruit',
#   'carrot' => 'Vegetable',
#   'pear' => 'Fruit',
#   'broccoli' => 'Vegetable'
# }



# def select_fruit(produce_list)

#   produce_keys = produce_list.keys
#   counter = 0
#   selected_fruit = {}

#   loop do
#     break if counter == produce_keys.size

#     current_key = produce_keys[counter]
#     current_value = produce_list[current_key]

#     if current_value == 'Fruit'
#       selected_fruit[current_key] = current_value
#     end

#     counter += 1


#   end
#   selected_fruit

# end

# select_fruit(produce) # => {"apple"=>"Fruit", "pear"=>"Fruit"}



# def double_numbers(array)

#   doubled_numbers = []
#   counter = 0

#   loop do
#     doubled_numbers << array[counter] * 2
#     counter += 1

#     break if counter == array.size
#   end

#   doubled_numbers

# end




# my_numbers = [1, 4, 3, 7, 2, 6]
# double_numbers(my_numbers) # => [2, 8, 6, 14, 4, 12]


# def double_numbers!(numbers)
#   numbers.each {|num| num * 2}
# end

# double_numbers!(my_numbers)


# def double_odd_numbers(numbers)
#   doubled_numbers = []
#   counter = 0

#   loop do
#     break if counter == numbers.size

#     current_number = numbers[counter]
#     current_number *= 2 if counter.odd?
#     doubled_numbers << current_number 
#     counter += 1

#   end
#   doubled_numbers
# end


# my_numbers = [1, 4, 3, 7, 2, 6]
# puts double_odd_numbers(my_numbers)  # => [2, 4, 6, 14, 2, 6]

# not mutated
# puts my_numbers      

# def general_select(produce_list, selection_criteria)
#   produce_keys = produce_list.keys
#   counter = 0
#   selected_produce = {}

#   loop do
#     break if counter == produce_keys.size

#     current_key = produce_keys[counter]
#     current_value = produce_list[current_key]

#     # used to be current_value == 'Fruit'
#     if current_value == selection_criteria
#       selected_produce[current_key] = current_value
#     end

#     counter += 1
#   end

#   selected_produce
# end

# produce = {
#   'apple' => 'Fruit',
#   'carrot' => 'Vegetable',
#   'pear' => 'Fruit',
#   'broccoli' => 'Vegetable'
# }

# puts general_select(produce, 'Fruit')     # => {"apple"=>"Fruit", "pear"=>"Fruit"}
# puts general_select(produce, 'Vegetable') # => {"carrot"=>"Vegetable", "broccoli"=>"Vegetable"}
# puts general_select(produce, 'Meat')


# def multiply(my_numbers, multiplier)
#   modified_numbers = []
#   counter = 0

#   loop do
#     break if counter == my_numbers.size

#     current_number = my_numbers[counter]
#     modified_numbers << current_number * multiplier

#     counter += 1

#   end

#   modified_numbers
# end


# my_numbers = [1, 4, 3, 7, 2, 6]
# puts multiply(my_numbers, 3) # => [3, 12, 9, 21, 6, 18]

# def select_letter(string, letter)
#   select_letter_string = ''
#   counter = 0

#   loop do
#     break if counter == string.size

#     current_char = string[counter]
#     if current_char == letter
#       select_letter_string << current_char
#     end

#     counter += 1

#   end
#   select_letter_string
# end

# question = 'How many times does a particular character appear in this sentence?'
# puts select_letter(question, 'a') # => "aaaaaaaa"
# puts select_letter(question, 't') # => "ttttt"
# puts select_letter(question, 'z') # => ""


alphabet = 'abcdefghijklmnopqrstuvwxyz'

for char in alphabet.chars
  puts char
end

