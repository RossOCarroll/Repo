=begin

Input:
  -Integer

Ouput:
  -Itteger representing the next bigger number formed by the same digit

Explicit:
  -return -1 if no valid number is found

Question


Algorithm:
  -Split the input number into array
  -Find the max number that we can iterate to
    -Sort the digits
  -Starting from the input number up to the max number
    -break if the number contians all the digits in the input number
=end

def next_bigger(input_num)
  digits_array = input_num.digits

  max_num = digits_array.sort {|a, b,| b <=> a }.join.to_i
  current_num = input_num

  input_num.upto(max_num) do 

    current_num += 1
    break if current_num.to_s.chars.sort == digits_array.to_s.chars.sort
  end
  current_num
end


p next_bigger(9)
p next_bigger(12)
p next_bigger(513)
p next_bigger(2017)
p next_bigger(111)

