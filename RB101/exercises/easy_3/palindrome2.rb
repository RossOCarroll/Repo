def palindrome?(input)
  input.downcase!
  input.gsub!(/\W|\d/, "")
  return true if input == input.reverse
  return false if input != input.reverse
  input
end

#p palindrome?("madam i'm adam")
#p palindrome?('356653')
#p palindrome?([1, 2, 3, 3, 2, 1])
p palindrome?('Madam')
p palindrome?("Madam, I'm Adam")
p palindrome?('123ab321')