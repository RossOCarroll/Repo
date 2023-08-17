def palindromic_number?(num)
  string = num.to_s.reverse 
  
  #string.to_i == num
  puts string
end





#puts palindromic_number?(34543) == true
#puts palindromic_number?(123210) == false
#puts palindromic_number?(22) == true
#puts palindromic_number?(5) == true

puts palindromic_number?(001100) == true