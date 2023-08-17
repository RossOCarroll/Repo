def reverse_string(string)
  array = []
  reversed_string = string.split("")

  reversed_string.length.times do
    puts array << reversed_string.pop
  end
  array.join
end


puts reverse_string("abcde") == "edcba"
puts reverse_string(" ") == " "
puts reverse_string("football") == "llabtoof"
 