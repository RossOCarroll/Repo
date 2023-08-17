def palindrome?(input)
  input == input.reverse
end









puts palindrome?('madam') == true
puts palindrome?('Madam') == false          # (case matters)
puts palindrome?("madam i'm adam") == false # (all characters matter)
puts palindrome?('356653') == true

puts palindrome?([1, 2, 3, 3, 2, 1]) == true